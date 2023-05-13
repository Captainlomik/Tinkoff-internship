const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let arr = line.split(' ')
    console.log(maxTime(arr[0], arr[1], arr[2]))
    rl.close();
})


function maxTime(jun, sen, count) {
    return Math.ceil((jun / sen) * count)
}

// console.log(maxTime(3, 2, 2))
// console.log(maxTime(3, 10, 3))