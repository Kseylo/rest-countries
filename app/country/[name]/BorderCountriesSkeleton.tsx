interface BorderCountriesSkeletonProps {
    bordersLength: number
}

export function BorderCountriesSkeleton(props: BorderCountriesSkeletonProps) {
    return (
        <>
            {Array.from({ length: props.bordersLength }).map((_, index) => (
                <div
                    key={index}
                    className={
                        'flex w-28 animate-pulse items-center justify-center gap-2 rounded-sm bg-white py-3 shadow dark:bg-dark-blue'
                    }
                ></div>
            ))}
        </>
    )
}
