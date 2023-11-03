import FeatureTabContainer from "./components/FeatureTabContainer"
import ImageZoomDialog from "./ImageZoomDialog";
import StatContainer from "./components/StatContainer";
import { useState } from "react";
import { organizedComicsProperty } from "@/constants";
import { Character } from "@/types";
import { computed } from "@preact/signals-react";
import { selectedCharacter } from '../flow/selectedCharacter'

const images = computed(() => {
    return Object.entries(organizedComicsProperty(selectedCharacter.value.comics, selectedCharacter.value.biography.publisher).slice().sort(() => Math.random() - 0.5)).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
})

type FeatureTabComicsProps = {
    selectedCharacter: Character
}

function FeatureTabComics({ selectedCharacter }: FeatureTabComicsProps) {
    const [isAnimating, setIsAnimating] = useState(true);
    const [currentImageToDisplay, setCurrentImageToDisplay] = useState<number>(0)

    return (
        <FeatureTabContainer
            valueTab="Comics"
            extraClassNames="h-[50vh] md:h-[70vh] border-2 overflow-scroll"
        >
            <StatContainer>
                <div className='md:w-[50%] flex justify-center mx-auto'>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
                        {images.value.map((comic, index) => {
                            return (
                                <ImageZoomDialog
                                    key={`${selectedCharacter._id}-${index}`}
                                    isAnimating={isAnimating}
                                    setIsAnimating={setIsAnimating}
                                    currentImageToDisplay={currentImageToDisplay}
                                    setCurrentImageToDisplay={setCurrentImageToDisplay}
                                    allImages={images.value}
                                >
                                    <img
                                        onClick={() => setCurrentImageToDisplay(index)}
                                        className="h-auto w-full"
                                        src={comic}
                                        loading="lazy"
                                    />
                                </ImageZoomDialog>
                            )
                        })}
                    </div>
                </div>
            </StatContainer>
        </FeatureTabContainer>
    )
}

export default FeatureTabComics