import { getCountry } from '@/app/api'
import { InfoItem } from '@/app/ui/InfoItem'
import Image from 'next/image'
import { HiArrowLongLeft } from 'react-icons/hi2'
import Link from 'next/link'
import { BorderCountries } from './BorderCountries'
import { Suspense } from 'react'

function convertName(name: string) {
    return name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

interface Params {
    params: {
        name: string
    }
}

export default async function CountryPage({ params: { name } }: Params) {
    const commonName = convertName(name)
    const countryDataList = await getCountry(commonName)
    const countryData = countryDataList[0]
    return (
        <main
            className={`my-10 flex max-w-screen-2xl flex-col justify-between gap-16 px-6 md:my-12 md:flex-row md:items-center md:px-16 xl:mx-auto`}
        >
            <div className={'space-y-16 md:w-1/2'}>
                <Link
                    href={'/'}
                    className={
                        'flex w-32 items-center justify-center gap-2 rounded-sm bg-white py-2 font-light text-dark-blue-text shadow dark:bg-dark-blue dark:text-white'
                    }
                >
                    <HiArrowLongLeft size={28} /> Back
                </Link>
                <div className={'relative h-64 w-full max-w-xl md:h-96'}>
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

            <div className={'flex flex-col gap-8 md:w-1/2'}>
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
                <Suspense fallback={'Loading...'}>
                    <BorderCountries borders={countryData.borders} />
                </Suspense>
            </div>
        </main>
    )
}
