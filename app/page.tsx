'use client'

import { useTheme } from 'next-themes'

export default function Home() {
    const { theme, setTheme } = useTheme()
    return (
        <main className={`min-h-dvh`}>
            <button onClick={() => setTheme('light')}>light</button>
            <button onClick={() => setTheme('dark')}>dark</button>
        </main>
    )
}
