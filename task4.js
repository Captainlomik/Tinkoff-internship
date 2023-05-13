const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = []

rl.on('line', line => {
    arr.push(line)
    if (arr.length === 2) {
        console.log(boringStr(+arr[0], arr[1]))
        rl.close();
    }
})

function boringStr(count, str) {
    let arr = str.split(' ')
    let map = new Map()
    let maxSize = 0

    for (let i in arr) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
            continue; 
        }
        map.set(arr[i], 1)
    }

    let init = map.get(arr[0])
    let del = 0

    for (let i of map.values()) {
        if (init === i) {
            maxSize += i
        }
        else if ((i - 1 === init || i - 1 === 0) && del === 0) {
            del++
            maxSize += i
        }
        else if (del === 1) {
            break
        }
    }

    return maxSize
}