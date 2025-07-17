export class RandomArray<T> extends Array<T> {
    static override of<T>(...items: T[]): RandomArray<T> {
        return new RandomArray(...items);
    }

    static override from<T>(arrayLike: ArrayLike<T>): RandomArray<T> {
        return new RandomArray(...Array.from(arrayLike));
    }

    random(): T {
        if (this.length === 0) throw new Error('RandomArray is empty.');
        const index = Math.floor(Math.random() * this.length);
        return this[index];
    }
}
