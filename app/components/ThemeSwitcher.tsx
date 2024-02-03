'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div
            className={'flex cursor-pointer items-center gap-2'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' || resolvedTheme === 'dark' ? (
                <IoMoon className={'text-white'} />
            ) : (
                <IoMoonOutline className={'text-dark-blue-text'} />
            )}
            <p className={'text-dark-blue-text dark:text-white'}>Dark Mode</p>
        </div>
    )
}
