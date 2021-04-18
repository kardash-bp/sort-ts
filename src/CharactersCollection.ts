export class CharactersCollection {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length
  }
  compare(left: number, right: number): boolean {
    return (
      this.data[left].toLocaleLowerCase() > this.data[right].toLocaleLowerCase()
    )
  }

  swap(left: number, right: number): void {
    const strArr = this.data.split('')
    const temp = strArr[left]
    strArr[left] = strArr[right]
    strArr[right] = temp
    this.data = strArr.join('')
  }
}
