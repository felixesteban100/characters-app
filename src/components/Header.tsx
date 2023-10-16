// import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AlignJustifyIcon } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './components/mode-toogle';
import { ScrollArea } from "./ui/scroll-area";
// import { scrollDown } from "@/functions";

// const TOP_OFFSET = 66;

type HeaderProps = {
    children: JSX.Element;
}

function Header({ children }: HeaderProps) {

    return (
        <Sheet>
            <div className={
                // ${showBackground === false ? ' bg-secondary/50' : 'bg-secondary'}
                cn(
                    `flex justify-between 
                    items-center px-5 pt-4 pb-2 md:py-2 
                    gap-5 
                    bg-secondary
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
                    {/* <Button
                        variant={'secondary'}
                        onClick={() => scrollToSection('section-characters')}
                    >
                        See Characters
                    </Button> */}
                </div>

                <Button /* onClick={() => scrollDown(scrollRef)} */ variant={'outline'} /* disabled className='disabled:opacity-100' */>CHARACTERS APP</Button>

                <ModeToggle />

                <SheetContent side={'left'} >
                    <SheetHeader>
                        <SheetTitle>Select characters features</SheetTitle>
                        <SheetDescription>
                            Select characters by using these filters below
                        </SheetDescription>
                    </SheetHeader>
                    <ScrollArea className="py-4 h-[91vh] pr-5">
                        {children}
                    </ScrollArea>
                </SheetContent>
            </div>
        </Sheet>
    )
}

export default Header