import useWindowWidth from "@/hooks/useWindowWidth"
import { Progress } from "../ui/progress"
import { useState, useEffect } from 'react'

type StatNumberProps = {
    statName: string
    statValue: number
    icon: string
}

export default function StatNumber({ statName, statValue, icon }: StatNumberProps) {
    const windowWidth = useWindowWidth()

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setProgress(statValue), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="flex flex-row justify-between items-center gap-5 my-5">
            <div className="flex items-center gap-2">
                <p className='text-2xl md:text-3xl'>{icon}</p>
                {
                    windowWidth > 770
                        ? <div className="fond-bold">{statName}</div>
                        : null
                }
            </div>
            <Progress value={progress} className="w-[60%]" />
            <p className="font-bold">{progress}</p>
            {/* <div className="stat-value text-2xl md:text-5xl lg:text-5xl">{statValue}</div> */}
        </div>
    )
}