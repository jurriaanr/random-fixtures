import { describe, it, expect } from 'vitest';
import { $random } from '@random-fixtures/core'
import '@random-fixtures/chuck-norris'

describe('chuck-norris', () => {
    const chuckNorris = $random.chuckNorris;

    it('makes the chuck-norris module available', () => {
        expect($random.chuckNorris).toBeTruthy()
    });

    it('returns one of the chuck norris facts', () => {
        expect($random.chuckNorris.fact).toBeOneOf((chuckNorris as any).facts);
    });
});
