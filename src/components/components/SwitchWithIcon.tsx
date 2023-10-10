import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

type SwitchWithIconProps = {
    valueChecked: boolean
    id: string
    onCheckedChangeFunc: () => void
    firstIcon: string;
    secondIcon: string;
    firstText: string;
    secondText: string;
}

function SwitchWithIcon({ valueChecked, id, onCheckedChangeFunc, firstIcon, secondIcon, firstText, secondText }: SwitchWithIconProps) {
    return (
        <div className="flex items-center space-x-2">
            <Switch
                id={id}
                checked={valueChecked}
                onCheckedChange={onCheckedChangeFunc}
            />
            <Label htmlFor={id}>
                {
                    valueChecked
                        ? <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="active:animate-rotate-vert-center">{firstIcon}</div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <p>{firstText}</p>
                            </HoverCardContent>
                        </HoverCard>
                        : <HoverCard>
                            <HoverCardTrigger asChild>
                                <div className="active:animate-rotate-vert-center">{secondIcon}</div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <p>{secondText}</p>
                            </HoverCardContent>
                        </HoverCard>
                }
            </Label>
        </div>
    )
}

export default SwitchWithIcon