# Minimization

In the previous section we pulled a starting structure from the Protein Data Bank.
Since this "default" geometry may not correspond to the actual minima in the force field we are using, it is always a good idea to minimize the structure before commencing molecular dynamics. 
Failure to successfully minimize the structure may lead to instabilities when we run MD.

So, given the in vacuo prmtop (`dodecamer_vac.prmtop`) and inpcrd (`dodecamer_vac.inpcrd`) files we created, we will now use `sander` to conduct a short minimization run. 
Since we just want to "fix up" the positions of the atoms in order to remove any bad contacts that may lead to unstable molecular dynamics we will run a short (500 steps) minimization. 
This will take us towards the closest local minima. 
Minimization with sander will only ever take you to the nearest minima, it cannot cross transition states to reach lower minima. 
This is fine for our purposes, however, since all we want to do is remove the largest strains in the system.

The basic usange for `sander` is as follows

```
sander [-O] -i mdin -o mdout -p prmtop -c rst7 -r restrt
[-ref refc] [-x nc] [-v mdvel] [-e mden] [-inf mdinfo]
```


Arguments in []'s are optional
If an argument is not specified, the default name will be used.
- -O    overwrite all output files (the default behavior is to quit if any output files already exist)
- -i      the name of the input file (which describes the simulation options), mdin by default.
- -o     the name of the output file, mdout by default.
- -p     the parameter/topology file, prmtop by default.
- -c     the set of initial coordinates for this run, nc by default.
- -r     the final set of coordinates from this MD or minimization run, restrt by default.
- -ref  reference coordinates for positional restraints, if this option is specified in the input file, refc by default.
- -x    the molecular dynamics trajectory file (if running MD), nc by default.
- -v    the molecular dynamics velocities file (if running MD), mdvel by default.
- -e    a summary file of the energies (if running MD), mden by default.
- -inf  a summary file written every time energy information is printed in the output file for the current step of the minimization of MD, useful for checking on the progress of a simulation, mdinfo by default.

## Building the mdin input file

Now that we have the prmtop and rst7 files from xleap, all we need to run `sander` is the mdin file which specifies the myriad of possible options for this run.

The run time input to control sander is via "namelist" variables (for more information see the manual) specified in the mdin file. For example:

````{tab-set-code}

```{code-block} mdin
Test run 1
 &cntrl
     IMIN = 1, NCYC = 250, MAXCYC = 500
/ 
```
````

In the absence of a variable specification in the input file, default values are chosen; every specified variable, except the last one, needs to be followed by a comma. 
The Amber manual describes all of these inputs, for each of the possible namelists. 
The namelist used depends on the specification above, such as &cntrl or &ewald. 
At a minimum the &cntrl namelist must be specified. 
Also notice the space or empty first column before specification of the namelist control variable; this is necessary. 
It is also necessary to end each namelist with a forward slash /. 
Other namelists (such as the `&ewald`` namelist) are optional. 
After the namelist some other information may be specified, such as "GROUP" input, which allows atom selections for restraints. 
Note that the input variable and namelists have changed somewhat from earlier versions of AMBER. Refer to the sander section of the manual for more information.

Next we will build a minimal input file for performing minimization on our DNA. 
In theory, it would probably be best to run a dual stage minimization where we initially use position restraints on all the heavy atoms so that in the first stage of minimization only the hydrogens that tleap added are minimized. 
Then in the second stage, we allow minimization of all atoms in the system. Since our system is fairly small and simplistic, it should be fine to skip the first stage and just minimize everything. 
An example of such a two-stage minimization approach will be given when we run simulations on our more complex solvated model in the next section.

To create our input file: To turn on minimization, we specify `IMIN = 1`. 
We want a fairly short minimization since we don't actually need to reach the minima, but just want to move away from any local maxima, so we select 500 steps of minimization by specifying `MAXCYC = 500`. 
Sander supports a number of different minimization algorithms, the most commonly used being steepest descent and conjugate gradient. 
The steepest descent algorithm is good for quickly removing the largest strains in the system but it also converges slowly when close to a minima. 
Here the conjugate gradient method is more efficient. 
The use of these two algorithms can be controlled using the `NCYC` flag. 
If `NCYC < MAXCYC`, sander will use the steepest descent algorithm for the first NCYC steps before switching to the conjugate gradient algorithm for the remaining (`MAXCYC - NCYC`) steps. 
In this case we will run an equal number of steps with each algorithm so we set `NCYC = 250`. 
Since sander assumes that the system is periodic by default we need to explicitly turn this off (`NTB = 0`). 
In this simulation we will be using a constant dielectric and not an implicit (or explicit) solvent model so we set `IGB = 0` (no generalized born solvation model). 
This is the default so we  don't strictly need to specify this, but I will include it here so that we can see what differences we have in the input file when we switch on implicit solvent later. 
We also need to choose a value for the non-bonded cut off. 
A larger cut off introduces less error in the non-bonded force evaluation but increases the computational complexity and thus calculation time. 12 angstroms would seem like a reasonable tradeoff for gas phase so that is what we will initially use (`CUT = 12`). Here is what the input file looks like:

````{tab-set-code}

```{code-block} dodecamer_min.mdin
DNA dodecamer: initial minimization prior to MD
 &cntrl
  imin   = 1,
  maxcyc = 500,
  ncyc   = 250,
  ntb    = 0,
  igb    = 0,
  cut    = 12
 /

```
````

*Note* - There must be a blank line after the line ending in `/`. 

Once you have the input file, you can use `sander` to run a minimization.

### Running sander for the first time

To run `sander`, execute the following command.

````{tab-set-code}

```{code-block} bash
sander -O -i dodecamer_min.mdin -o dodecamer_vac_min.out -c dodecamer_vac.inpcrd -p dodecamer_vac.prmtop -r dodecamer_vac_min.rst7
```
````
Input file:
- {download}`dodecamer_min.mdin <sim/dodecamer_min.mdin>`.

Output files:
- {download}`dodecamer_vac_min.out <sim/dodecamer_vac_min.out>`.
- {download}`dodecamer_vac_min.rst7 <sim/dodecamer_vac_min.rst7>`

This should run very quickly. 

Take a look at the output file produced during the minimization (dodecamer_vac_min.out). 
You will see that the energy dropped considerably between the first and last steps:

```
   NSTEP       ENERGY          RMS            GMAX         NAME    NUMBER
      1      -2.0617E+03     2.3149E+01     1.1565E+02     C2'       342

   NSTEP       ENERGY          RMS            GMAX         NAME    NUMBER
    500      -3.4283E+03     6.7555E-01     5.9556E+00     C6        266
```

In spite of this, however, the structure did not change very much. 
This is because, as already mentioned, minimization will only find the nearest local minima. 
If you create PDB files for the start (`dodecamer_vac.inpcrd`) and final structures (`dodecamer_vac_min.rst7`) and compare the root-mean-squared deviations (RMSd), you will see that the two structures differ by only about 0.5 angstroms (all atom).
The image below shows an overlay of the starting (red) and minimized structures (blue).

```{moleculeView}
data-href: sim/overlay.pdb
data-backgroundcolor: white
data-style1: stick:color=red
data-select1: resi:["1-24"]
data-style2: stick:color=blue
data-select2: resi:["25-48"]
width: 300px
height: 300px
```

### Creating PDB files from the AMBER coordinate files

You may want to generate a new pdb file so you can look at the structure using the minimized coordinates.
You can use cpptraj for this.

````{tab-set-code}
```{code-block} cpptraj
parm dodecamer_vac.prmtop
trajin dodecamer_vac_min.rst7
trajout dodecamer_vac_min.pdb
```
````

In general, users should carefully inspect any starting structures and minimized structures; 
specifically check to make sure the hydrogens were placed where you thought they should be, histidines are in the correct protonation state, 
the terminal residues are properly terminated, stereochemistry is reasonable, etc. 
There is nothing worse than finding out after you've run a nanosecond of  solvated dynamics that an H1' atom was on the wrong side and that you have simulated some strange anomer of DNA!

