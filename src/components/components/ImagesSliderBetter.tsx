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
    <section aria-label="Image Slider" className="w-full h-full">
      <div className="w-full h-full flex">
        <ImageComponent
          url={imagesInfo[imageIndex]}
        />
        
      </div>

      <ButtonSlider
        functionClick={() => changeImage("prev")}
        //bg-gradient-to-r from-10% from-background to-100%
        classNames="left-0 "
        label={'previous'}
      >
        <ArrowBigLeft
          aria-hidden
          className="fill-background stroke-default stroke-1 w-[5rem] h-[5rem]"
        />
      </ButtonSlider>

      <ButtonSlider
        functionClick={() => changeImage("next")}
        //bg-gradient-to-l from-10% from-background to-100%
        classNames="right-0"
        label={'next'}
      >
        <ArrowBigRight
          aria-hidden
          className="fill-background stroke-default stroke-1 w-[5rem] h-[5rem]"
        />
      </ButtonSlider>

      <div
        className={`
          absolute bottom-0 left-[50%] 
          -translate-x-[50%] 
          flex items-center gap-[0.5rem] 
          w-full 
          justify-center 
          bg-gradient-to-t from-5% from-background p-16
        `}
      >
        <Button
          onClick={() => setAutoMode(prev => !prev)}
          size={"icon"}
          variant={"default"}
        >
          {autoMode ? <PauseIcon /> : <PlayIcon />}
        </Button>
        {
          imagesInfo.map((_, index) => {
            return (
              <Button
                key={index}
                onClick={() => changeImageDots(index)}
                className="border-primary-foreground border-2 block w-[1rem] h-[1rem] cursor-pointer rounded-full transition-all ease-in-out duration-500 hover:scale-[1.2] focus-visible:scale-[1.2]"
                aria-label={`View Image ${index + 1}`}
                variant={imageIndex === index ? "default" : "secondary"}
              />
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


/* <div
          style={{
            backgroundImage: `url(${imagesInfo[imageIndex]})`,
            backgroundAttachment: "fixed",
            height: "100%",
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center'
          }}
          id="currentImage"
          className={`
            transition-all duration-300 ease-in-out object-cover block w-full h-full 
            flex-shrink-0 flex-grow-0 motion-reduce:transition-none
          `}
        /> */