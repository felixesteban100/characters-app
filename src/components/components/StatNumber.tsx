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
        <div className="grid grid-cols-8 justify-between items-center gap-6 my-5">
            <div className="flex items-center gap-2 col-span-1 md:col-span-2">
                <p className='text-2xl md:text-3xl'>{icon}</p>
                {
                    windowWidth > 770
                        ? <div className="fond-bold">{statName}</div>
                        : null
                }
            </div>
            <Progress value={progress} className="w-[90%] ml-5 col-span-5" />
            <p className="font-bold col-span-1">{progress}</p>
        </div>
    )
}