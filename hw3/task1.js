'use strict';

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - это нечетное число`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    }
}