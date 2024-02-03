import { BorderCountries } from '@/app/country/[name]/BorderCountries'

export interface Country {
    flags: {
        png: string
        svg: string
        alt: string
    }
    name: {
        common: string
        official: string
        nativeName: { [key: string]: { official: string } }
    }
    region: string
    capital: string[]
    population: number
}
export interface CountryDetailed extends Country {
    tld: string[]
    currencies: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    subregion: string
    languages: {
        [key: string]: string
    }
    borders: string[]
}

export interface BorderCountry {
    name: {
        common: string
        official: string
        nativeName: { [key: string]: { official: string } }
    }
}
