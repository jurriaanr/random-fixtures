import { describe, it, expect } from 'vitest';
import { $random } from '@random-fixtures/core'
import '@random-fixtures/ancient'

describe('ancient', () => {
    const ancient = $random.ancient;

    it('makes the ancient module available', () => {
        expect($random.ancient).toBeTruthy()
    });

    it('returns one of the gods', () => {
        expect($random.ancient.god).toBeOneOf((ancient as any).gods);
    });

    it('returns one of the titans', () => {
        expect($random.ancient.titan).toBeOneOf((ancient as any).titans);
    });

    it('returns one of the primordials', () => {
        expect($random.ancient.primordial).toBeOneOf((ancient as any).primordials);
    });

    it('returns one of the heroes', () => {
        expect($random.ancient.hero).toBeOneOf((ancient as any).heroes);
    });
});
