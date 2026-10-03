"use strict";

// 10. Sort by criteria

const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 }
];

function sortByDepartment(list) {
  const copy = [...list]; //butinai kopijuojame, nes sort keicia masyvo originala

 copy.sort((a, b) => a.department.localeCompare(b.department)); //localeCompare yra teksto palygintojas abeceles tvarka

  return copy;
}

function sortBySalaryDescending(list) {
  const copy = [...list];

 copy.sort((a, b) => b.salary - a.salary);

  return copy;
}

console.log(sortByDepartment(employees));
/*
[
  { name: 'Ona', department: 'HR', salary: 1800 },
  { name: 'Greta', department: 'HR', salary: 2100 },
  { name: 'Jonas', department: 'IT', salary: 2000 },
  { name: 'Petras', department: 'IT', salary: 2200 }
]
  */

console.log(sortBySalaryDescending(employees));
/*
[
  { name: 'Petras', department: 'IT', salary: 2200 },
  { name: 'Greta', department: 'HR', salary: 2100 },
  { name: 'Jonas', department: 'IT', salary: 2000 },
  { name: 'Ona', department: 'HR', salary: 1800 }
]
  */
