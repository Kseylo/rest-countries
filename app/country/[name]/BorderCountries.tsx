import { getBorderCountry } from '@/app/api'

interface BorderCountriesProps {
    borders: string[]
}
export async function BorderCountries(props: BorderCountriesProps) {
    const { borders } = props
    // const countryDataList = await getBorderCountry(borders[0])
    return (
        <section>
            <h2
                className={
                    'text-xl font-semibold text-dark-blue-text dark:text-white'
                }
            >
                Border Countries:
            </h2>
        </section>
    )
}
