import { describe, it, expect } from 'vitest';
import { RandomArray } from '../src';

describe('RandomArray', () => {
    it('returns a value from the array', () => {
        const values = RandomArray.of('a', 'b', 'c');
        const result = values.random();
        expect(['a', 'b', 'c']).toContain(result);
    });

    it('throws an error if the array is empty', () => {
        const empty = new RandomArray();
        expect(() => empty.random()).toThrow('RandomArray is empty.');
    });
});
