Running Minimization and Molecular Dynamics in implicit solvent
===============================================================

In the previous section, we saw the problems associated with running Molecular Dynamics in vacuo, namely that for biomolecular systems, which exist in a solvated environment, it does not accurately represent the system. 
One solution to this is to use explicit solvent, which is the subject of the last section in this tutorial. 
Using explicit solvent, however, can be computationally expensive.
In some cases, solvent effects within the force field equations. 
This approach is termed implicit solvent. 
An excellent implicit solvent method currently implemented in Sander is the Born solvation model 

Reference:
[V. Tsui & D.A. Case, Biopolymers (Nucl. Acid. Sci.) 56, 275-291 (2001)](https://pubmed.ncbi.nlm.nih.gov/11754341/).

Recent Review:
[A. Onufriev & D.A. Case, Annu Rev Biophys. 48, 275-296 (2019)](https://pubmed.ncbi.nlm.nih.gov/30857399/)

For more information on implicit solvent, see Section 4 of the [Amber Manual](https://ambermd.org/Manuals.php) (page 69 in the [Amber 2023 manual](http://ambermd.org/doc12/Amber23.pdf)).

Use of the Born solvation model is controlled by the `IGB` flag. 
The default value for this flag is 0 which corresponds to no generalized Born term being used. 
For further details see the AMBER manual.

In this example, we shall re-run our *in vacuo* simulations using `IGB=1` Born solvation model.

**CAUTION** This is not necessarily the recommended solvent model for nucleic acids. 
If you are performing a simulation for nucleic acids, you should check the most recent Amber manual for recommended forcefields and solvent models.
The simulations in this tutorial are illustrative and meant to demonstrate the effect of solvent model.

.. toctree::
   :maxdepth: 2

   minimization
   simulation
   analysis