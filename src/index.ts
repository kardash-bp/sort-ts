import { CharactersCollection } from './CharactersCollection'
import { NumbersCollection } from './NumbersCollection'
import { Sorter } from './Sorter'
//* sorting numbers
const numArr = new NumbersCollection([10, 99, 4, -3, 0])
numArr.sort()
console.log(numArr.data)
//* sorting string
const strToSort = new CharactersCollection('Red')
strToSort.sort()
console.log(strToSort.data)
