export interface RandomRegistry {
    number: RandomNumber;
}

class RandomNumber {
    int(min = 0, max: 10000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export const $random: RandomRegistry = {
    number: new RandomNumber(),
} as RandomRegistry;
