import { CountryDetailed } from './types'
const FIELDS = [
    'name',
    'population',
    'region',
    'capital',
    'flags',
    'tld',
    'currencies',
    'subregion',
    'languages',
    'borders',
]
export async function getCountry(name: string): Promise<CountryDetailed[]> {
    const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=${FIELDS.join(',')}`,
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
