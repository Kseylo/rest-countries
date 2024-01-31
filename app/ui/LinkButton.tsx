import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'

interface LinkButtonProps extends LinkProps {
    textContent: string
    leftIcon?: ReactElement
}

export function LinkButton(props: LinkButtonProps) {
    const { textContent, leftIcon, ...rest } = props
    return (
        <Link
            {...rest}
            className={
                'myShadow flex items-center gap-2 rounded-sm bg-white px-6 py-2 font-light text-dark-blue-text dark:bg-dark-blue dark:text-white'
            }
        >
            {leftIcon}
            {textContent}
        </Link>
    )
}
