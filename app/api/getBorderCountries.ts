import { BorderCountry } from './types'
const FIELDS = ['name']
export async function getBorderCountry(name: string): Promise<BorderCountry[]> {
    const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=${FIELDS.join(',')}`,
    )
    console.log('res', res)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
