export interface RandomRegistry {
  number: RandomNumber;
}

class RandomNumber {
  int(min: number = 0, max: number = 10000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Factory function needed to get typing working
export function createRandom(): RandomRegistry {
  return {
    /**
     * Module that makes available number related random functions
     */
    number: new RandomNumber(),
  } as RandomRegistry;
}

export const $random = createRandom();
