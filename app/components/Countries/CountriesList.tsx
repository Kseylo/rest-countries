import { getCountries } from '@/app/api'
import { CountryCard } from './CountryCard'

interface CountriesListProps {
    query: string
    region: string
}

export async function CountriesList(props: CountriesListProps) {
    const countries = await getCountries()

    const filteredCountries = countries.filter((country) => {
        if (props.region) {
            return country.region === props.region
        }
        return country
    })

    const queriedCountries = filteredCountries.filter((country) => {
        const query = props.query.toLowerCase()
        return (
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query.toLowerCase()) ||
            country.capital.some((capital) =>
                capital.toLowerCase().includes(query),
            )
        )
    })

    if (queriedCountries.length === 0) {
        return (
            <p
                className={
                    'text-center text-xl font-light text-dark-gray dark:text-white'
                }
            >
                No results
            </p>
        )
    }

    return (
        <ul
            className={
                'mx-8 grid grid-cols-1 justify-items-center gap-16 md:mx-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }
        >
            {queriedCountries.map((country) => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </ul>
    )
}
