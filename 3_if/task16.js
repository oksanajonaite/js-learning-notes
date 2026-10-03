"use strict";

/* 16. Pažymys raide
Paprašykite vartotojo įvesti pažymį nuo 0 iki 100. Ir grąžinkite raidę:
 < 60 → F
 60–62 → D-
 63–66 → D
 67–69 → D+
 70–72 → C-
 73–76 → C
 77–79 → C+
 80–82 → B-
 83–86 → B
 87–89 → B+
 90+ → A*/

let grade = Number(prompt("Enter grade from 0 to 100"));

if (grade >= 90) {
    console.log("A");
} else if (grade >= 87) {
    console.log("B+");
} else if (grade >= 83) {
    console.log("B");
} else if (grade >= 80) {
    console.log("B-");
} else if (grade >= 77) {
    console.log("C+");
} else if (grade >= 73) {
    console.log("C");
} else if (grade >= 70) {
    console.log("C-");
} else if (grade >= 67) {
    console.log("D+");
} else if (grade >= 63) {
    console.log("D");
} else if (grade >= 60) {
    console.log("D-");
} else {
    console.log("F");
}