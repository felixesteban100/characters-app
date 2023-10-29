import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "./ui/button";

import { ArrowBigLeft, ArrowBigRight, PlusIcon, MinusIcon, RotateCcw } from 'lucide-react'
import { useSelectedCharacter } from '@/state/selectedCharacter';

type ImageZoomDialogProps = {
    children: JSX.Element;
    isAnimating: boolean;
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>
    currentImageToDisplay: number;
    setCurrentImageToDisplay: React.Dispatch<React.SetStateAction<number>>
    allImages: string[];
}

function ImageZoomDialog({ children, isAnimating, setIsAnimating, currentImageToDisplay, setCurrentImageToDisplay, allImages }: ImageZoomDialogProps) {
    const { selectedCharacter } = useSelectedCharacter()

    return (
        <Dialog>
            <DialogTrigger className='flex'>
                {children}
            </DialogTrigger>

            <DialogContent
                className="w-[80vw] max-w-[500px] h-[80vh] xl:w-[80vw] xl:max-w-[600px] xl:h-[95vh] bg-card"
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
                {/* w-[80vw] max-w-[500px] h-[80vh] */}
                <img className={`${isAnimating ? "opacity-100 " : "opacity-0"} duration-1000 absolute blur-sm h-full w-full object-cover`} src={allImages[currentImageToDisplay]} alt="" />
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
                                <TransformComponent contentClass='w-[75vw] h-[75vh] xl:w-[75vw] xl:h-[90vh] max-w-[450px] xl:max-w-[550px]'>
                                    <img
                                        //w-[75vh] xl:w-[60vh]
                                        className={
                                            `w-full ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"} 
                                            transition-all duration-300  
                                            object-cover rounded-md xl:translate-y-10`
                                        }
                                        src={allImages[currentImageToDisplay]}
                                        alt={selectedCharacter.name}
                                        loading="lazy"
                                    />
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
                                        <ArrowBigLeft />
                                    </Button>
                                    <Button onClick={() => zoomIn()}><PlusIcon /></Button>
                                    <Button onClick={() => zoomOut()}><MinusIcon /></Button>
                                    <Button onClick={() => resetTransform()}><RotateCcw /></Button>
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
                                        <ArrowBigRight />
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