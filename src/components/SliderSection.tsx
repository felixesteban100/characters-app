// import ImagesSliderBetter from "./components/ImagesSliderBetter";
import { useHeroSection } from "@/state/heroSection";
import ImagesSliderEmbla from "./components/ImagesSliderEmbla";

type SliderSectionProps = {}

function SliderSection({ }: SliderSectionProps) {
    const { heroSection } = useHeroSection()

    console.log(heroSection)

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