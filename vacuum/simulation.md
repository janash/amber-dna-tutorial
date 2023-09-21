## Running MD in-vacuo

In the previous section, we used `sander` to minimize our system in order to remove any bad contacts introduced by the hydrogenation step in `tleap`.
This led to the creation of the coordinate file named `dodecamer_vac_min.rst7`. 
For the next section of this tutorial we will use this coordinate file as the starting structure for our in-vacuo MD simulation. 
The following in-vacuo simulation is designed to give a flavor of how MD simulations are run. 
In general, one would not run an in-vacuo simulation unless the system was inherently gas phase. 
For liquid phase systems, such as our DNA, one would normally include solvent either explicitly or implicitly. 
This type of simulation will be covered in following sections. 
For the time being we will stick to gas phase simulations since they are simple and quick to run.

To make the calculations tractable for the purposes of this tutorial, we can only run short simulations of the order of 100 ps. 
Although these are "short" simulations (in terms of what is likely required to answer specific research questions), you will see that they are still rather costly, depending on what type of machine you using. 
However, to get a better idea of the issues involved and potential artifacts of the various models that will be used (for the simulation of DNA) it is probably useful to run through these examples, either by running them yourself or by just looking at the output files and trajectories supplied. 
You may also want to try some different examples from the two given below, such as a distance dependent dielectric constant, or see what happens if you increase the dielectric constant to, say, 80.0.

For this tutorial we will run two in-vacuo simulations and compare the results. 
The simulations we will run will be:

1. {download}`dodecamer_vac_md1_12Acut.mdin <sim/dodecamer_vac_md1_12Acut.mdin>`. 12.0 angstrom long range cutoff, dielectric=1
2.  {download}`dodecamer_vac_md1_nocut.mdin <sim/dodecamer_vac_md1_nocut.mdin>`. no long range cutoff, dielectric = 1

To run a molecular dynamics simulation with sander, we need to turn off minimization (`IMIN=0`). 
Since we are running in-vacuo we also need to disable periodicity (`NTB=0`) and set `IGB=0` since we are not using implicit solvent. 
For these two examples we will write information to the output file and trajectory coordinates file every 100 steps (`NTPR=100`, `NTWX=100`). 
For most simulations, writing to the coordinate file every 100 steps is too frequent because it consumes excess disk space and can impact performance. 
However, this simulation here will show some interesting behavior over a short time scale that I would like you to see and so we will use a value of 100 to ensure that this is suitably sampled. 
(For multiple nano-second simulations of stable systems a more suitable value for NTWX would be in the 1000 to 2000 range.)

The CUT variable specifies the cut off range for the long range non-bonded interactions. Here, two different values for the cutoff will be used, one run with a cut off of 12 angstroms (`CUT = 12.0`) and one run without a cutoff. 
To run without a cutoff we simply set CUT to be larger than the extent of the system (e.g. `CUT = 999`).

For temperature regulation we will use the Langevin thermostat (`NTT=3`) to maintain the temperature of our system at 300 K. 
This temperature control method uses Langevin dynamics with a collision frequency given by `GAMMA_LN` and is significantly more efficient at equilibrating the system temperature than the Berendsen temperature coupling scheme (`NTT=1`) that was recommended for older versions of AMBER. The biggest problem with the Berendsen method is that the algorithm simply ensures that the kinetic energy is appropriate for the desired temperature; it does nothing to ensure that the temperature is even over all parts of the molecule. 
This can lead to the phenomenon of hot solvent, cold solute. 
To avoid this, elaborate temperature scaling techniques for slowly heating the molecule over the course of the simulation were recommended. 
The Langevin system is much more efficient, however, at equilibrating the temperature and is now the recommended choice. 
The efficiency is such that if we have a reasonably good structure, which we do in this case, we can actually start the system at 300 K and avoid the need to slowly heat over, say, 20 ps from 0 K to room temperature. 
Use the Langevin temperature regulation scheme with care, however. 
While it allows efficient equilibration the system's temperature, it will alter the fast dynamics of your system. 
As such, if you are interested in things such as correlation functions, it is often better to equilibrate your system using `NTT=3` and then once equilibrated, pure Newtonian dynamics (`NTT=0`). 
It should also be noted that the performance of `NTT=3` is less than a NVT simulation using `NTT=1` or a NVE simulation. Hence it can often be beneficial to heat in NVT with `NTT=3`, equilibrate in NPT with `NTT=3` and then run production as either NVE (`NTT=0`) or as NVT with `NTT=1` and a weak coupling constant of around 10 ps<sup>-1</sup>.
The exact choice, though, will depend on what you aim to learn from your simulation and so you should consult literature for previous examples and discussions.

For simplicity we will run this entire simulation with `NTT=3` and `GAMMA_LN=1`. 
We shall also set the initial and final temperatures to 300 K (`TEMPI=300.0`, `TEMP0=300.0`) which will mean our system's temperature should remain around 300 K. 
In these two examples we will run a total of 100,000 steps each (NSTLIM=100000) with a 1 fs time step (DT=0.001) giving simulation lengths of 100 ps (100,000 x 1fs). 
The two input files are shown below:

````{tab-set-code}
```{code-block} dodecamer_vac_md1_12Acut.mdin
Dodecamer DNA MD in-vacuo, 12 angstrom cut off
 &cntrl
  imin = 0, ntb = 0,
  igb = 0, ntpr = 100, ntwx = 100,
  ntt = 3, gamma_ln = 1.0,
  tempi = 300.0, temp0 = 300.0,
  nstlim = 100000, dt = 0.001,
  cut = 12.0
 /


```
````

````{tab-set-code}
```{code-block} dodecamer_vac_md1_nocut.mdin
10-mer DNA MD in-vacuo, no cut off
 &cntrl
  imin = 0, ntb = 0,
  igb = 0, ntpr = 100, ntwx = 100,
  ntt = 3, gamma_ln = 1.0,
  tempi = 300.0, temp0 = 300.0,
  nstlim = 100000, dt = 0.001,
  cut = 999
 /


```
````

Caution: In the examples in this tutorial we do not change the value of the random seed used for the random number generator.
This is controlled by the namelist variable ig. This is largely for issues of reproducibility of the results within a tutorial setting. 
However, when running production simulations, especially when using NTT=2 or 3 (Anderson or Langevin thermostats) it is essential that you change the random number seed from the default on EVERY MD restart. 
If you are using AMBER 10 (bugfix.26 or later) or AMBER 11 or later, you can do this automatically by setting `ig=-1` in the cntrl namelist.  For more details on the pitfalls of not doing this you should refer to the following publication:

[Cerutti DS, Duke, B., et al., "A Vulnerability in Popular Molecular Dynamics Packages Concerning Langevin and Andersen Dynamics", JCTC, 2008, 4, 1669-1680](http://dx.doi.org/10.1021/ct8002173)

So, to run the two jobs we issue the following two commands. 
Note, if you have a dual (or more) processor machine then you can run both jobs simultaneously, otherwise you should run them sequentially (note we use the restrt file from the minimization as our starting structure).
The commands below start each process in the background, as indicated by `&` at the end of the command.

````{tab-set-code}
```{code-block} bash
sander -O -i dodecamer_vac_md1_12Acut.mdin -o dodecamer_vac_md1_12Acut.out -c dodecamer_vac_min.rst7 -p dodecamer_vac.prmtop -r dodecamer_vac_md1_12Acut.ncrst -x dodecamer_vac_md1_12Acut.nc -inf dodecamer_vac_12Acut.mdinfo &
```
````

````{tab-set-code}
```{code-block} bash
sander -O -i dodecamer_vac_md1_nocut.mdin -o dodecamer_vac_md1_nocut.out -c dodecamer_vac_min.rst7 -p dodecamer_vac.prmtop -r dodecamer_vac_md1_nocut.ncrst -x dodecamer_vac_md1_nocut.nc -inf dodecamer_vac_nocut.mdinfo &
```
````

These will take longer to run than the minimization, so it is probably a good time to go off and get a cup of coffee.
For both of these simulations, you can track progress by checking the appropriate `mdinfo` file, indicated with the `inf` flag.
You can check progress on the each simulations, including an estimated time to completion by checking these files.