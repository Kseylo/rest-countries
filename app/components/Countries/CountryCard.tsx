import { Country } from '@/app/api'
import Image from 'next/image'
import Link from 'next/link'
import { InfoItem } from '@/app/ui/InfoItem'

interface CountryCardProps {
    country: Country
}
export function CountryCard(props: CountryCardProps) {
    const { country } = props
    const link = `/country/${country.name.common.toLowerCase().split(' ').join('-')}`
    return (
        <li
            className={
                'w-full max-w-xs cursor-pointer rounded-md bg-white shadow dark:bg-dark-blue'
            }
        >
            <Link href={link}>
                <div className={'relative h-48 w-full rounded-t-md'}>
                    <Image
                        priority
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className={'rounded-t-md'}
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className={'px-6 pb-10 pt-6'}>
                    <h2
                        className={
                            'my-3 text-lg font-bold text-dark-blue-text dark:text-white'
                        }
                    >
                        {country.name.common}
                    </h2>
                    <ul className={'flex flex-col gap-1'}>
                        <InfoItem
                            label={'Population'}
                            value={country.population}
                        />
                        <InfoItem label={'Region'} value={country.region} />
                        <InfoItem
                            label={'Capital'}
                            value={country.capital.join(', ')}
                        />
                    </ul>
                </div>
            </Link>
        </li>
    )
}
