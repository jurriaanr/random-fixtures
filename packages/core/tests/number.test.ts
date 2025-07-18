import { describe, it, expect } from 'vitest';
import { $random } from '../src';

describe('number', () => {
    it('makes the number module available', () => {
        expect($random.number).toBeTruthy()
    });

    it('returns a number between the min and max inclusive', () => {
        expect($random.number.int(1000,1000)).toBe(1000);
    });

    it('returns a number between the min and max inclusive 100 times', () => {
        const start = 100;
        for(let i = 0; i < 100; i++) {
            const number = $random.number.int(start,start+i);
            expect(number).toBeGreaterThanOrEqual(start);
            expect(number).toBeLessThanOrEqual(start+i);
        }
    });
});
