'use client'

import { useEffect } from 'react'

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error(props: ErrorProps) {
    const { error, reset } = props

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main
            className={`my-8 flex max-w-screen-2xl flex-col items-center px-6 md:my-12 md:px-16 xl:mx-auto`}
        >
            <div className={'flex flex-col items-center gap-5'}>
                <h2 className={'text-2xl text-red-500'}>
                    Something went wrong!
                </h2>
                <button
                    onClick={() => reset()}
                    className={
                        'w-2/3 rounded-sm bg-white py-2 text-dark-blue-text shadow dark:bg-dark-blue dark:text-white'
                    }
                >
                    Try again
                </button>
            </div>
        </main>
    )
}
