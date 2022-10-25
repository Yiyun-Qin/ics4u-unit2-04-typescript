/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class MrCoxallStack {
  stackAsList: number[] = []

  // methods
  getList(): number[] | string {
    if (this.stackAsList.length === 0) {
      return 'nothing'
    } else {
      return this.stackAsList
    }
  }

  pushItem(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  popItem(): any {
    let popNumber: number | undefined
    if (this.stackAsList.length === 0) {
      console.log('Nothing in the list!')
    } else {
      popNumber = this.stackAsList.pop()
      return popNumber
    }
  }

  peekItem(): any {
    let peekNumber: number | undefined
    if (this.stackAsList.length === 0) {
      console.log('Nothing in the list!')
    } else {
      peekNumber = this.stackAsList[this.stackAsList.length - 1]
      return peekNumber
    }
  }

  // clearItem()setter
  clearItem(): void {
    this.stackAsList = []
  }

  showItem(): void {
    if (this.stackAsList.length === 0) {
      console.log('Nothing in the list!')
    } else {
      console.log(this.stackAsList)
    }
  }
}
export = MrCoxallStack
