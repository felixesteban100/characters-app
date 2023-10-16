import ImagesSliderBetter from "./components/ImagesSliderBetter";

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
            className={`max-w-[100vw] w-full h-[95vh] my-0 mx-auto -translate-y-16 overflow-hidden bg-scroll`}
        >
            <ImagesSliderBetter imagesInfo={heroSection.imgs} />
        </div>
    )
}

export default SliderSection