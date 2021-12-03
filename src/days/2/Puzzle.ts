/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    const arr = this.input.toString().replace(/\r\n/g, '\n').split('\n');
    let directions: string[] = [];
    let distances: number[] = [];
    let x = 0;
    let y = 0;
    for (let move of arr) {
      let preSplit = move.split(' ');
      directions.push(preSplit[0]);
      distances.push(parseInt(preSplit[1]));
    }
    for (let i in directions) {
      if (directions[i] == 'forward') {
        x += distances[i];
      } else if (directions[i] == 'up') {
        y -= distances[i];
      } else if (directions[i] == 'down') {
        y += distances[i];
      }
    }
    let total = x * y;
    return total.toString();
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 2 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    const arr = this.input.toString().replace(/\r\n/g, '\n').split('\n');
    let directions: string[] = [];
    let distances: number[] = [];
    let position = 0;
    let depth = 0;
    let aim = 0;
    for (let move of arr) {
      let preSplit = move.split(' ');
      directions.push(preSplit[0]);
      distances.push(parseInt(preSplit[1]));
    }
    for (let i in directions) {
      if (directions[i] == 'forward') {
        position += distances[i];
        depth += distances[i] * aim;
      } else if (directions[i] == 'up') {
        aim -= distances[i];
      } else if (directions[i] == 'down') {
        aim += distances[i];
      }
    }
    let total = position * depth;
    console.log(directions[0]);
    console.log(distances[0]);
    return total.toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 2 solution 2';
  }
}
