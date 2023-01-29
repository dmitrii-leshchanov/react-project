export function getRandomNumber(min: number, max: number, isMinInclusive: boolean = true, isMaxInclusive: boolean = false): number {
    if (max < min) {
        [min, max] = [max, min];
    }

    if (min === max && (!isMinInclusive || !isMaxInclusive)) {
        throw new Error("min may not be equal to max");
    }

    let randomNum: number = Math.random() * (max - min + (isMinInclusive ? 0 : 1) + (isMaxInclusive ? 0 : -1)) + min;

    if (!isMinInclusive) {
        randomNum += 1;
    }

    if (!isMaxInclusive) {
        randomNum -= 1;
    }

    return randomNum;
}

export function getRandomMatrix(rows: number, columns: number, min: number, max: number): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < columns; j++) {
        matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
      }
    }
    return matrix;
  }

export function getRandomArrayElement(array: any[]): any {
    const randomIndex: number = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function getRandomDate(minYear: number, maxYear: number): Date {
    const randomYear: number = minYear + Math.floor(Math.random() * (maxYear - minYear));
    const randomMonth: number = Math.floor(Math.random() * 12);
    const randomDay: number = Math.floor(Math.random() * 31) + 1;
    return new Date(randomYear, randomMonth, randomDay);
}