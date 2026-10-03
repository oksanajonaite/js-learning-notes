"use strict";

/* 10. Krepšinio komandų vidurkiai
Jonas ir Mikas žaidžia krepšinį skirtingose komandose. 
Per paskutinius tris žaidimus Jono komanda surinko 89, 120 ir 103 taškus. Tuo tarpu Miko 116, 94 ir 123 taškus.
 Apskaičiuokite kiekvienos komandos vidutinį taškų skaičių
 Nustatykite, kuri komanda laimi pagal vidurkį
 Išveskite laimėtoją ir jo vidurkį
 Atsižvelkite į galimą lygiąsias
 Pridėk Mary iš dar kitos komandos: 97, 134, 105
 Palygink visas tris komandas ir irgi išveskite laimėtoją ir jo vidurkį į konsolę.*/

let jonasAvg = (89 + 120 + 103) / 3;
let mikasAvg = (116 + 94 + 123) / 3;

if (jonasAvg > mikasAvg) {
    console.log(`Jonas team wins with an average of ${jonasAvg.toFixed(2)}`);
} else if (jonasAvg < mikasAvg) {
    console.log(`Mikas team wins with an average of ${mikasAvg.toFixed(2)}`);
} else {
    console.log("It is draw");
}

let maryAvg = (97 + 134 + 105) / 3;
let best = Math.max(jonasAvg, mikasAvg, maryAvg);

if (best == jonasAvg) {
    console.log(`Jonas team wins with an average of ${jonasAvg.toFixed(2)}`);
} else if (best == mikasAvg) {
    console.log(`Mikas team wins with an average of ${mikasAvg.toFixed(2)}`);
} else {
    console.log(`Mary team wins with an average of ${maryAvg.toFixed(2)}`);
}