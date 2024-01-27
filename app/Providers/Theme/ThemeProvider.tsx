'use client'
import {
    ThemeContext,
    type Theme,
    type ThemeContextProps,
} from './ThemeContext'
import { useState, ReactNode, useCallback } from 'react'
export function ThemeProvider({ children }: { children: ReactNode }) {
    const localstorageTheme = localStorage.getItem('theme') as Theme
    const prefersDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
    ).matches
    const [theme, setTheme] = useState<Theme>(
        localstorageTheme || (prefersDarkTheme ? 'dark' : 'light'),
    )

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }, [])

    const contextValue: ThemeContextProps = {
        theme,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
