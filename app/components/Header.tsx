import { ThemeSwitcher } from './ThemeSwitcher'
import { Suspense } from 'react'
export function Header() {
    return (
        <header className={`bg-white shadow-md dark:bg-dark-blue`}>
            <div
                className={
                    'mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-8 md:px-16'
                }
            >
                <h1 className={'font-bold dark:text-white'}>
                    Where in the world?
                </h1>
                <ThemeSwitcher />
            </div>
        </header>
    )
}
