import { windowWidth } from "@/flow/windowWidth"

type StatStringProps = {
    statName: string
    statValue: string
    icon: string
    dataToolTip?: string
    dataTest?: string
}

export default function StatString({ statName, statValue, icon, /* dataToolTip, dataTest */ }: StatStringProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-5 my-5">
            <div className="flex items-center gap-2">
                <p className='text-2xl md:text-3xl'>{icon}</p>
                {
                    windowWidth.value > 770
                        ? <p>{statName}</p>
                        : null
                }
            </div>
            <div className="font-bold capitalize">{statValue}</div>
        </div>
    )
}