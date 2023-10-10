import { useState, useEffect } from 'react'
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

const TOP_OFFSET = 66;

type HeaderProps = {
    children: JSX.Element
}

function Header({ children }: HeaderProps) {
    /* function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }; */

    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Sheet>
            <div className={cn(`flex justify-between ${showBackground === false ? ' bg-secondary/50' : 'bg-secondary'} items-center px-5 pt-4 pb-2 md:py-2 gap-5 sticky top-0 z-[20] transition duration-500`)}>
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

                <ModeToggle />

                <SheetContent side={'left'} >
                    <SheetHeader>
                        <SheetTitle>Select characters features</SheetTitle>
                        <SheetDescription>
                            Select characters by using these filters below
                        </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                        {children}
                    </div>
                </SheetContent>
            </div>
        </Sheet>
    )
}

export default Header