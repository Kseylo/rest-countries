interface InfoItemProps {
    label: string
    value: string | number
}

export function InfoItem(props: InfoItemProps) {
    const { label, value } = props
    return (
        <li className={'text-dark-blue-text font-semibold dark:text-white'}>
            {label}: <span className={'font-light'}>{value}</span>
        </li>
    )
}
