import fs from 'fs';
import { BubbleSort } from '../BubbleSort/BubbleSort';
import { Quicksort } from '../QuickSort/QuickSort';
import  {HeapSort} from '../HeapSort/HeapSort'
import { InsertionSort } from '../InsertionSort/InsertionSort';
import { SelectionSort } from '../SelectionSort/SelectionSort';
import { mergeSort } from '../MergeSort/MergeSort';

const data1 = fs.readFileSync('entrada3.txt', 'utf8')
const array = data1.split("\n").map(Number)

const heap = new HeapSort ()
const bubble = new BubbleSort 
const insertion = new InsertionSort
const selection = new SelectionSort
const merge =  mergeSort
const quick = new Quicksort

const inicio = new Date().getTime()

//heap.sort(array)
//bubble.sortFaster(array)
quick.sort(array)
//insertion.sort(array)
//merge(array)
//selection.sort(array)

const total = new Date().getTime() - inicio
console.log('Foi executado em: ', total)

console.log(array)

//var string= array.toString();
//fs.writeFileSync('test.txt',string,'utf-8');
