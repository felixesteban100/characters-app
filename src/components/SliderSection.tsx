// import ImagesSliderBetter from "./components/ImagesSliderBetter";
import ImagesSliderEmbla from "./components/ImagesSliderEmbla";

type SliderSectionProps = {
    selectedOne: string;
    heroSection: {
        imgs: string[];
        title: string;
        description: string;
    }
}

function SliderSection({ heroSection }: SliderSectionProps) {
    return (
        <div
        // className={`max-w-[100vw] w-full h-[95vh] my-0 mx-auto -translate-y-16 overflow-hidden bg-scroll`}
            // className={`max-w-[100vw] w-full h-[95vh] my-0 mx-auto -translate-y-16 overflow-hidden bg-scroll`}
            //aspect-square md:aspect-[16/7.5]
            // className={`lg:max-w-[100vw] w-full h-screen my-0 mx-auto -translate-y-16 overflow-hidden bg-scroll`} // for ImagesSliderBetter
        >
            {/* <ImagesSliderBetter imagesInfo={heroSection.imgs} /> */}
            <ImagesSliderEmbla imagesInfo={heroSection.imgs} />
        </div>
    )
}

export default SliderSection