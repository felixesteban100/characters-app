import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "./ui/button";
import { Character } from '@/types';

import { ArrowBigLeft, ArrowBigRight, PlusIcon, MinusIcon, RotateCcw } from 'lucide-react'

type ImageZoomDialogProps = {
    children: JSX.Element;
    isAnimating: boolean;
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>
    currentImageToDisplay: number;
    setCurrentImageToDisplay: React.Dispatch<React.SetStateAction<number>>
    allImages: string[];
    selectedCharacter: Character
}

function ImageZoomDialog({ children, isAnimating, setIsAnimating, currentImageToDisplay, setCurrentImageToDisplay, allImages, selectedCharacter }: ImageZoomDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className='flex'>
                {children}
            </DialogTrigger>

            <DialogContent
                className="w-[80vw] max-w-[500px] h-[80vh]"
            >
                {/* <div
                    style={{ 
                        backgroundImage: `url(${allImages[currentImageToDisplay]})`, 
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backdropFilter: "blur(50rem)"
                    }}
                    className='w-[80vw] max-w-[500px] h-[80vh]'
                >
                </div> */}
                <img className='absolute blur-sm w-[80vw] max-w-[500px] h-[80vh]' src={allImages[currentImageToDisplay]} alt="" />
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                >
                    {({ zoomIn, zoomOut, resetTransform/* , ...rest  */ }) => {
                        return (
                            <div
                                className="absolute w-full h-full flex justify-center overflow-hidden"
                            >
                                <TransformComponent>
                                    <img className={`${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-300 w-auto h-[75vh] object-cover rounded-md translate-y-10`} src={allImages[currentImageToDisplay]} alt={selectedCharacter.name} loading="lazy" />
                                </TransformComponent>
                                <div className="absolute z-50 bottom-0 flex gap-2">
                                    <Button
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
                                        <ArrowBigLeft/>
                                    </Button>
                                    <Button onClick={() => zoomIn()}><PlusIcon/></Button>
                                    <Button onClick={() => zoomOut()}><MinusIcon/></Button>
                                    <Button onClick={() => resetTransform()}><RotateCcw/></Button>
                                    <Button
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
                                        <ArrowBigRight/>
                                    </Button>
                                </div>
                            </div>
                        )
                    }}
                </TransformWrapper>
            </DialogContent>
        </Dialog>
    )
}

export default ImageZoomDialog