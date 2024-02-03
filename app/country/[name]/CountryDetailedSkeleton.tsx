export function CountryDetailedSkeleton() {
    return (
        <div className={'flex animate-pulse flex-col gap-12 xl:flex-row'}>
            <div className={'flex-1 space-y-16'}>
                <div
                    className={
                        'h-60 max-w-lg bg-white shadow dark:bg-dark-blue md:h-80'
                    }
                ></div>
            </div>
            <div className={'flex flex-1 flex-col gap-8'}>
                <div
                    className={'h-6 w-2/3 bg-white shadow dark:bg-dark-blue'}
                ></div>
                <div
                    className={
                        'flex flex-col gap-12 md:flex-row md:justify-between'
                    }
                >
                    <ul className={'flex flex-col gap-5'}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li
                                key={index}
                                className={
                                    'h-4 w-64 bg-white shadow dark:bg-dark-blue'
                                }
                            ></li>
                        ))}
                    </ul>
                    <ul className={'flex flex-col gap-5'}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <li
                                key={index}
                                className={
                                    'h-4 w-64 bg-white shadow dark:bg-dark-blue'
                                }
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
