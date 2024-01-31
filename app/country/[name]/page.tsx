import { getCountry } from '@/app/api'
import { InfoItem } from '@/app/ui/InfoItem'
import Image from 'next/image'
import { LinkButton } from '@/app/ui/LinkButton'
import { HiArrowLongLeft } from 'react-icons/hi2'
import Link from 'next/link'

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
        <section className={'m-8 flex flex-col gap-8'}>
            <Link
                href={'/'}
                className={
                    'myShadow flex w-32 items-center justify-center gap-2 rounded-sm bg-white py-2 font-light text-dark-blue-text dark:bg-dark-blue dark:text-white'
                }
            >
                <HiArrowLongLeft size={28} /> Back
            </Link>
            <Image
                src={countryData.flags.svg}
                alt={countryData.flags.alt}
                width={300}
                height={300}
            />
            <h1
                className={
                    'text-2xl font-bold text-dark-blue-text dark:text-white'
                }
            >
                {countryData.name.common}
            </h1>
            <ul className={'flex flex-col gap-2'}>
                <InfoItem
                    label={'Native Name'}
                    value={
                        Object.values(countryData.name.nativeName)[0].official
                    }
                />
                <InfoItem label={'Population'} value={countryData.population} />
                <InfoItem label={'Region'} value={countryData.region} />
                <InfoItem label={'Subregion'} value={countryData.subregion} />
                <InfoItem
                    label={'Capital'}
                    value={countryData.capital.join(', ')}
                />
            </ul>
            <ul className={'flex flex-col gap-2'}>
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
                    value={Object.values(countryData.languages).join(', ')}
                />
            </ul>
            <section>
                <h2
                    className={
                        'text-xl font-semibold text-dark-blue-text dark:text-white'
                    }
                >
                    Border Countries:
                </h2>
            </section>
        </section>
    )
}
