class Number {
    number(min = 0, max: 10000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export const $random: Record<string, any> = {
    number: new Number(),
};
