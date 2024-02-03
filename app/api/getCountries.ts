import { Country } from './types'
const FIELDS = ['name', 'population', 'region', 'capital', 'flags']
export async function getCountries(): Promise<Country[]> {
    const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=${FIELDS.join(',')}`,
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
