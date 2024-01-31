'use client'

import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { clsx } from 'clsx'

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

interface RegionOptionsProps {
    region: string
    onClick: (region: string) => void
}

function RegionOption(props: RegionOptionsProps) {
    const { region, onClick } = props

    const searchParams = useSearchParams()
    const selectedRegion = searchParams.get('region')

    const isFirst = REGIONS.indexOf(region) === 0
    const isLast = REGIONS.indexOf(region) === REGIONS.length - 1

    return (
        <li
            className={clsx(
                'cursor-pointer p-3 hover:bg-neutral-100 hover:dark:bg-dark-blue-text',
                {
                    'rounded-t-md': isFirst,
                    'rounded-b-md': isLast,
                    'bg-neutral-100 dark:bg-dark-blue-text':
                        selectedRegion === region,
                },
            )}
            onClick={() => onClick(region)}
        >
            <label className={'pointer-events-none select-none'}>
                <input type={'radio'} name={region} className={'hidden'} />
                {region}
            </label>
        </li>
    )
}

export function FilterByRegion() {
    const [open, setOpen] = useState(false)

    const searchParams = useSearchParams()
    const region = searchParams.get('region')
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleOptionChange = (selectedRegion: string) => {
        setOpen(false)
        const params = new URLSearchParams(searchParams)
        if (region === selectedRegion) {
            params.delete('region')
        } else {
            params.set('region', selectedRegion)
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={'relative w-60'}>
            <button
                className={
                    'flex w-full items-center justify-between gap-4 rounded-md bg-white p-3 font-light shadow dark:bg-dark-blue'
                }
                onClick={() => setOpen((prevState) => !prevState)}
            >
                {region || 'Filter by Region'} <MdKeyboardArrowDown size={22} />
            </button>
            {open && (
                <ul
                    className={
                        'absolute inset-x-0 z-10 mt-2 rounded-md bg-white font-light shadow dark:bg-dark-blue'
                    }
                >
                    {REGIONS.map((region) => (
                        <RegionOption
                            key={region}
                            region={region}
                            onClick={handleOptionChange}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}
