import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import FavoriteCharacterButton from "./FavoriteCharacterButton"

import { useEffect, useState } from 'react';

import CharacterFeatures from "./CharacterFeatures";
import { motion } from "framer-motion"
import ImageZoomDialog from "./ImageZoomDialog";
import { useSelectedCharacter } from "@/state/selectedCharacter";
import { useSearchParamsForTheApp } from "@/hooks/useSearchParamsForTheApp";

type DialogCharactersProps = {
    children: JSX.Element;
}

function DialogCharacters({ children }: DialogCharactersProps) {
    const [isAnimating, setIsAnimating] = useState(true);
    const [currentImageToDisplay, setCurrentImageToDisplay] = useState<number>(0)
    const [lastCharacter, setLastCharacter] = useState("")

    const { selectedCharacter } = useSelectedCharacter()

    const { isDialogOpen, setSearchParams } = useSearchParamsForTheApp()

    const allImages: string[] = [
        selectedCharacter.images.md,
        ...Object.entries(selectedCharacter.images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    ]

    useEffect(() => {
        if (lastCharacter !== selectedCharacter.name) {
            setLastCharacter(selectedCharacter.name)
            setCurrentImageToDisplay(0)
        }
    }, [selectedCharacter.name])


    return (
        <Dialog
            defaultOpen={isDialogOpen}
            onOpenChange={() => {
                setSearchParams((prev) => {
                    prev.set("isDialogOpen", (!isDialogOpen).toString())
                    return prev
                })
            }}
        >
            {children}
            <DialogContent
                className="w-[80vw] max-w-[1500px] max-h-[90vh] overflow-y-scroll xl:overflow-hidden"
            >
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-5">
                        <FavoriteCharacterButton
                            selectedCharacter={selectedCharacter}
                        />
                    </DialogTitle>
                    {/* <DialogDescription className="flex items-center gap-5"></DialogDescription> */}
                </DialogHeader>

                <div className='flex flex-col gap-5'>
                    <div className="w-full">
                        <div className="flex flex-col xl:flex-row justify-center">
                            <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] xl:h-[60%] mx-auto'>
                                <div
                                    className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] bg-muted-foreground shadow-xl rounded-md"
                                >
                                    <ImageZoomDialog
                                        isAnimating={isAnimating}
                                        setIsAnimating={setIsAnimating}
                                        currentImageToDisplay={currentImageToDisplay}
                                        setCurrentImageToDisplay={setCurrentImageToDisplay}
                                        allImages={allImages}
                                        selectedCharacter={selectedCharacter}
                                    >
                                        <label className='group cursor-pointer w-full h-full' htmlFor={`my-modal-imageZoom`}>
                                            <motion.img className={`transition-all duration-300 absolute w-full h-full object-cover blur-sm group-focus-visible:animate-pulse group-hover:animate-pulse `} src={allImages[currentImageToDisplay]} alt={selectedCharacter.name} loading="lazy" />
                                            <motion.img className={` ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-300 absolute w-[90%] h-[90%] object-cover rounded-md ml-3 md:ml-5 mt-5`} src={allImages[currentImageToDisplay]} alt={selectedCharacter.name} loading="lazy" />
                                        </label>
                                    </ImageZoomDialog>

                                </div>

                                <div className='self-center mt-5'>
                                    <h1
                                        className={`text-2xl lg:text-5xl font-bold text-center`}
                                        onClick={() => {
                                            setIsAnimating(false);
                                            setTimeout(() => {
                                                setIsAnimating(true);
                                                setCurrentImageToDisplay(prev => {
                                                    if (prev + 1 > allImages.length - 1) return 0
                                                    return prev + 1
                                                })
                                            }, 1000);
                                        }}
                                    >
                                        {selectedCharacter.name}
                                    </h1>
                                    <p
                                        className={`py-2 text-center`}
                                        onClick={() => {
                                            setIsAnimating(false);
                                            setTimeout(() => {
                                                setIsAnimating(true);
                                                setCurrentImageToDisplay(prev => {
                                                    if (prev - 1 < 0) return allImages.length - 1
                                                    return prev - 1
                                                })
                                            }, 1000);
                                        }}
                                    >
                                        {selectedCharacter.biography.fullName}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:h-[60vh] w-[90%] xl:w-[50%] mx-auto mt-5 xl:mt-0">
                                <CharacterFeatures selectedCharacter={selectedCharacter} />
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogCharacters


