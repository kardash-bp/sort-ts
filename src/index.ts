import { LinkedList } from './LinkedList'
import { CharactersCollection } from './CharactersCollection'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'
//* sorting numbers
const numArr = new NumbersCollection([10, 99, 4, -3, 0])
const sortNum = new Sorter(numArr)
sortNum.sort()
console.log(numArr.data)
//* sorting string
const strToSort = new CharactersCollection('Red')
const sorted = new Sorter(strToSort)
sorted.sort()
console.log(strToSort.data)
