const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = []

rl.on('line', line => {
    arr.push(line)
    if (arr.length === 2) {
        console.log(goodLength(+arr[0], arr[1]))
        rl.close();
    }

})


function goodLength(count, str) {
    let a, b, c, d = -1;
    let min_distance = count + 1;
    let max_pos
    let min_pos
    let distance

    let arr = str.split('')

    for (let i in arr) {
        if (arr[i] === 'a') a = i
        if (arr[i] === 'b') b = i
        if (arr[i] === 'c') c = i
        if (arr[i] === 'd') d = i

        if (a !== -1 && b !== -1 && c !== -1 && d !== -1) {
            max_pos = Math.max(a, b, c, d)
            min_pos = Math.min(a, b, c, d)
            distance = max_pos - min_pos + 1

            if (distance < min_distance) {
                min_distance = distance
            }
        }
    }
    return min_distance === count + 1 ? -1 : min_distance
}

// console.log(goodLength('aabbccddbadd'))
// console.log(goodLength('dbbccca'))
// console.log(goodLength('aaaabbbbccccdddd'))
// console.log(goodLength('abcabac'))