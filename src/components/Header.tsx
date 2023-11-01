import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlignJustifyIcon, Keyboard, Settings } from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from './components/mode-toogle';

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// const TOP_OFFSET = 66;

// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// type useWithPaginationState = {
//     withPagination: boolean;
//     setWithPagination: (value: boolean) => void;
// };

// export const useWithPagination = create<useWithPaginationState>()(
//     persist(
//         (set) => ({
//             withPagination: false,
//             setWithPagination: (value: boolean) => set((state) => ({ ...state, withPagination: value })),
//         }),
//         {
//             name: "CHARACTERS_APP_WITHPAGINATION",
//             storage: createJSONStorage(() => localStorage),
//         }
//     )
// );


type HeaderProps = {
    children: JSX.Element;
    setWithPagination: React.Dispatch<React.SetStateAction<boolean>>
    withPagination: boolean;
    howManyRows: number;
   setHowManyRows: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ children, withPagination, howManyRows, setHowManyRows, setWithPagination }: HeaderProps) {
    // const { withPagination, setWithPagination } = useWithPagination()

    function changePaginationNumber(type: string, specific: string) {
        switch (true) {
            case type === 'minus':
                setHowManyRows(howManyRows - 1)
                break;

            case type === 'specific':
                setHowManyRows(parseInt(specific))
                break;

            case type === "plus":
                setHowManyRows(howManyRows + 1)
                break;

            default: break;
        }
    }

    return (
        <Sheet>
            <div className={
                // ${showBackground === false ? ' bg-secondary/50' : 'bg-secondary'}
                cn(
                    `flex justify-between 
                    items-center px-5 pt-4 pb-2 md:py-2 
                    gap-5 
                    bg-card
                    sticky top-0 z-[20] 
                    transition duration-500`
                )
            }>
                <div className='flex justify-center items-center gap-5'>
                    <SheetTrigger asChild>
                        {/* <Button variant="outline">CHARACTERS APP</Button> */}
                        <Button variant="outline" size="icon">
                            <AlignJustifyIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <AlignJustifyIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </SheetTrigger>
                    <Button variant={'outline'}>CHARACTERS APP</Button>
                </div>


                <div className="flex justify-center items-center gap-5">
                    <ModeToggle />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size={"icon"}><Settings /></Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-fit">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Characters view settings</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Change characters view settings.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[1.1rem] font-bold text-center"></p>
                                    <div className="flex items-center justify-center gap-2">
                                        <Switch
                                            id="setPagination"
                                            checked={withPagination}
                                            onCheckedChange={() => setWithPagination(!withPagination)}
                                        />
                                        <Label htmlFor="setPagination">
                                            With Pagination
                                        </Label>
                                    </div>

                                    <div className="w-full flex flex-row justify-center items-center gap-2">
                                        <div className="grid grid-cols-4 items-center gap-2 mx-auto py-5 flex-shrink">
                                            <Button
                                                variant={'outline'}
                                                onClick={() => {
                                                    changePaginationNumber('minus', "")
                                                }}
                                                disabled={howManyRows === 1}
                                            >
                                                {`-`}
                                            </Button>
                                            <Input
                                                type={'number'}
                                                id="howManyRows"
                                                value={howManyRows}
                                                className="col-span-2 text-center disabled:opacity-100 disabled:cursor-default"
                                                min={1}
                                                max={4}
                                                onChange={(event) => {
                                                    changePaginationNumber('specific', event.target.value)
                                                }}
                                                disabled={true}
                                            />
                                            <Button
                                                variant={'outline'}
                                                onClick={() => {
                                                    changePaginationNumber('plus', "")
                                                }}
                                                disabled={howManyRows === 4}
                                            >
                                                {`+`}
                                            </Button>
                                        </div>
                                        <p className="flex-shrink-0"># Rows</p>
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size={"icon"}><Keyboard /></Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-fit">
                            <div className="flex flex-col gap-2">
                                <p className="text-[1.1rem] font-bold text-center">Shortcuts</p>
                                <div className="flex items-center gap-2">
                                    <p>Press</p>
                                    <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">Enter</kbd>
                                    <p>to Search 🔍</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p>Press</p>
                                    <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">Ctrl</kbd>
                                    <p>+</p>
                                    <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">z</kbd>
                                    <p>to Favorites ⭐</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p>Press</p>
                                    <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">Ctrl</kbd>
                                    <p>+</p>
                                    <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">r</kbd>
                                    <p>to Reset 🔁</p>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                <SheetContent side={'left'} className="bg-card h-screen" >
                    <SheetHeader>
                        <SheetTitle>Select characters features</SheetTitle>
                        <SheetDescription>
                            Select characters by using these filters below
                        </SheetDescription>
                    </SheetHeader>
                    {/* <ScrollArea className="py-4 h-[91vh] pr-5 "> */}
                    {children}
                    {/* </ScrollArea> */}
                </SheetContent>
            </div>
        </Sheet>
    )
}

export default Header