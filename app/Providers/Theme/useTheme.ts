'use client'
import { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from './ThemeContext'

export function useTheme() {
    return useContext(ThemeContext) as ThemeContextProps
}
