import { getBordersCountries } from '@/app/api'
import Link from 'next/link'

interface BorderCountriesProps {
    borders: string[]
}
export async function BorderCountries(props: BorderCountriesProps) {
    const { borders } = props
    const countryDataList = await getBordersCountries(borders)
    return (
        <>
            {countryDataList.length > 0 && (
                <div className={'flex flex-wrap gap-3'}>
                    {countryDataList.map((country) => {
                        const href = `/country/${country.name.common.toLowerCase().split(' ').join('-')}`
                        return (
                            <Link
                                href={href}
                                key={country.name.common}
                                className={
                                    'flex w-28 items-center justify-center text-nowrap rounded-sm bg-white py-2 font-light text-dark-blue-text shadow dark:bg-dark-blue dark:text-white'
                                }
                            >
                                {country.name.common}
                            </Link>
                        )
                    })}
                </div>
            )}
        </>
    )
}
