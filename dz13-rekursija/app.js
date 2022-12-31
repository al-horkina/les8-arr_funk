console.log(`Реалізувати рекурсивну функцію, яка зводить число в ступінь.`);

function pow(x, n) {
    return (n === 1) ? x : (x * pow(x, n - 1));
}

console.log(pow(3, 5));

