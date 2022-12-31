console.log(`ДЗ 14. Функція із замиканням`);

let s = 0;

function sum(x) {
    s += x;
    return s;
}

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

