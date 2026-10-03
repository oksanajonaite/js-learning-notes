"use strict";

// 7. „penktadienioTvarkytojas“

function penktadienioTvarkytojas(seriousTasks, funTasks) {
  let allTasks = [...seriousTasks, ...funTasks];        //sujungia 2 masyvus
  let onlyFun = allTasks.slice(seriousTasks.length);    //is naujo masyvo nukerpa rimtus taskus
  return onlyFun;                                         //grazina tik smagius
}

let seriousTasks = ["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"];
let funTasks = ["Pyragas", "Pasivaikščiojimas", "Žaidimai"];

console.log(penktadienioTvarkytojas(seriousTasks, funTasks));
//[ 'Pyragas', 'Pasivaikščiojimas', 'Žaidimai' ]