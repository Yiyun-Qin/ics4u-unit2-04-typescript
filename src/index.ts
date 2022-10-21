/**
 * This the the program for using stacks
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const newStack = new MrCoxallStack()

const passedNumber1String = prompt('Enter the first integer: ')
const passedNumber2String = prompt('Enter the second integer: ')
const passedNumber3String = prompt('Enter the third integer: ')

const passedNumber1 = parseInt(passedNumber1String)
const passedNumber2 = parseInt(passedNumber2String)
const passedNumber3 = parseInt(passedNumber3String)
if (isNaN(passedNumber1) || isNaN(passedNumber2) || isNaN(passedNumber3)) {
  console.log('Invalid Number!')
} else {
  newStack.pushItem(passedNumber1)
  newStack.pushItem(passedNumber2)
  newStack.pushItem(passedNumber3)
  console.log(`\nThe list now is ${newStack.getList()}`)
  console.log('Pop out the number on the top')
  const popNumber = newStack.popItem()
  if (popNumber !== undefined) {
    console.log(`The popped number is ${popNumber}`)
  }
  const peekNumber = newStack.peekItem()
  if (peekNumber !== undefined) {
    console.log(`\nNow the number on the top is ${peekNumber}`)
  }
  console.log(`The list is ${newStack.getList()}`)
  console.log('\nNow clear the list')
  newStack.clearItem()
  newStack.showItem()
}
console.log('\nDone.')
