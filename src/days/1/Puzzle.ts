/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const arr = this.input.toString().replace(/\r\n/g, '\n').split('\n');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i != arr.length - 1) {
        if (parseInt(arr[i]) < parseInt(arr[i + 1])) {
          count++;
        }
      }
    }
    return count.toString();
  }
  public solveSecond(): string {
    const arr = this.input.toString().replace(/\r\n/g, '\n').split('\n');
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      let j = i + 1;
      let k = j + 1;
      if (parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k]) < parseInt(arr[j]) + parseInt(arr[k]) + parseInt(arr[k + 1])) {
        count++;
      }
    }
    return count.toString();
  }

  public getFirstExpectedResult(): string {
    return 'day 1 solution 1';
  }
  public getSecondExpectedResult(): string {
    return 'day 1 solution 2';
  }
}
