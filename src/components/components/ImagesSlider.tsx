import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react'
import ButtonSlider from "./ButtonSlider";

import { useInView } from 'react-intersection-observer';

type ImagesSliderProps = {
  imagesInfo: string[]
}

function ImagesSlider({ imagesInfo }: ImagesSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)


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



  return (
    <section aria-label="Image Slider" className="w-full h-full relative ">
      <a href="#after-image-slider-controls" className="absolute w-[1px] h-[1px] p-0 -m-1 overflow-hidden border-0 focus-visible:top-0 focus-visible:left-0 focus-visible:border-2 focus-visible:bg-primary focus-visible:p-[0.5rem] focus-visible:h-auto focus-visible:w-auto focus-visible:m-0 focus-visible:text-primary-foreground focus-visible:z-[100] invisible motion-reduce:visible">Skip Image Slider Controls</a>
      <div
        // slider-shadow
        className="w-full h-full flex 
        "
      >
        {
          imagesInfo.map((img, index) => {
            return (
              <ImageComponent
                key={img}
                imageIndex={imageIndex}
                url={img}
                index={index}
              />
            )
          })
        }
      </div>

      <ButtonSlider
        functionClick={showPreviousImage}
        classNames="left-0"
        label={'previous'}
      >
        <ArrowBigLeft
          aria-hidden
          className="fill-background stroke-default stroke-1 w-[5rem] h-[5rem]"
        />
      </ButtonSlider>

      <ButtonSlider
        functionClick={showNextImage}
        classNames="right-0"
        label={'next'}
      >
        <ArrowBigRight
          aria-hidden
          className="fill-background stroke-default stroke-1 w-[5rem] h-[5rem]"
        />
      </ButtonSlider>

      <div
        className="absolute bottom-[.5rem] left-[50%] -translate-x-[50%] flex gap-[0.5rem]"
      >
        {
          imagesInfo.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setImageIndex(index)}
                className="block w-[1rem] h-[1rem] cursor-pointer transition-all ease-in-out duration-500 hover:scale-[1.2] focus-visible:scale-[1.2]"
                aria-label={`View Image ${index + 1}`}
              >
                {index === imageIndex ? <CircleDot aria-hidden className="fill-primary stroke-foreground w-full h-full" /> : <Circle aria-hidden className="fill-background stroke-primary w-full h-full" />}
              </button>
            )
          })
        }
      </div>
      <div id="after-image-slider-controls" />
    </section >
  )
}


type ImageComponentProps = {
  url: string
  index: number
  imageIndex: number
}

function ImageComponent({ url, index, imageIndex }: ImageComponentProps) {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  function getTranlation(indexImg: number) {
    switch (indexImg) {
      case 0: return '-translate-x-[0%]';
      case 1: return '-translate-x-[100%]';
      case 2: return '-translate-x-[200%]';
      case 3: return '-translate-x-[300%]';
      case 4: return '-translate-x-[400%]';
      case 5: return '-translate-x-[500%]';
      case 6: return '-translate-x-[600%]';
      case 7: return '-translate-x-[700%]';
    }
  }

  return (
    <img
      ref={ref}
      src={url}
      // before:content-none after:content-none 
      // before:bg-gradient-to-r after:before:bg-gradient-to-r
      // gradient
      // before:bg-background after:background
      // before:h-full after:h-full
      // before:absolute after:absolute
      // before:w-[15%] after:w-[15%]
      // before:z-[100] after:z-[100]

      // ${inView
      //     ? "opacity-100"
      //     : `
      //       shadow-img-slide
      //     `
      //   } 
      // slider-shadow
      // rounded-md 
      className={`
      ${inView ? "opacity-100" : "opacity-80 blur-sm"}
        transition-all duration-300 ease-in-out object-cover block w-full h-full 
        ${getTranlation(imageIndex)} 
        flex-shrink-0 flex-grow-0 motion-reduce:transition-none
        `
      }
      aria-hidden={imageIndex !== index}
    />
  )
}

export default ImagesSlider