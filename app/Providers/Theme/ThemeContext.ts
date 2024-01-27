'use client'
import { createContext, Dispatch, SetStateAction } from 'react'

export type Theme = 'dark' | 'light'

export interface ThemeContextProps {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)
