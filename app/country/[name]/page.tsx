import { getCountry } from '@/app/api'
import { InfoItem } from '@/app/ui/InfoItem'
import Image from 'next/image'
import { HiArrowLongLeft } from 'react-icons/hi2'
import Link from 'next/link'
import { Suspense } from 'react'
import { CountryDetailed } from './CountryDetailed'
import { CountryDetailedSkeleton } from './CountryDetailedSkeleton'
import { convertUrlName } from '@/app/utils'

interface Params {
    params: {
        name: string
    }
}

export async function generateMetadata({ params: { name: urlName } }: Params) {
    const commonName = convertUrlName(urlName)
    const countryDataList = await getCountry(commonName)
    const countryData = countryDataList[0]
    const { name, capital, region, subregion, population } = countryData
    return {
        title: `${name.common}`,
        description: `Officially known as ${name.official}, ${name.common} is a country located in ${region}. 
            The capital city is ${capital.join(', ')}. It has a population of ${population.toLocaleString()} people.`,
        keywords: `${name.common}, ${name.official}, ${region}, ${subregion}, ${capital.join(', ')}`,
        openGraph: {
            title: `${name.common}`,
            description: `Officially known as ${name.official}, ${name.common} is a country located in ${region}.`,
        },
    }
}

export default function CountryPage({ params: { name } }: Params) {
    return (
        <main
            className={`my-10 max-w-screen-2xl gap-12 space-y-16 px-6 md:my-12 md:px-16 xl:mx-auto`}
        >
            <Link
                href={'/'}
                className={
                    'flex w-32 items-center justify-center gap-2 rounded-sm bg-white py-2 font-light text-dark-blue-text shadow dark:bg-dark-blue dark:text-white'
                }
            >
                <HiArrowLongLeft size={28} /> Back
            </Link>
            <Suspense fallback={<CountryDetailedSkeleton />}>
                <CountryDetailed name={name} />
            </Suspense>
        </main>
    )
}
