# Running MD with Generalized Born Solvation

In section 3.2 we used sander to run molecular dynamics of our in vacuo DNA 10-mer. We noted that the results were very susceptible to the long range cut off, with no cut off giving us an unraveling of the DNA and subsequent crash of the sander MD program. This instability was attributed to the in vacuo simulation not representing reality correctly. In this section we will re-run the two simulations using the Born implicit solvent models. The two input files we require are:

1. {download}`dodecamer_gb_md1_12Acut.mdin <sim/dodecamer_gb_md1_12Acut.mdin>`
2. {download}`dodecamer_gb_md1_nocut.mdin <sim/dodecamer_gb_md1_nocut.mdin>`

We are using the same settings as before, namely we turn off minimization (`IMIN=0`). 
We disable periodicity (`NTB=0`) but this time set `IGB=1` since we want to use the Born implicit solvent model. 
We will again write information to the output file and trajectory coordinates file every 100 steps (`NTPR=100`, `NTWX=100`). 
Two different values for the cutoff will be used, one run will be with a cutoff of 12 angstroms (`CUT = 12.0`) and one run will be without a cutoff (`CUT = 999`). 
For temperature regulation we will use the Langevin thermostat (NTT=3, GAMMA_LN=1) to maintain the temperature of our system at 300 K.

We shall also set the initial and final temperatures to 300 K (T`EMPI=300.0`, `TEMP0=300.0`) which will mean our system's temperature should remain around 300 K. Again we will run the two examples for a total of 100,000 steps each (`NSTLIM=100000`) with a 1 fs time step (`DT=0.001`) giving simulation lengths of 100 ps (100,000 x 1fs). 
The two input files are shown below:


````{tab-set-code}
```{code-block} dodecamer_gb_md1_12Acut.mdin
dodecamer DNA MD Generalise Born, 12A cut off
 &cntrl
  imin = 0, ntb = 0,
  igb = 1, ntpr = 100, ntwx = 100,
  ntt = 3, gamma_ln = 1.0,
  tempi = 300.0, temp0 = 300.0,
  nstlim = 100000, dt = 0.001,
  cut = 12
 /

```
````

````{tab-set-code}
```{code-block} dodecamer_gb_md1_nocut.mdin
dodecamer DNA MD Generalise Born, no cut off
 &cntrl
  imin = 0, ntb = 0,
  igb = 1, ntpr = 100, ntwx = 100,
  ntt = 3, gamma_ln = 1.0,
  tempi = 300.0, temp0 = 300.0,
  nstlim = 100000, dt = 0.001,
  cut = 999
 /

```
````

As mentioned in the previous section when running production simulations with ntt=2 or 3 you should always change the random seed (`ig`) between restarts. 
You can achieve this automatically by setting `ig=-1` in the ctrl namelist. 
We do not do this here in the tutorial for reproducibility but it is generally recommended that you do this in your calculations.
We now run the two jobs, remembering to set our starting structures to the minimized structure from 4.1 above (`dodecamerT_gb_init_min.ncrst`), using the commands:

````{tab-set-code}
```{code-block} bash
sander -O -i dodecamer_gb_md1_12Acut.mdin -o dodecamer_gb_md1_12Acut.out -c dodecamer_gb_init_min.ncrst -p dodecamer_vac.prmtop -r dodecamer_gb_md1_12Acut.ncrst -x dodecamer_gb_md1_12Acut.nc -inf cut.mdinfo &
sander -O -i dodecamer_gb_md1_nocut.mdin -o dodecamer_gb_md1_nocut.out -c dodecamer_gb_init_min.ncrst -p dodecamer_vac.prmtop -r dodecamer_gb_md1_nocut.ncrst -x dodecamer_gb_md1_nocut.nc -inf nocut.mdinfo &
```
````

Note: These will take considerably longer to run than *in vacuo* MD did. The 12 angstrom cut-off takes about 25 minutes to run on an 3.00 GHz i7 machine.
If you'd like, you can download the trajectories below instead of running them:

1. {download}`12 A cut trajectory <sim/dodecamer_gb_md1_12Acut.nc>` / {download}`12 A cut outfile <sim/dodecamer_gb_md1_12Acut.out>`, 
2. {download}`No cutoff trajectory <sim/dodecamer_gb_md1_nocut.nc>`/ {download}`No cutoff outfile <sim/dodecamer_gb_md1_nocut.out>`, 