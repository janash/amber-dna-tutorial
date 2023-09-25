# Minimization 

The first stage is to minimize our initial system.  
We use the same prmtop and rst7 files as previously (`dodecamer_vac.prmtop`, `dodecamer_vac.inpcrd`). 
This time around though we will modify our input file to turn on the generalized Born method (`IGB=1`). 
Here is what the input file looks like (`dodecamer_gb_init_min.mdin`):

````{tab-set-code}
```{code-block} dodecamer_gb_init_min.mdin
dodecamer: initial minimization prior to MD GB model
 &cntrl
  imin   = 1,
  maxcyc = 500,
  ncyc   = 250,
  ntb    = 0,
  igb    = 1,
  cut    = 12
 /
```
````

So, now to run `sander` for minimization

````{tab-set-code}
```{code-block} bash
sander -O -i dodecamer_gb_init_min.mdin -o dodecamer_gb_init_min.out -c dodecamer_vac.inpcrd -p dodecamer_vac.prmtop -r dodecamer_gb_init_min.ncrst
```
````

The first thing you should notice is that this takes considerably longer than the in vacuo minimization. 
On a 1.4 GHz i5 machine it takes about 22.8 seconds (about 10 times longer than the vacuum simulation). 
Herein lies the problem with including solvent in simulations. 
As we will see, it is often an expense that cannot be avoided.

* Input File: {download}`dodecamer_gb_init_min.mdin <sim/dodecamer_gb_init_min.mdin>`
* Output File: {download}`dodecamer_gb_init_min.out <sim/dodecamer_gb_init_min.out>`

Lets take a quick look at the output file produced during the minimization. 
Again you will see that the energy has dropped between the first and last steps:

```   
    NSTEP       ENERGY          RMS            GMAX         NAME    NUMBER
      1      -4.2108E+03     2.2915E+01     1.1518E+02     C2'       342

 BOND    =       94.3964  ANGLE   =      829.1701  DIHED      =      651.6560
 VDWAALS =     -363.1866  EEL     =     -556.2827  EGB        =    -2149.1115
 1-4 VDW =      263.4844  1-4 EEL =    -2980.9661  RESTRAINT  =        0.0000
```

```
    NSTEP       ENERGY          RMS            GMAX         NAME    NUMBER
    500      -5.2499E+03     1.2749E-01     1.2471E+00     H73       240

 BOND    =       38.0676  ANGLE   =      106.3306  DIHED      =      640.3512
 VDWAALS =     -436.6339  EEL     =     -143.8444  EGB        =    -2437.5625
 1-4 VDW =      170.5356  1-4 EEL =    -3187.1040  RESTRAINT  =        0.0000
```

It is worth noting that the change in energy is significantly less than the *in vacuo* minimization. 
The starting energy in the Generalized Born case is significantly lower than in the in vacuo case. 
This suggests that simply solvating our initial structure prior to minimization has significantly stabilized it. 
This stabilization will be even more apparent when we run molecular dynamics on the system.
In the figure below, the initial structure is shown in red, while the minimized structure is shown in blue.

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

