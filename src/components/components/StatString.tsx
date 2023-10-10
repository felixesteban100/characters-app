import useWindowWidth from "@/hooks/useWindowWidth"

type StatStringProps = {
    statName: string
    statValue: string
    icon: string
    dataToolTip?: string
    dataTest?: string
}

export default function StatString({ statName, statValue, icon, /* dataToolTip, dataTest */ }: StatStringProps) {
    const windowWidth = useWindowWidth()

    return (
        <div className="flex flex-row justify-between items-center gap-5 my-5">
            <div className="flex items-center gap-2">
                <p className='text-2xl md:text-3xl'>{icon}</p>
                {
                    windowWidth > 770
                        ? <p>{statName}</p>
                        : null
                }
            </div>
            <div className="font-bold capitalize">{statValue}</div>
        </div>
    )
}

/* 
    <div className="flex flex-row justify-between items-center gap-5 my-5">
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <p className="text-2xl md:text-5xl lg:text-5xl">{icon}</p>
                <div className="stat-title">{statName}</div>
            </div>
            
            <div className='flex tooltip' data-tip={dataToolTip}>
                <span data-test={dataTest} className="stat-value whitespace-pre text-xl md:text-2xl lg:text-2xl">
                    {statValue}
                </span>
            </div>
        </div>
*/