import useWindowWidth from "@/hooks/useWindowWidth"
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type StatCollapseProps = {
    icon: string
    content: JSX.Element | JSX.Element[]
    title: string
    dataTest?: string
}

export default function StatAccordion({ icon, title, content/* , dataTest */ }: StatCollapseProps) {
    const windowWidth = useWindowWidth()

    return (
        
            <AccordionItem value={title}>
                <AccordionTrigger>
                    <div className="flex justify-between md:flex-row gap-2 items-center">
                        <p className="text-2xl md:text-3xl">{icon}</p>
                        {
                            windowWidth > 770
                                ? <p className="font-normal">{title}</p>
                                : <p className="font-bold">{title}</p>
                        }
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex justify-center font-bold">
                        {content}
                    </div>
                </AccordionContent>
            </AccordionItem>
    )
}


/* <div className="flex flex-row-reverse justify-center items-center py-3 gap-1">
            <div className="pr-5">
                <p className='text-2xl md:text-5xl lg:text-2xl'>{icon}</p>
            </div>

            <div
                className="rounded-box px-5"
                data-test={dataTest}
            >
                <div className="stat-title text-lg">
                    {title}
                </div>
                <div className="collapse-content font-bold text-2xl p-0 py-1">
                    {content}
                </div>
            </div>
        </div> */

        /*  <div className=""><div className="flex flex-col md:flex-row gap-2 items-center">
                <p className="text-2xl md:text-5xl lg:text-5xl">{icon}</p>
                {
                    windowWidth > 770
                        ? <p>{title}</p>
                        : null
                }
            </div>
            <div className='flex tooltip' data-tip={title}>
                <span className="normal-case">{content}</span>
            </div> </div> */