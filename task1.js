const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    console.log(main(line))
    rl.close();
})


function main(str) {
    let arr = str.split(' ')
    return peopleHeight(arr) || peopleHeight(arr.reverse()) ? 'YES' : 'NO'
}

function peopleHeight(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false
    }
    return true
}



