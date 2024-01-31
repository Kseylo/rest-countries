export function CountriesListSkeleton() {
    return (
        <div
            className={
                'mx-8 grid animate-pulse grid-cols-1 justify-items-center gap-16 md:mx-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }
        >
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className={
                        'h-96 w-full max-w-xs rounded-md bg-white shadow dark:bg-dark-blue'
                    }
                >
                    <div
                        className={'h-48 w-full rounded-t-md bg-dark-gray'}
                    ></div>
                    <div className={'px-6 pb-10 pt-6'}>
                        <div
                            className={'mb-6 mt-3 h-4 rounded bg-dark-gray'}
                        ></div>
                        <div className={'w-2/3  space-y-3 rounded'}>
                            <div className={'h-3 rounded bg-dark-gray'}></div>
                            <div className={'h-3 rounded bg-dark-gray'}></div>
                            <div className={'h-3 rounded bg-dark-gray'}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
