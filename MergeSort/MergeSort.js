//const fs = require('fs')
//
//const data1 = fs.readFileSync('entrada1.txt', 'utf8')
//let array = data1.split("\n").map(Number)
//  
//
//function intercala(a, b){
//    var c = []
//
//    while(a.length && b.length)
//        c.push(a[0] < b[0] ? a.shift() : b.shift())
//
//    while(a.length)
//        c.push(a.shift())
//    
//    while(b.length)
//        c.push(b.shift())
//
//    return c;
//}
//
//function mergeSort(a){
//    if(a.length < 2)
//        return a;
//
//    let meio = parseInt(a.length / 2)
//    let esquerda = mergeSort(a.slice(0, meio))
//    let direita = mergeSort(a.slice(meio))
//
//    return intercala(esquerda, direita)
//}
//
//console.log(mergeSort(...array))

//console.log(array)

