"""
Directive for using 3dmoljs to view molecules in Sphinx Documentaton.
"""

import os

from docutils import nodes
from docutils.parsers.rst import Directive

from sphinx.util.docutils import SphinxDirective
from sphinx.util.fileutil import copy_asset_file


class view(nodes.General, nodes.Element):
    pass


class MoleculeView(SphinxDirective):

    has_content = True

    def run(self):
        view_id = f'viewport-{self.env.new_serialno("view")}'
        settings = {}

        for content in self.content:
            split_content = content.split(":", 1)
            settings[split_content[0]] = split_content[1]

        node = view()
        node.view_id = view_id
        node.settings = settings
        node.settings["work_dir"] = os.path.dirname(self.env.doc2path(self.env.docname))
        return [node]


def html_visit_output_node(self, node):

    defaults = {
        "data-backgroundcolor": "white",
        "width": "400px",
        "height": "300px",
    }



    if "data-pdb" not in node.settings and "data-href" not in node.settings:
        raise KeyError("You must specify a path to a pdb or file to visualize.")

    if "data-pdb" in node.settings and "data-href" in node.settings:
        raise ValueError("You should only specify one molecule file to visualize.")

    style_found = any(["data-style" in key for key in node.settings.keys()])

    if not style_found:
        defaults["data-style"] = "stick"

    for k, v in node.settings.items():
        k = k.strip()
        v = v.replace("ball+stick", "stick;sphere:radius~0.5")
        defaults[k] = v.strip()

    source_string = ""

    if "data-pdb" in defaults:
        source_string = f'data-pdb={defaults["data-pdb"]}'
    elif "data-href" in defaults:
        node.settings["data-href"] = node.settings["data-href"].strip()
        file_location = os.path.join(node.settings["work_dir"], node.settings["data-href"])
        file_name= os.path.basename(file_location)
        
        # bad path manipulations 
        common_path = os.path.commonpath([self.settings.env.app.builder.outdir, node.settings["work_dir"]])
        join_path = os.path.split(file_location[len(common_path)+1:])[0]
        join_path2 = os.path.split(node.settings["work_dir"][len(common_path)+1:])
        
        if not join_path2[0]:
            join_path2 = join_path2[1]
        else:
            join_path2 = join_path2[0]
        copy_location = os.path.join(self.settings.env.app.builder.outdir, join_path)

        if join_path2:
            join_path = join_path[len(join_path2)+1:]

        source_string = os.path.join(join_path, file_name)
        source_string = f'data-href={source_string}'

        os.makedirs(copy_location, exist_ok=True)
        copy_asset_file(file_location, copy_location)

    # Set data styles
    data_style = ""

    # Process extra styles
    style_keys = [k for k in defaults.keys() if "style" in k]
    select_keys = [k for k in defaults.keys() if "select" in k]

    for i in range(len(style_keys)):
        style_key = style_keys[i]
        data_style += f" {style_key}={defaults[style_key]} "

    for i in range(len(select_keys)):
        select_key = select_keys[i]
        data_style += f" {select_key}={defaults[select_key]} "
    
    show_string = f'<center><div style="height: {defaults["height"]}; width: {defaults["width"]}; position: relative;" class="viewer_3Dmoljs" {source_string} data-backgroundcolor="{defaults["data-backgroundcolor"]}" {data_style}></div></center>'
    self.body.append(show_string)


def html_depart_output_node(self, node):
    pass


def setup(app):

    app.add_node(
        view,
        html=(html_visit_output_node, html_depart_output_node),
    )

    app.add_directive("moleculeview", MoleculeView)

    return {
        "version": "0.1",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }