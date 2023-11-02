import { windowWidth } from "@/flow/windowWidth"
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
    return (
        
            <AccordionItem value={title}>
                <AccordionTrigger>
                    <div className="flex justify-between md:flex-row gap-2 items-center">
                        <p className="text-2xl md:text-3xl">{icon}</p>
                        {
                            windowWidth.value > 770
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