export interface RandomRegistry {
  number: RandomNumber;
}

class RandomNumber {
  int(min: number = 0, max: number = 10000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export const $random: RandomRegistry = {
  number: new RandomNumber(),
} as RandomRegistry;
