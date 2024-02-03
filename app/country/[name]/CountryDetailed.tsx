import { getCountry } from '@/app/api'
import Image from 'next/image'
import { InfoItem } from '@/app/ui/InfoItem'
import { Suspense } from 'react'
import { BorderCountriesSkeleton } from './BorderCountriesSkeleton'
import { BorderCountries } from './BorderCountries'
import { convertUrlName } from '@/app/utils'

interface CountryDetailedProps {
    name: string
}

export async function CountryDetailed(props: CountryDetailedProps) {
    const commonName = convertUrlName(props.name)
    const countryDataList = await getCountry(commonName)
    const countryData = countryDataList[0]
    return (
        <div className={'flex flex-col gap-12 xl:flex-row'}>
            <div className={'flex-1 space-y-16'}>
                <div className={'relative h-60 w-full max-w-lg md:h-80'}>
                    <Image
                        src={countryData.flags.svg}
                        alt={countryData.flags.alt}
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>

            <div className={'flex flex-1 flex-col gap-8'}>
                <h1
                    className={
                        'text-2xl font-bold text-dark-blue-text dark:text-white'
                    }
                >
                    {countryData.name.common}
                </h1>
                <div
                    className={
                        'flex flex-col gap-12 md:flex-row md:justify-between'
                    }
                >
                    <ul className={'flex flex-col gap-3'}>
                        <InfoItem
                            label={'Native Name'}
                            value={
                                Object.values(countryData.name.nativeName)[0]
                                    .official
                            }
                        />
                        <InfoItem
                            label={'Population'}
                            value={countryData.population}
                        />
                        <InfoItem label={'Region'} value={countryData.region} />
                        <InfoItem
                            label={'Subregion'}
                            value={countryData.subregion}
                        />
                        <InfoItem
                            label={'Capital'}
                            value={countryData.capital.join(', ')}
                        />
                    </ul>
                    <ul className={'flex flex-col gap-3'}>
                        <InfoItem
                            label={'Top Level Domain'}
                            value={countryData.tld.join(', ')}
                        />
                        <InfoItem
                            label={'Currencies'}
                            value={Object.values(countryData.currencies)
                                .map((currency) => currency.name)
                                .join(', ')}
                        />
                        <InfoItem
                            label={'Languages'}
                            value={Object.values(countryData.languages).join(
                                ', ',
                            )}
                        />
                    </ul>
                </div>
                <section className={'flex flex-wrap items-center gap-6'}>
                    <h2
                        className={
                            'text-lg font-semibold text-dark-blue-text dark:text-white md:text-xl'
                        }
                    >
                        Border Countries:
                    </h2>
                    {countryData.borders.length > 0 ? (
                        <Suspense
                            fallback={
                                <BorderCountriesSkeleton
                                    bordersLength={countryData.borders.length}
                                />
                            }
                        >
                            <BorderCountries borders={countryData.borders} />
                        </Suspense>
                    ) : (
                        <p>No border countries</p>
                    )}
                </section>
            </div>
        </div>
    )
}
