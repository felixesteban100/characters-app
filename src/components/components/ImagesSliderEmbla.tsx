import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import { flushSync } from 'react-dom'
import { useInView } from 'react-intersection-observer'
import { PauseIcon, PlayIcon } from 'lucide-react'
const TWEEN_FACTOR = 0.4

type ImagesSliderProps = {
    imagesInfo: string[]
}

function ImagesSliderEmbla({ imagesInfo }: ImagesSliderProps) {
    const [autoPlay, setAutoPlay] = useState(false)
    const [tweenValues, setTweenValues] = useState<number[]>([])
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            duration: 40
        },
        autoPlay ? [Autoplay({ delay: 2000 })] : []
    )

    const onScroll = useCallback(() => {
        if (!emblaApi) return

        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()

        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target()
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
                    }
                })
            }
            return diffToTarget * (-1 / TWEEN_FACTOR) * 100
        })
        setTweenValues(styles)

        setSelectedIndex(emblaApi.selectedScrollSnap())

    }, [emblaApi, setTweenValues])

    useEffect(() => {
        if (!emblaApi) return
        onScroll()
        emblaApi.on('scroll', () => {
            flushSync(() => onScroll())
        })
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
            setSelectedIndex(index)
        },
        [emblaApi]
    )

    return (
        <div>
            <div className="overflow-x-hidden" ref={emblaRef}>
                <div
                    className="backface-hidden flex touch-pan-y"
                >
                    {imagesInfo.map((img, index) => (
                        <Image
                            key={index}
                            index={index}
                            img={img}
                            tweenValues={tweenValues}
                        />
                    ))}
                </div>
                <div
                    className={`p-5 -translate-y-[5rem] duration-300 transition-all w-full mx-auto flex flex-row justify-center items-center gap-2`}
                >
                    <Button
                        onClick={() => setAutoPlay(prev => !prev)}
                        variant={'outline'}
                        size={'icon'}
                    >
                        {autoPlay ? <PauseIcon /> : <PlayIcon />}
                    </Button>
                    <div className='flex justify-center items-center gap-1'>
                        {emblaApi?.scrollSnapList().map((_, index) => (
                            <Button
                                key={index}
                                className='w-5 h-5'
                                onClick={() => onDotButtonClick(index)}
                                variant={selectedIndex === index ? "default" : "outline"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

type ImageProps = {
    index: number;
    img: string;
    tweenValues: number[]
}

function Image({ index, img, tweenValues }: ImageProps) {
    const { ref, inView } = useInView({
        threshold: 0.5
    })

    return (
        <div
            ref={ref}
            className="flex-grow-0 flex-shrink-0 w-[80%] min-h-[500px] max-h-[850px] relative pl-5"
        >
            <div className="h-[100%] overflow-x-hidden">
                <div
                    className="relative w-full h-full"
                    style={{
                        ...(tweenValues.length && {
                            transform: `translateX(${tweenValues[index]}%)`,
                        })
                    }}
                >
                    <img
                        className={`block h-full w-[100%] object-cover max-w-none  ${inView ? "opacity-100" : "opacity-20"} duration-300`}
                        src={img}
                        alt="Your alt text"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImagesSliderEmbla