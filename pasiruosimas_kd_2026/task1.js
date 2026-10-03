"use strict";

// 1. Complex transformation with conditions

const transformToConditions = (temperatures) => {
    let result = temperatures.map((temp) => { //map eina per kiekviena temp
        let status;
        if (temp < 15) {
            status = "cold";
        } else if (temp >= 15 && temp < 25) {
            status = "warm";
        } else {
            status = "hot";
        }
        return { temp: temp, status: status }; //sukuria ir grazina objekta su temp ir status
    });
    return result;
};

const temperatures = [18, 25, 30, 10, 28];
console.log(transformToConditions(temperatures));
/*
[
  { temp: 18, status: 'warm' },
  { temp: 25, status: 'hot' },
  { temp: 30, status: 'hot' },
  { temp: 10, status: 'cold' },
  { temp: 28, status: 'hot' }
]
  */