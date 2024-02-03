import { BorderCountry } from './types'
export async function getBordersCountries(
    borders: string[],
): Promise<BorderCountry[]> {
    const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}&fields=name`,
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
