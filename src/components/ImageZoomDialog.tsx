import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "./ui/button";
import { Character } from '@/types';

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

            <DialogContent className="w-[80vw] max-w-[500px] h-[80vh]">
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                >
                    {({ zoomIn, zoomOut, resetTransform/* , ...rest  */ }) => {
                        return (
                            <div className="w-full h-full flex justify-center overflow-scroll">
                                <TransformComponent>
                                    <img className={`${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-300 w-auto h-[70vh] object-cover rounded-md`} src={allImages[currentImageToDisplay]} alt={selectedCharacter.name} loading="lazy" />
                                </TransformComponent>
                                <div className="absolute z-50 bottom-0">
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
                                        {'<'}
                                    </Button>
                                    <Button onClick={() => zoomIn()}>+</Button>
                                    <Button onClick={() => zoomOut()}>-</Button>
                                    <Button onClick={() => resetTransform()}>x</Button>
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
                                        {'>'}
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