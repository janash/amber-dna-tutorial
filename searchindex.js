Search.setIndex({"docnames": ["index", "system_build", "vacuum/analysis", "vacuum/index", "vacuum/minimization", "vacuum/simulation", "vacuum/visualization_nglview", "vacuum/visualization_vmd"], "filenames": ["index.rst", "system_build.md", "vacuum/analysis.md", "vacuum/index.rst", "vacuum/minimization.md", "vacuum/simulation.md", "vacuum/visualization_nglview.md", "vacuum/visualization_vmd.md"], "titles": ["Simulating DNA with Different Solvation Models", "System Preparation", "Analysis", "Running Minimization and Molecular Dynamics in vacuo", "Minimization", "Running MD in-vacuo", "&lt;no title&gt;", "Visualizing the trajectories with VMD"], "terms": {"The": [0, 1, 2, 4, 5, 7], "purpos": [0, 1, 2, 4, 5], "thi": [0, 1, 2, 3, 4, 5, 7], "tutori": [0, 1, 3, 5, 7], "i": [0, 1, 2, 4, 5, 7], "provid": [0, 2, 7], "an": [0, 1, 2, 4, 5], "introduct": 0, "set": [0, 1, 4, 5], "up": [0, 2, 4, 7], "run": [0, 1, 2], "us": [0, 2, 3, 4, 5, 7], "amber": [0, 1, 2, 5, 7], "softwar": 0, "It": [0, 1, 2, 4, 5], "base": [0, 1, 2], "23": 0, "ambertool": [0, 2], "should": [0, 2, 4, 5, 7], "most": [0, 4, 5, 7], "recent": 0, "version": [0, 4, 5], "avail": 0, "In": [0, 1, 2, 4, 5, 7], "we": [0, 1, 2, 3, 4, 5, 7], "seri": [0, 2], "dickerson": 0, "dodecam": [0, 4, 5, 7], "well": [0, 2, 7], "known": 0, "structur": [0, 2, 4, 5, 7], "first": [0, 1, 2], "figur": 0, "out": [0, 1, 2, 4, 5, 7], "how": [0, 2, 3, 5, 7], "gener": [0, 1, 4, 5], "start": [0, 4, 5, 7], "construct": 0, "necessari": [0, 1, 4], "input": [0, 1, 2, 3, 5], "file": [0, 3, 5, 7], "sander": [0, 2, 3, 5], "molecular": [0, 1, 4, 5, 7], "dynam": [0, 1, 4, 5, 7], "engin": 0, "suppli": [0, 5], "you": [0, 1, 2, 4, 5, 7], "short": [0, 1, 4, 5], "duplex": 0, "solvent": [0, 1, 3, 4, 5, 7], "condit": [0, 7], "becaus": [0, 1, 4, 5], "highli": 0, "charg": [0, 1, 2, 7], "molecul": [0, 1, 2, 5, 7], "environ": [0, 7], "veri": [0, 2, 4, 7], "import": [0, 2], "perform": [0, 1, 2, 4, 5], "four": 0, "vacuum": [0, 2, 7], "cut": [0, 2, 4, 5, 7], "off": [0, 2, 4, 5, 7], "implicit": [0, 1, 3, 4, 5], "explicit": [0, 1, 3, 4, 7], "ion": [0, 1, 7], "1": [0, 1, 2, 4, 5, 7], "2": [0, 2, 4, 5], "system": [0, 2, 3, 4, 5], "prepar": 0, "obtain": [0, 2, 7], "creat": [0, 2, 3], "prmtop": [0, 2, 3, 4, 5, 7], "inpcrd": [0, 3, 4], "minim": [0, 1, 5], "vacuo": [0, 4, 7], "md": [0, 2, 3, 4], "analysi": [0, 3], "visual": [0, 1, 2, 3], "trajectori": [0, 2, 3, 4, 5], "vmd": [0, 2, 3], "from": [1, 3, 5, 7], "protein": [1, 4], "data": [1, 2, 4], "bank": [1, 4], "pdb": 1, "1bna": 1, "For": [1, 2, 3, 4, 5], "our": [1, 2, 3, 4, 5, 7], "simul": [1, 2, 3, 4, 5, 7], "model": [1, 3, 4, 5, 7], "databank": 1, "strip": 1, "water": [1, 7], "tleap": [1, 4, 5], "load": [1, 2, 7], "forcefield": 1, "topologi": [1, 4], "coordin": [1, 5], "execut": [1, 4], "command": [1, 2, 4, 5], "your": [1, 2, 5, 7], "termin": [1, 4, 7], "ve": [1, 2, 4], "contain": [1, 2], "some": [1, 2, 4, 5], "type": [1, 2, 5, 7], "its": [1, 7], "name": [1, 4, 5], "shell": 1, "follow": [1, 2, 4, 5], "can": [1, 2, 3, 4, 5, 7], "parm": [1, 2, 4, 7], "read": 1, "line": [1, 2, 4], "trajin": [1, 2, 4], "24": 1, "everyth": [1, 4], "residu": [1, 4], "trajout": [1, 4], "dna_onli": 1, "go": [1, 2, 4, 5, 7], "now": [1, 2, 4, 5, 7], "have": [1, 2, 4, 5, 7], "onli": [1, 4, 5], "ha": [1, 2], "These": [1, 2, 5], "paramet": [1, 2, 4, 7], "atom": [1, 2, 4], "connect": 1, "stand": 1, "everi": [1, 4, 5], "initi": [1, 3, 4, 5], "open": [1, 2, 7], "appropri": [1, 5], "As": [1, 2, 5, 7], "write": [1, 2, 5], "sept": 1, "2023": 1, "ol21": 1, "wa": [1, 2, 4, 5, 7], "recommend": [1, 5], "sourc": 1, "leaprc": 1, "loadpdb": 1, "leap": 1, "previou": [1, 4, 5], "step": [1, 2, 4, 5], "save": 1, "variabl": [1, 4, 5], "call": [1, 7], "last": [1, 4, 7], "ar": [1, 2, 4, 5, 7], "saveamberparm": 1, "dodecamer_vac": [1, 2, 3, 4, 5, 7], "quit": [1, 4], "all": [1, 2, 4, 5, 7], "text": 1, "block": 1, "abov": [1, 4, 7], "If": [1, 2, 4, 5, 7], "bash": [1, 2, 4, 5], "f": [1, 2, 5], "after": [1, 2, 4], "see": [1, 2, 4, 5, 7], "output": [1, 2, 4, 5], "similar": [1, 2], "ad": [1, 4], "amberhom": 1, "dat": 1, "prep": 1, "search": 1, "path": 1, "lib": 1, "cmd": 1, "leap_vac": 1, "welcom": 1, "done": [1, 2], "log": 1, "librari": 1, "ff": 1, "nucleic": 1, "parm10": 1, "titl": 1, "parm99": 1, "frcmod": 1, "ff99sb": 1, "parmbsc0": 1, "ol3": 1, "rna": 1, "forc": [1, 2, 4, 7], "field": [1, 4], "modif": 1, "ol15": 1, "alpha": 1, "gamma": 1, "http": 1, "ffol": 1, "upol": 1, "cz": 1, "total": [1, 2, 5, 7], "486": 1, "272": 1, "miss": 1, "accord": 1, "templat": 1, "h": 1, "lone": 1, "pair": 1, "check": [1, 4, 5], "unit": 1, "warn": 1, "unperturb": 1, "22": 1, "000000": 1, "zero": [1, 2], "note": [1, 4, 5, 7], "ignor": [1, 2], "build": [1, 3], "bond": [1, 2, 4, 5], "angl": [1, 2], "proper": 1, "torsion": 1, "improp": 1, "260": 1, "appli": 1, "incorpor": 1, "non": [1, 4, 5], "adjust": 1, "Not": 1, "mark": 1, "per": 1, "chain": [1, 2, 7], "restraint": [1, 2, 4], "tell": 1, "u": [1, 4], "what": [1, 2, 4, 5, 7], "give": [1, 5], "inform": [1, 2, 4, 5], "about": [1, 2, 4, 7], "happen": [1, 2, 5], "when": [1, 2, 4, 5, 7], "one": [1, 2, 4, 5, 7], "thing": [1, 5], "program": [1, 2, 7], "doe": [1, 2, 5], "attempt": 1, "match": 1, "exist": [1, 4, 7], "those": 1, "been": [1, 2], "standard": 1, "each": [1, 2, 4, 5, 7], "acid": 1, "present": 1, "": [1, 2, 4, 5], "hydrogen": [1, 2, 4, 5], "abl": 1, "do": [1, 2, 4, 5], "defin": [1, 7], "found": [1, 7], "content": 1, "copi": 1, "ter": 1, "card": 1, "separ": 1, "current": [1, 4], "between": [1, 2, 4], "connect1": 1, "connect0": 1, "new": [1, 2, 4, 7], "record": 1, "written": [1, 2, 4], "correspondingli": 1, "within": [1, 5, 7], "being": [1, 4, 5], "built": 1, "entir": [1, 5], "extern": [1, 7], "intern": 1, "were": [1, 2, 4, 5], "allow": [1, 4, 5], "which": [1, 2, 4, 5, 7], "specifi": [1, 4, 5], "A": [1, 2, 4, 5, 7], "shown": [1, 2, 5, 7], "below": [1, 2, 4, 5, 7], "top": 1, "helix": 1, "look": [1, 2, 4, 5, 7], "down": [1, 2], "z": 1, "axi": 1, "click": [1, 7], "rotat": [1, 7], "view": [1, 2, 7], "make": [1, 2, 4, 5, 7], "second": [1, 4, 5], "addit": 1, "opc": 1, "associ": [1, 7], "li": 1, "merz": 1, "12": [1, 2, 4, 5, 7], "6": [1, 4], "demonstr": 1, "prmotop": 1, "leap_solv": 1, "IN": 1, "addion": 1, "na": 1, "0": [1, 2, 4, 5, 7], "dodecamer_ion": 1, "leap_ion": 1, "add": 1, "enough": 1, "neutral": [1, 7], "sodium": 1, "place": [1, 4], "around": [1, 2, 5], "neg": [1, 2], "backbon": [1, 2], "someth": [1, 2], "besid": 1, "cubic": 1, "box": [1, 2], "often": [1, 5], "solvatebox": 1, "result": [1, 2, 3, 5, 7], "rectangular": 1, "though": [1, 2, 5, 7], "doesn": [1, 7], "t": [1, 2, 4, 7], "requir": [1, 5], "consid": [1, 2], "illustr": 1, "sinc": [1, 2, 4, 5, 7], "cylindr": 1, "issu": [1, 5], "here": [1, 2, 4, 5, 7], "long": [1, 5], "could": 1, "via": [1, 4, 7], "self": 1, "diffus": 1, "along": 1, "dimens": 1, "infinit": 1, "repeat": [1, 2, 7], "space": [1, 4, 5], "period": [1, 4, 5], "boundari": 1, "method": [1, 4, 5], "bring": 1, "end": [1, 2, 4, 5], "imag": [1, 2, 4], "One": [1, 2, 7], "wai": [1, 7], "get": [1, 2, 5], "would": [1, 2, 4, 5], "list": [1, 2], "number": [1, 4, 5], "howev": [1, 2, 4, 5], "significantli": [1, 2, 5], "more": [1, 2, 4, 5], "calcul": [1, 3, 4, 5], "slow": 1, "tremend": 1, "altern": 1, "differ": [1, 2, 4, 5, 7], "shape": 1, "while": [1, 2, 5], "obviou": [1, 7], "choic": [1, 5], "tessel": 1, "3": [1, 2, 3, 4, 5], "dimension": 1, "replic": 1, "effici": [1, 4, 5], "term": [1, 5], "reduc": 1, "problem": [1, 2, 5], "solut": [1, 5], "truncat": 1, "octahedron": 1, "fill": 1, "spheric": 1, "than": [1, 2, 4, 5], "cube": 1, "thu": [1, 2, 4, 7], "wast": 1, "less": [1, 4, 5], "comput": [1, 4], "distant": 1, "To": [1, 2, 4, 5], "octahedr": 1, "solvateoct": 1, "like": [1, 2, 4, 5, 7], "opcbox": 1, "8": 1, "dodecamer_solv": 1, "progress": [1, 4, 5], "next": [1, 2, 4, 5, 7], "section": [1, 3, 4, 5], "introduc": [1, 3, 4, 5, 7], "download": [1, 7], "final": [1, 4, 5, 7], "so": [2, 4, 5, 7], "want": [2, 4, 5], "through": [2, 5], "dodecamer_vac_md1_12acut": [2, 5], "dodecamer_vac_md1_nocut": [2, 5, 7], "also": [2, 4, 5, 7], "good": [2, 4, 5, 7], "idea": [2, 4, 5], "variou": [2, 5], "function": [2, 5], "plot": 2, "kinet": [2, 5], "potenti": [2, 5], "etc": [2, 4], "movi": [2, 7], "much": [2, 4, 5, 7], "fun": 2, "crd": 2, "e": [2, 4, 5, 7], "anim": [2, 7], "control": [2, 4, 5, 7], "later": [2, 4, 5], "awk": 2, "sed": 2, "script": 2, "pull": [2, 4], "mden": [2, 4], "didn": 2, "directli": 2, "process_mdout": 2, "perl": 2, "design": [2, 5], "process": [2, 5, 7], "piec": 2, "them": [2, 5], "default": [2, 4, 5, 7], "filenam": 2, "best": [2, 4], "sub": 2, "directori": 2, "move": [2, 3, 4], "befor": [2, 3, 4, 7], "g": [2, 5], "mkdir": 2, "vac_12acut": 2, "cd": 2, "perlv": 2, "nocut": 2, "even": [2, 5], "did": [2, 4, 7], "complet": [2, 5], "100": [2, 5], "000": [2, 5, 7], "sure": [2, 4, 7], "back": 2, "vac_nocut": 2, "perm": 2, "take": [2, 4, 5, 7], "lead": [2, 4, 5], "prefix": 2, "summari": [2, 4], "eptot": 2, "just": [2, 4, 5], "column": [2, 4], "valu": [2, 4, 5], "compon": 2, "favorit": 2, "graph": 2, "xmgrace": 2, "quickli": [2, 4], "simpl": [2, 5], "ideal": 2, "both": [2, 5], "assum": [2, 4], "master": 2, "python": 2, "matplotlib": 2, "sy": 2, "pyplot": 2, "plt": 2, "argv": 2, "readlin": 2, "x": [2, 4, 5], "y": 2, "append": 2, "float": 2, "split": 2, "savefig": 2, "png": 2, "create_plot": 2, "py": 2, "longer": [2, 5], "angstrom": [2, 4, 5, 7], "cutoff": [2, 5, 7], "seem": [2, 4], "fairli": [2, 4], "stabl": [2, 5, 7], "fluctuat": 2, "constant": [2, 3, 4, 5], "mean": [2, 4, 5, 7], "without": [2, 5], "begin": 2, "kcal": 2, "mol": 2, "higher": 2, "larg": [2, 5, 7], "fact": 2, "actual": [2, 4, 5], "posit": [2, 4], "decreas": 2, "rapidli": 2, "over": [2, 5], "10": [2, 5], "p": [2, 4, 5, 7], "suggest": 2, "chang": [2, 4, 5], "occur": 2, "abruptli": 2, "38": [2, 7], "1p": [2, 7], "error": [2, 4], "frac": 2, "coord": 2, "min": 2, "max": 2, "5683830309286483e": 2, "004": 2, "99717755462998503": 2, "extend": 2, "beyond": 2, "extent": [2, 5], "virtual": 2, "restart": [2, 5], "recalcul": 2, "30": 2, "extra": 2, "side": [2, 4], "configur": 2, "bomb": 2, "subroutin": 2, "routin": 2, "map_coord": 2, "ew_forc": 2, "bound": 2, "resolv": 2, "why": 2, "two": [2, 4, 5, 7], "track": [2, 5], "electrostat": [2, 7], "nstep": [2, 4], "temp": 2, "k": [2, 5], "299": 2, "61": 2, "press": 2, "etot": 2, "2751": 2, "3345": 2, "ektot": 2, "676": 2, "9496": 2, "3428": 2, "2840": 2, "37": 2, "0482": 2, "107": 2, "7566": 2, "dihe": 2, "637": 2, "7764": 2, "4": [2, 5], "nb": 2, "188": 2, "3005": 2, "eel": 2, "3188": 2, "2567": 2, "vdwaal": 2, "420": 2, "6286": 2, "eelec": 2, "790": 2, "2805": 2, "ehbond": 2, "0000": 2, "No": 2, "1701": 2, "3466": 2, "1024": 2, "3971": 2, "424": 2, "1288": 2, "3665": 2, "9008": 2, "notic": [2, 4, 7], "larger": [2, 4, 5], "learn": [2, 5], "let": [2, 7], "anoth": 2, "case": [2, 4, 5, 7], "hopefulli": 2, "understand": 2, "analyz": [2, 3], "cpptraj": [2, 4], "precis": 2, "exampl": [2, 4, 5], "mass": 2, "weight": 2, "fit": 2, "success": 2, "describ": [2, 4, 7], "relev": 2, "nc": [2, 4, 5, 7], "rm": [2, 4], "And": 2, "show": [2, 3, 4, 5], "steadili": 2, "increas": [2, 4, 5, 7], "20": [2, 5], "alreadi": [2, 4, 7], "gone": 2, "wrong": [2, 4], "essenti": [2, 5], "blown": 2, "But": 2, "whole": 2, "stori": 2, "Or": 2, "mask": 2, "theori": [2, 4], "accur": 2, "blow": 2, "think": [2, 7], "carefulli": [2, 4, 7], "dna": [2, 3, 4, 5, 7], "consist": [2, 3], "held": 2, "togeth": [2, 7], "net": 2, "9": 2, "electron": 2, "repuls": [2, 7], "1356": 2, "1545": 2, "repel": 2, "other": [2, 4], "interact": [2, 5], "due": 2, "must": [2, 4], "counteract": 2, "where": [2, 4, 7], "distanc": [2, 5], "averag": 2, "phosphat": 2, "group": [2, 4], "15": 2, "opposit": 2, "emploi": 2, "attract": 2, "closer": [2, 7], "order": [2, 4, 5], "main": [2, 7], "exclud": 2, "includ": [2, 4, 5, 7], "lesson": [2, 7], "better": [2, 5], "previous": 3, "shall": [3, 5], "stage": [3, 4, 7], "relax": 3, "prior": [3, 4], "temperatur": [3, 5], "mdin": [3, 5], "extract": 3, "energi": [3, 4, 5], "mdout": [3, 4], "rmsd": [3, 4], "v": [3, 4], "time": [3, 5, 7], "geometri": 4, "mai": [4, 5], "correspond": 4, "minima": 4, "alwai": 4, "commenc": 4, "failur": 4, "successfulli": 4, "instabl": [4, 7], "given": [4, 5], "conduct": 4, "fix": 4, "remov": [4, 5], "ani": [4, 5], "bad": [4, 5], "contact": [4, 5], "unstabl": [4, 7], "500": 4, "toward": 4, "closest": [4, 7], "local": 4, "ever": 4, "nearest": 4, "cannot": 4, "cross": 4, "transit": 4, "state": [4, 7], "reach": [4, 7], "lower": 4, "fine": 4, "largest": 4, "strain": 4, "basic": 4, "usang": 4, "o": [4, 5], "c": [4, 5], "rst7": [4, 5], "r": [4, 5], "restrt": [4, 5], "ref": 4, "refc": 4, "mdvel": 4, "inf": [4, 5], "mdinfo": [4, 5], "argument": 4, "option": 4, "overwrit": 4, "behavior": [4, 5, 7], "refer": [4, 5], "veloc": 4, "print": 4, "xleap": 4, "need": [4, 5, 7], "myriad": 4, "possibl": 4, "namelist": [4, 5], "manual": 4, "test": 4, "cntrl": [4, 5], "imin": [4, 5], "ncyc": 4, "250": 4, "maxcyc": 4, "absenc": 4, "specif": [4, 5], "chosen": [4, 7], "except": 4, "comma": 4, "depend": [4, 5], "ewald": 4, "At": 4, "minimum": 4, "empti": 4, "forward": 4, "slash": 4, "select": [4, 7], "somewhat": 4, "earlier": 4, "probabl": [4, 5], "dual": [4, 5], "heavi": 4, "Then": [4, 7], "small": 4, "simplist": 4, "skip": 4, "approach": 4, "complex": 4, "solvat": 4, "turn": [4, 5], "don": 4, "awai": 4, "maxima": 4, "support": [4, 7], "algorithm": [4, 5], "commonli": [4, 7], "steepest": 4, "descent": 4, "conjug": 4, "gradient": 4, "converg": 4, "slowli": [4, 5], "close": [4, 7], "flag": [4, 5], "switch": 4, "remain": [4, 5], "equal": 4, "explicitli": [4, 5], "ntb": [4, 5], "dielectr": [4, 5], "igb": [4, 5], "born": 4, "strictli": 4, "choos": [4, 7], "evalu": 4, "reason": [4, 5], "tradeoff": 4, "ga": [4, 5], "phase": [4, 5], "dodecamer_min": 4, "There": 4, "blank": 4, "onc": [4, 5, 7], "dodecamer_vac_min": [4, 5], "produc": 4, "dure": 4, "drop": 4, "consider": [4, 7], "gmax": 4, "0617e": 4, "03": 4, "3149e": 4, "01": 4, "1565e": 4, "02": 4, "c2": 4, "342": 4, "4283e": 4, "7555e": 4, "5": 4, "9556e": 4, "00": 4, "c6": 4, "266": 4, "spite": 4, "mention": 4, "find": [4, 7], "compar": [4, 5], "root": 4, "squar": 4, "deviat": 4, "overlai": 4, "red": 4, "blue": 4, "user": 4, "inspect": 4, "thought": 4, "thei": [4, 5], "histidin": 4, "correct": [4, 7], "proton": 4, "properli": 4, "stereochemistri": 4, "noth": [4, 5], "wors": 4, "nanosecond": 4, "h1": 4, "strang": 4, "anom": 4, "led": 5, "creation": 5, "flavor": 5, "unless": 5, "inher": 5, "liquid": 5, "normal": 5, "either": [5, 7], "implicitli": [5, 7], "cover": 5, "stick": 5, "quick": 5, "tractabl": 5, "although": 5, "answer": [5, 7], "research": 5, "question": 5, "still": 5, "rather": 5, "costli": 5, "machin": 5, "involv": 5, "artifact": [5, 7], "yourself": 5, "try": [5, 7], "sai": 5, "80": 5, "rang": 5, "disabl": 5, "ntpr": 5, "ntwx": 5, "too": 5, "frequent": 5, "consum": 5, "excess": 5, "disk": 5, "impact": 5, "interest": 5, "scale": 5, "ensur": 5, "suitabl": 5, "sampl": 5, "multipl": [5, 7], "nano": 5, "1000": 5, "2000": 5, "simpli": [5, 7], "999": 5, "regul": 5, "langevin": 5, "thermostat": 5, "ntt": 5, "maintain": 5, "300": 5, "collis": 5, "frequenc": 5, "gamma_ln": 5, "equilibr": 5, "berendsen": 5, "coupl": 5, "scheme": 5, "older": 5, "biggest": 5, "desir": 5, "part": 5, "phenomenon": 5, "hot": 5, "cold": 5, "avoid": 5, "elabor": 5, "techniqu": 5, "heat": 5, "cours": 5, "room": 5, "care": 5, "alter": 5, "fast": 5, "correl": 5, "pure": 5, "newtonian": 5, "nvt": 5, "nve": 5, "henc": 5, "benefici": 5, "npt": 5, "product": 5, "weak": 5, "exact": 5, "aim": 5, "consult": 5, "literatur": 5, "discuss": 5, "simplic": 5, "tempi": 5, "temp0": 5, "nstlim": 5, "100000": 5, "dt": 5, "001": 5, "length": 5, "1f": 5, "mer": 5, "caution": 5, "random": 5, "seed": 5, "ig": 5, "reproduc": 5, "especi": 5, "anderson": 5, "bugfix": 5, "26": 5, "11": 5, "automat": [5, 7], "detail": 5, "pitfal": 5, "public": 5, "cerutti": 5, "d": 5, "duke": 5, "b": 5, "et": 5, "al": 5, "vulner": 5, "popular": 5, "packag": 5, "concern": 5, "andersen": 5, "jctc": 5, "2008": 5, "1669": 5, "1680": 5, "job": 5, "processor": 5, "simultan": 5, "otherwis": 5, "sequenti": 5, "background": 5, "indic": 5, "ncrst": 5, "dodecamer_vac_12acut": 5, "dodecamer_vac_nocut": 5, "cup": 5, "coffe": 5, "estim": 5, "instal": 7, "link": 7, "window": 7, "pop": 7, "browser": 7, "singl": 7, "brows": 7, "under": 7, "head": 7, "determin": 7, "amber7": 7, "hit": 7, "dodecamer_md1_12acut": 7, "netcdf": 7, "mmtk": 7, "again": 7, "frame": 7, "playback": 7, "tool": 7, "panel": 7, "plai": 7, "video": 7, "displai": 7, "drag": 7, "zoom": 7, "scroll": 7, "mous": 7, "wheel": 7, "watch": 7, "hold": 7, "secondari": 7, "movement": 7, "extrem": 7, "overal": 7, "preserv": 7, "necessarili": 7, "strand": 7, "realli": 7, "shield": 7, "help": 7, "know": 7, "delet": 7, "same": 7, "until": 7, "point": 7, "crash": 7, "380": 7, "dimer": 7, "clear": 7, "snapshot": 7, "had": 7, "repres": 7, "laboratori": 7, "inde": 7, "harsh": 7, "cluster": 7, "realiti": 7, "home": 7, "realist": 7, "bias": 7, "speed": 7, "awar": 7, "sever": 7, "scenario": 7, "firm": 7, "conclus": 7, "improv": 7, "physic": 7, "effect": 7, "ofexplicit": 7, "subject": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"simul": 0, "dna": [0, 1], "differ": 0, "solvat": [0, 1], "model": 0, "overview": 0, "learn": 0, "object": 0, "tabl": 0, "content": 0, "system": 1, "prepar": 1, "obtain": 1, "start": 1, "structur": 1, "isol": 1, "us": 1, "cpptraj": 1, "creat": [1, 4], "prmtop": 1, "inpcrd": 1, "file": [1, 2, 4], "vacuum": 1, "analysi": 2, "extract": 2, "energi": 2, "from": [2, 4], "mdout": 2, "calcul": 2, "rmsd": 2, "v": 2, "time": [2, 4], "run": [3, 4, 5], "minim": [3, 4], "molecular": 3, "dynam": 3, "vacuo": [3, 5], "build": 4, "mdin": 4, "input": 4, "sander": 4, "first": 4, "pdb": 4, "amber": 4, "coordin": 4, "md": 5, "visual": 7, "trajectori": 7, "vmd": 7}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Simulating DNA with Different Solvation Models": [[0, "simulating-dna-with-different-solvation-models"]], "Overview": [[0, "overview"]], "Learning Objectives": [[0, "learning-objectives"]], "Table of Contents": [[0, "table-of-contents"]], "System Preparation": [[1, "system-preparation"]], "Obtaining the Starting Structure": [[1, "obtaining-the-starting-structure"]], "Preparing the Starting Systems": [[1, "preparing-the-starting-systems"]], "Isolating DNA using cpptraj": [[1, "isolating-dna-using-cpptraj"]], "Creating prmtop and inpcrd Files for Vacuum System": [[1, "creating-prmtop-and-inpcrd-files-for-vacuum-system"]], "Creating prmtop and inpcrd files for Solvated System": [[1, "creating-prmtop-and-inpcrd-files-for-solvated-system"]], "Analysis": [[2, "analysis"]], "Extracting the energies from the mdout file": [[2, "extracting-the-energies-from-the-mdout-file"]], "Calculating the RMSd vs. time": [[2, "calculating-the-rmsd-vs-time"]], "Running Minimization and Molecular Dynamics in vacuo": [[3, "running-minimization-and-molecular-dynamics-in-vacuo"]], "Minimization": [[4, "minimization"]], "Building the mdin input file": [[4, "building-the-mdin-input-file"]], "Running sander for the first time": [[4, "running-sander-for-the-first-time"]], "Creating PDB files from the AMBER coordinate files": [[4, "creating-pdb-files-from-the-amber-coordinate-files"]], "Running MD in-vacuo": [[5, "running-md-in-vacuo"]], "Visualizing the trajectories with VMD": [[7, "visualizing-the-trajectories-with-vmd"]]}, "indexentries": {}})