'use client'
import { useTheme } from '@/app/Providers/Theme'

export function Header() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div>
            <h1 className={'font-bold'}>Where in the world?{theme}</h1>
            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}
