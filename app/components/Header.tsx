'use client'

import { useTheme } from 'next-themes'
import { IoMoonOutline, IoMoon } from 'react-icons/io5'
import { useEffect, useState } from 'react'

export function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div
            className={`dark:bg-dark-blue flex items-center justify-between bg-white px-4 py-8 shadow-md`}
        >
            <h1 className={'font-bold dark:text-white'}>Where in the world?</h1>
            <div
                className={'flex cursor-pointer items-center gap-2'}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? (
                    <IoMoon className={'text-white'} />
                ) : (
                    <IoMoonOutline className={'text-dark-blue-text'} />
                )}
                <p className={'text-dark-blue-text dark:text-white'}>
                    Dark Mode
                </p>
            </div>
        </div>
    )
}
