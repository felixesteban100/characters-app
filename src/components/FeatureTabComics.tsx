import { useSelectedCharacter } from "@/state/selectedCharacter"
import FeatureTabContainer from "./components/FeatureTabContainer"
import ImageZoomDialog from "./ImageZoomDialog";
import StatContainer from "./components/StatContainer";
import { useState } from "react";
import { organizedComicsProperty } from "@/constants";

type FeatureTabComicsProps = {}

function FeatureTabComics({ }: FeatureTabComicsProps) {
    const { selectedCharacter } = useSelectedCharacter()
    const [isAnimating, setIsAnimating] = useState(true);
    const [currentImageToDisplay, setCurrentImageToDisplay] = useState<number>(0)

    const allImages: string[] = [
        ...Object.entries(organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher)).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    ]

    return (
        <FeatureTabContainer
                valueTab="Comics"
                extraClassNames="h-[50vh] md:h-[70vh] border-2 overflow-scroll"
            >
                <StatContainer>
                    <div className='md:w-[50%] flex justify-center mx-auto'>
                        <div className="h-full w-full flex flex-col justify-center items-center gap-5">
                            {organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).map((comic, index) => {
                                return (
                                    <ImageZoomDialog
                                        key={`${selectedCharacter._id}-${index}`}
                                        isAnimating={isAnimating}
                                        setIsAnimating={setIsAnimating}
                                        currentImageToDisplay={currentImageToDisplay}
                                        setCurrentImageToDisplay={setCurrentImageToDisplay}
                                        allImages={allImages}
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