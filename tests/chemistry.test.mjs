import assert from 'node:assert/strict';import {isotopes,isotopeKey,weightedMass,massOf,uToGrams} from '../src/data.js';
assert.equal(isotopeKey(6,6),'C-12');assert.equal(isotopeKey(6,7),'C-13');assert.equal(isotopes['C-12'].mass,12);assert.ok(isotopes['C-13'].mass>12);
assert.ok(Math.abs(weightedMass(10,11,50)-10.5)<1e-9);assert.equal(weightedMass(10,11,100),10);assert.equal(weightedMass(10,11,0),11);
assert.ok(Math.abs(massOf('H₂O')-18.015)<1e-9);assert.ok(Math.abs(massOf('CO₂')-44.009)<1e-9);assert.ok(massOf('H₂O₂')>massOf('H₂O'));
assert.ok(Math.abs(uToGrams(1)-1.66053906660e-24)<1e-34);assert.ok(Math.abs(weightedMass(isotopes['Cl-35'].mass,isotopes['Cl-37'].mass,75.78)-35.45)<.01);
console.log('PASS: 12 chemistry assertions');
