import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type SelectInputProps = {
    value: string
    options: {
        value: string;
        name: string;
    }[]
    onChangeFunction: (valueS: string) => void;
    forWhat: string;
    dataTest: string;
}

export default function SelectInput({ value, options, onChangeFunction, forWhat/* , dataTest */ }: SelectInputProps) {
    return (
        <div className="flex justify-center items-center my-5">
            <Select
                value={value}
                onValueChange={(valueS) => {
                    onChangeFunction(valueS)
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder={`Pick the ${forWhat}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel className="capitalize">{forWhat}</SelectLabel>
                        <ScrollArea className="h-[10rem]">
                            {options.map((current, index) => (
                                <SelectItem
                                    key={index}
                                    value={current.value}
                                >
                                    {current.name}
                                </SelectItem>
                            ))}
                        </ScrollArea>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}