import fs from 'fs';
import { bubbleSort } from '../BubbleSort/BubbleSort';
import { QuickSort } from '../QuickSort/QuickSort';
import  {HeapSort} from '../HeapSort/HeapSort'

const data1 = fs.readFileSync('entrada1.txt', 'utf8')
const array = data1.split("\n").map(Number)
const heap = new HeapSort ()



//heap.sort(array)
//bubbleSort(array)
//QuickSort(array)

//console.log(array)
  


var string= array.toString();
fs.writeFileSync('test.txt',string,'utf-8');
