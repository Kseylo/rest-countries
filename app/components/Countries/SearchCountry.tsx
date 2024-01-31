'use client'
import { MdOutlineSearch } from 'react-icons/md'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export function SearchCountry() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleSearch = (query: string) => {
        const params = new URLSearchParams(searchParams)
        if (query) {
            params.set('query', query)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <div className={'relative w-full md:max-w-lg'}>
            <div className={'absolute inset-y-0 ml-6 flex items-center'}>
                <MdOutlineSearch
                    className={'text-dark-gray dark:text-white'}
                    size={24}
                />
            </div>
            <input
                type={'text'}
                placeholder={'Search for a country...'}
                onChange={(event) => handleSearch(event.target.value)}
                className={
                    'w-full flex-1 rounded-md bg-white p-3 pl-16 font-light text-dark-gray shadow outline-none placeholder:text-dark-gray dark:bg-dark-blue dark:text-white dark:placeholder:text-white'
                }
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}
