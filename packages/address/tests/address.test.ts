import { describe, it, expect } from 'vitest'
import { $random } from '@random-fixtures/core'
import '@random-fixtures/address'

describe('address', () => {
    const address = $random.address

    it('makes the address module available', () => {
        expect($random.address).toBeTruthy()
    })

    it('returns one of the streets', () => {
        expect($random.address.street).toBeOneOf((address as any).streets)
    })

    it('returns one of the cities', () => {
        expect($random.address.city).toBeOneOf((address as any).cities)
    })

    it('returns one of the countries', () => {
        expect($random.address.country).toBeOneOf((address as any).countries.map((c: { name: string; }) => c.name))
    })

    it('returns one of the 2 letter country codes', () => {
        expect($random.address.alpha2).toBeOneOf((address as any).countries.map((c: { alpha2: string; }) => c.alpha2))
    })

    it('returns one of the 3 letter country codes', () => {
        expect($random.address.alpha3).toBeOneOf((address as any).countries.map((c: { alpha3: string; }) => c.alpha3))
    })

    it('returns an object with a name, alpha2 and alpha3 code', () => {
        const country = $random.address.countryObject;

        expect(country.name).toBeOneOf((address as any).countries.map((c: { name: string; }) => c.name))
        expect(country.alpha2).toBeOneOf((address as any).countries.map((c: { alpha2: string; }) => c.alpha2))
        expect(country.alpha3).toBeOneOf((address as any).countries.map((c: { alpha3: string; }) => c.alpha3))
    })
})
