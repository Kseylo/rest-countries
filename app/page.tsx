import { CountriesList } from './components/Countries'
import { SearchCountry } from './components/Countries'
import { FilterByRegion } from './components/Countries'
import { CountriesListSkeleton } from './components/Countries'
import { Suspense } from 'react'
export default async function Home({
    searchParams,
}: {
    searchParams?: { query?: string; region?: string }
}) {
    const query = searchParams?.query || ''
    const region = searchParams?.region || ''

    return (
        <main
            className={`my-8 flex min-h-dvh max-w-screen-2xl flex-col gap-12 px-6 md:my-12 md:px-16 xl:mx-auto`}
        >
            <div className={'flex flex-col justify-between gap-8 md:flex-row'}>
                <SearchCountry />
                <FilterByRegion />
            </div>
            <Suspense fallback={<CountriesListSkeleton />}>
                <CountriesList query={query} region={region} />
            </Suspense>
        </main>
    )
}
