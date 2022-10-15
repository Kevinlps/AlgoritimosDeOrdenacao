import fs from 'fs';
import { BubbleSort } from '../BubbleSort/BubbleSort';
import { quickSort } from '../QuickSort/QuickSort';
import { HeapSort } from '../HeapSort/HeapSort'
import { InsertionSort } from '../InsertionSort/InsertionSort';
import { SelectionSort } from '../SelectionSort/SelectionSort';
import { mergeSort } from '../MergeSort/MergeSort';

const data1 = fs.readFileSync('./Entradas/entrada1.txt', 'utf8')
const entrada1 = data1.split("\n").map(Number)

const data2 = fs.readFileSync('./Entradas/entrada2.txt', 'utf8')
const entrada2 = data2.split("\n").map(Number)

const data3 = fs.readFileSync('./Entradas/entrada3.txt', 'utf8')
const entrada3 = data3.split("\n").map(Number)

const data4 = fs.readFileSync('./Entradas/entrada4.txt', 'utf8')
const entrada4 = data4.split("\n").map(Number)


const heap = new HeapSort()
const bubble = new BubbleSort
const insertion = new InsertionSort
const selection = new SelectionSort
const merge = mergeSort
const quick = quickSort

//Para trocar o arquivo a ser executado troque a entrada que a constante array recebe

const array = entrada4
const inicio = new Date().getTime()
fs.writeFileSync('saida.txt', '', 'utf-8');

//Execute uma função de cada vez
//Para executar uma função tire o "//"

//heap.sort(array)
//bubble.sort(array)
//quick(array)
//insertion.sort(array)
//merge(array)
selection.sort(array)


var string = array.toString();
fs.writeFileSync('saida.txt', string, 'utf-8');


const total = new Date().getTime() - inicio
console.log('Foi executado em: ', total)

