import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, /* Circle, CircleDot,  */PauseIcon, PlayIcon } from 'lucide-react'
import ButtonSlider from "./ButtonSlider";
import { Button } from "../ui/button";

type ImagesSliderProps = {
  imagesInfo: string[]
}

function ImagesSlider({ imagesInfo }: ImagesSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)
  const [autoMode, setAutoMode] = useState(false)

  useEffect(() => {
    if (autoMode) {
      const interval = setInterval(() => {
        changeImage('next')
      }, 5000);

      return () => {
        // Clean up the interval on unmount
        clearInterval(interval);
      };
    }
  }, [imagesInfo, autoMode]);

  function showPreviousImage() {
    setImageIndex(prevIndex => {
      if (prevIndex === 0) return imagesInfo.length - 1
      return prevIndex - 1
    })
  }

  function showNextImage() {
    setImageIndex(prevIndex => {
      if (prevIndex === imagesInfo.length - 1) return 0
      return prevIndex + 1
    })
  }

  function changeImage(action: "prev" | "next", indexS?: number) {
    const currentImage = document.getElementById('currentImage');
    if (currentImage) {
      switch (action) {
        case "prev":
          currentImage.classList.remove('animate-slideRightIn');
          currentImage.classList.remove('animate-slideRightOut');
          currentImage.classList.remove('animate-slideLeftIn');
          currentImage.classList.remove('animate-slideLeftOut');



          setTimeout(() => {
            currentImage.classList.add('animate-slideRightOut');
          }, 1)

          setTimeout(() => {
            if (indexS !== undefined) {
              setImageIndex(indexS)
            } else {
              showPreviousImage()
            }
          }, 200)


          setTimeout(() => {
            currentImage.classList.remove('animate-slideRightOut');
            currentImage.classList.add('animate-slideLeftIn');
          }, 500)
          break;

        case "next":
          currentImage.classList.remove('animate-slideRightIn');
          currentImage.classList.remove('animate-slideRightOut');
          currentImage.classList.remove('animate-slideLeftIn');
          currentImage.classList.remove('animate-slideLeftOut');

          setTimeout(() => {
            currentImage.classList.add('animate-slideLeftOut');
          }, 1)

          setTimeout(() => {
            if (indexS !== undefined) {
              setImageIndex(indexS)
            } else {
              showNextImage()
            }
          }, 200)

          setTimeout(() => {
            currentImage.classList.remove('animate-slideLeftOut');
            currentImage.classList.add('animate-slideRightIn');
          }, 500)
          break;
      }
    }
  };

  function changeImageDots(newIndex: number) {
    if (newIndex === imageIndex) return

    if (newIndex < imageIndex) {
      changeImage("prev", newIndex)
    } else {
      changeImage("next", newIndex)
    }
  }



  return (
    <section aria-label="Image Slider" className="w-full h-full relative ">
      <a href="#after-image-slider-controls" className="absolute w-[1px] h-[1px] p-0 -m-1 overflow-hidden border-0 focus-visible:top-0 focus-visible:left-0 focus-visible:border-2 focus-visible:bg-primary focus-visible:p-[0.5rem] focus-visible:h-auto focus-visible:w-auto focus-visible:m-0 focus-visible:text-primary-foreground focus-visible:z-[100] invisible motion-reduce:visible">Skip Image Slider Controls</a>
      <div className="w-full h-full flex">
        <ImageComponent
          url={imagesInfo[imageIndex]}
        />
      </div>

      <ButtonSlider
        functionClick={() => changeImage("prev")}
        classNames="left-0"
        label={'previous'}
      >
        <ArrowBigLeft
          aria-hidden
          className="fill-background stroke-default stroke-1 w-[5rem] h-[5rem]"
        />
      </ButtonSlider>



      <ButtonSlider
        functionClick={() => changeImage("next")}
        classNames="right-0"
        label={'next'}
      >
        <ArrowBigRight
          aria-hidden
          className="fill-background stroke-default stroke-1 w-[5rem] h-[5rem]"
        />
      </ButtonSlider>

      <div
        className="absolute bottom-[.5rem] left-[50%] -translate-x-[50%] flex items-center gap-[0.5rem]"
      >
        <Button
          onClick={() => setAutoMode(prev => !prev)}
          size={"icon"}
          variant={"outline"}
        >
          {autoMode ? <PauseIcon /> : <PlayIcon />}
        </Button>
        {
          imagesInfo.map((_, index) => {
            return (
              <Button
                key={index}
                onClick={() => changeImageDots(index)}
                className="block w-[1rem] h-[1rem] cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:scale-[1.2] focus-visible:scale-[1.2]"
                aria-label={`View Image ${index + 1}`}
                variant={imageIndex === index ? "default" : "outline"}
              >
                {/* {index === imageIndex ? <CircleDot aria-hidden className="fill-primary stroke-foreground w-full h-full" /> : <Circle aria-hidden className="fill-background stroke-primary w-full h-full" />} */}
              </Button>
            )
          })
        }
      </div>
      <div id="after-image-slider-controls" />
    </section >
  )
}


type ImageComponentProps = {
  url: string;
}

function ImageComponent({ url }: ImageComponentProps) {
  return (
    <img
      src={url}
      id="currentImage"
      className={`
        transition-all duration-300 ease-in-out object-cover block w-full h-full 
        flex-shrink-0 flex-grow-0 motion-reduce:transition-none
        `
      }
    />
  )
}

export default ImagesSlider