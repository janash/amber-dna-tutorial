Simulating DNA with Different Solvation Models
===============================================

Overview
--------
The purpose of this tutorial is to provide an introduction to setting up and running simulations using the AMBER software.
 
It is based on AMBER 23 and AmberTools 23 but should be used with the most recent version of Amber available. 
In this tutorial we run a series of simulations on the Dickerson dodecamer, a well known DNA structure. 
We will first figure out how to generate a starting structure and then use this structure to construct the necessary input files for running sander, 
the molecular dynamics engine supplied with AmberTools.

In this tutorial, you will simulate a short DNA duplex 
in different solvent conditions. Because DNA is a highly
charged molecule, the solvation environment is very important.

You will perform four simulations of the DNA structure in different 
solvent conditions.:

1. DNA in vacuum with a short simulation cut-off.
2. DNA in vacuum with no simulation cut-off.
3. DNA in implicit solvent.
4. DNA in explicit solvent with ions.

Learning Objectives
-------------------

* Learning Objective 1
* Learning Objective 2



Table of Contents
------------------
.. toctree::
   :maxdepth: 2

   system_build
   vacuum/index
