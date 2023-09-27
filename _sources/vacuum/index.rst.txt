Running Minimization and Molecular Dynamics in vacuo
=====================================================

This section will introduce sander and show how it can be used for minimization and molecular dynamics of our previously created DNA models. 
We will initially run our simulations on the in vacuo model and analyze the results before moving on to running simulations with implicit and explicit solvent. 
For this section of the tutorial we shall be using the in vacuo prmtop and inpcrd files we created previously (`dodecamer_vac.prmtop` and `dodecamer_vac.inpcrd`).

This section of the tutorial will consist of 3 stages:

* Relaxing the system prior to MD
* Molecular dynamics at constant temperature
* Analyzing the results

.. toctree::
   :maxdepth: 2

   minimization
   simulation
   analysis
   visualization_vmd
   visualization_nglview