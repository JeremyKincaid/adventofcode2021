/* eslint-disable prefer-template */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */

import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {

  public findGammaAndEpsilon(arr: string[]): Array<string[]> {

    let oneCounts: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let zeroCounts: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let gamma: string[] = [];
    let epsilon: string[] = [];

    for (let binary of arr) {
      for (let i = 0; i < binary.length; i++) {
        binary[i] == '1' ? oneCounts[i]++ : zeroCounts[i]++;
      }
    }

    for (let c in oneCounts) {
      if (oneCounts[c] > zeroCounts[c]) {
        gamma[c] = '1';
        epsilon[c] = '0';
      } else if (oneCounts[c] == zeroCounts[c]) {
        gamma[c] = '1';
        epsilon[c] = '0';
      } else {
        gamma[c] = '0';
        epsilon[c] = '1';
      }
    }

    let values = [gamma, epsilon];

    return values;
  }

  public solveFirst(): string {
    // WRITE SOLUTION FOR TEST 1
    const arr = this.input.toString().replace(/\r\n/g, '\n').split('\n');

    let values = this.findGammaAndEpsilon(arr);
    let gammaDecimal = parseInt(values[0].join(''), 2);
    let epsilonDecimal = parseInt(values[1].join(''), 2);

    return (gammaDecimal * epsilonDecimal).toString();
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    // WRITE SOLUTION FOR TEST 2
    const arr = this.input.toString().replace(/\r\n/g, '\n').split('\n');

    let gammaBinary = this.findGammaAndEpsilon(arr)[0];
    let epsilonBinary = this.findGammaAndEpsilon(arr)[1];

    let gammaFiltered: string[] = arr;
    let epsilonFiltered: string[] = arr;
    let firstGammaFilter = true;
    let firstEpsilonFilter = true;

    for (let i in gammaBinary) {
      let filteredArr: string[] = [];
      if (gammaFiltered.length != 1) {
        for (let binary of gammaFiltered) {
          if (binary[i] == gammaBinary[i]) {
            filteredArr.push(binary);
          }
        }
        gammaFiltered = filteredArr;
      } else {
        break;
      }
      gammaBinary = this.findGammaAndEpsilon(gammaFiltered)[0];
    }

    for (let i in epsilonBinary) {
      let filteredArr: string[] = [];
      if (epsilonFiltered.length != 1) {
        for (let binary of epsilonFiltered) {
          if (binary[i] == epsilonBinary[i]) {
            filteredArr.push(binary);
          }
        }
        epsilonFiltered = filteredArr;
      } else {
        break;
      }
      epsilonBinary = this.findGammaAndEpsilon(epsilonFiltered)[1];
    }

    let oxygen = parseInt(gammaFiltered.join(''), 2);
    let carbonDioxide = parseInt(epsilonFiltered.join(''), 2);
    return (oxygen * carbonDioxide).toString();
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
