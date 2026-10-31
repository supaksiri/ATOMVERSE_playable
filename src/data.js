// Values in atomic mass units (u); rounded educational data from NIST Atomic Weights and Isotopic Compositions.
export const isotopes={
'H-1':{symbol:'H',name:'ไฮโดรเจน-1',p:1,n:0,mass:1.00782503223},'H-2':{symbol:'H',name:'ไฮโดรเจน-2',p:1,n:1,mass:2.01410177812},
'C-12':{symbol:'C',name:'คาร์บอน-12',p:6,n:6,mass:12},'C-13':{symbol:'C',name:'คาร์บอน-13',p:6,n:7,mass:13.00335483507},
'N-14':{symbol:'N',name:'ไนโตรเจน-14',p:7,n:7,mass:14.00307400443},'O-16':{symbol:'O',name:'ออกซิเจน-16',p:8,n:8,mass:15.99491461957},
'Cl-35':{symbol:'Cl',name:'คลอรีน-35',p:17,n:18,mass:34.968852682},'Cl-37':{symbol:'Cl',name:'คลอรีน-37',p:17,n:20,mass:36.965902602}
};
export const atomicWeights={H:1.008,C:12.011,N:14.007,O:15.999,Cl:35.45};
export const molecules={
'H₂':{formula:'H₂',atoms:{H:2},positions:[[-.65,0,0],[.65,0,0]],types:['H','H'],bonds:[[0,1]]},
'O₂':{formula:'O₂',atoms:{O:2},positions:[[-.62,0,0],[.62,0,0]],types:['O','O'],bonds:[[0,1]]},
'H₂O':{formula:'H₂O',atoms:{H:2,O:1},positions:[[0,0,0],[-.83,-.64,0],[.83,-.64,0]],types:['O','H','H'],bonds:[[0,1],[0,2]]},
'CO₂':{formula:'CO₂',atoms:{C:1,O:2},positions:[[-1.3,0,0],[0,0,0],[1.3,0,0]],types:['O','C','O'],bonds:[[0,1],[1,2]]},
'NH₃':{formula:'NH₃',atoms:{N:1,H:3},positions:[[0,.25,0],[-.95,-.65,.35],[.95,-.65,.35],[0,-.65,-.85]],types:['N','H','H','H'],bonds:[[0,1],[0,2],[0,3]]},
'CH₄':{formula:'CH₄',atoms:{C:1,H:4},positions:[[0,0,0],[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],types:['C','H','H','H','H'],bonds:[[0,1],[0,2],[0,3],[0,4]]},
'H₂O₂':{formula:'H₂O₂',atoms:{H:2,O:2},positions:[[-.65,0,0],[.65,0,0],[-1.35,-.7,.45],[1.35,.7,-.45]],types:['O','O','H','H'],bonds:[[0,1],[0,2],[1,3]]}
};
export const isotopeKey=(p,n)=>Object.keys(isotopes).find(k=>isotopes[k].p===p&&isotopes[k].n===n);
export const massOf=(formula)=>Object.entries(molecules[formula].atoms).reduce((s,[el,count])=>s+atomicWeights[el]*count,0);
export const weightedMass=(a,b,pct)=>a*pct/100+b*(100-pct)/100;
export const uToGrams=(u)=>u*1.66053906660e-24;
