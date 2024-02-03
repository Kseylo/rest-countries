import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers/Providers'
import { Header } from '@/app/components/Header'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Rest Countries',
        template: '%s | Rest Countries',
    },
    description:
        'Explore information about countries from around the world. Search, filter, and view details.',
    keywords:
        'countries, country information, world data, geography, country details',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${nunitoSans.className} bg-light-gray-bg dark:bg-dark-blue-bg`}
            >
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
