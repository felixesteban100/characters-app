import ImagesSlider from "./components/ImagesSlider";

type SliderSectionProps = {
    selectedOne: string;
    heroSection: {
        imgs: string[];
        title: string;
        description: string;
    }
}

function SliderSection({ /* selectedOne, */ heroSection }: SliderSectionProps) {
    return (
        <div
            // className={`max-w-[100vw] w-full aspect-[2.5/4.5] md:aspect-[4.5/4.5] lg:aspect-[10/4.5] my-0 mx-auto`}
            className={`max-w-[100vw] w-full h-[95vh] my-0 mx-auto -translate-y-16 overflow-hidden`}
        >
            <ImagesSlider imagesInfo={heroSection.imgs} />
        </div>
    )
}

export default SliderSection