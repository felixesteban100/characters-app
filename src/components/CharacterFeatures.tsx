import { Character } from "../types"
import StatContainer from "./components/StatContainer";
import StatNumber from "./components/StatNumber";
import StatString from "./components/StatString";
import StatAccordion from "./components/StatAccordion";
import useWindowWidth from "./../hooks/useWindowWidth";
import { getTeamsImagesByCharacter, publisherIMG } from "./../functions";
import { organizedComicsProperty } from "./../constants";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Separator } from "./ui/separator"

import {
    Accordion,
} from "@/components/ui/accordion"
import FeatureTabContainer from "./components/FeatureTabContainer";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { useState } from 'react'
import ImageZoomDialog from "./ImageZoomDialog";

type CharacterFeaturesProps = {
    selectedCharacter: Character;
}

function CharacterFeatures({ selectedCharacter }: CharacterFeaturesProps) {
    const windowWidth = useWindowWidth()

    const [isAnimating, setIsAnimating] = useState(true);
    const [currentImageToDisplay, setCurrentImageToDisplay] = useState<number>(0)

    const allImages: string[] = [
        ...Object.entries(organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher)).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    ]

    return (
        <Tabs
            defaultValue="Stats"
            className="w-full"
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger className='text-base-content' value="Stats">{windowWidth > 770 ? 'Stats' : '📊'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Appereance">{windowWidth > 770 ? 'Appereance' : '👀'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Biography">{windowWidth > 770 ? 'Biography' : '📜'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Teams">{windowWidth > 770 ? 'Teams' : '👪'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Comics">{windowWidth > 770 ? 'Comics' : '📕'}</TabsTrigger>
            </TabsList>

            <FeatureTabContainer
                valueTab="Stats"
                extraClassNames="md:max-h-[70vh] border-2"
            >
                <StatContainer>
                    <StatNumber
                        statName="Combat"
                        statValue={selectedCharacter.powerstats.combat}
                        icon="👊"
                    />
                    <Separator />
                    <StatNumber
                        statName="Durability"
                        statValue={selectedCharacter.powerstats.durability}
                        icon="❤"
                    />
                    <Separator />
                    <StatNumber
                        statName="Intelligence"
                        statValue={selectedCharacter.powerstats.intelligence}
                        icon="🧠"
                    />
                    <Separator />

                    <StatNumber
                        statName="Power"
                        statValue={selectedCharacter.powerstats.power}
                        icon="🔆"
                    />
                    <Separator />

                    <StatNumber
                        statName="Speed"
                        statValue={selectedCharacter.powerstats.speed}
                        icon="⚡"
                    />
                    <Separator />

                    <StatNumber
                        statName="Strength"
                        statValue={selectedCharacter.powerstats.strength}
                        icon="💪"
                    />
                    <Separator />
                </StatContainer>
            </FeatureTabContainer>

            <FeatureTabContainer
                valueTab="Appereance"
                extraClassNames="md:max-h-[70vh] border-2"
            >
                <StatContainer>
                    <StatString
                        statName="EyeColor"
                        statValue={selectedCharacter.appearance.eyeColor}
                        icon="👁"
                    />
                    <Separator />

                    <StatString
                        statName="Gender"
                        statValue={selectedCharacter.appearance.gender}
                        icon={
                            selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                "🚹"
                                :
                                selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                    "🚺"
                                    :
                                    ""
                        }
                        dataTest="gender-stat"
                    />
                    <Separator />

                    <StatString
                        statName="Hair color"
                        statValue={selectedCharacter.appearance.hairColor}
                        icon={
                            selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                "👱‍♂️"
                                :
                                selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                    "👱‍♀️"
                                    :
                                    "🙂"
                        }
                    />
                    <Separator />

                    <StatString
                        statName="Height"
                        statValue={`${selectedCharacter.appearance.height[0]} | ${selectedCharacter.appearance.height[1]}`}
                        icon="📏"
                    />
                    <Separator />

                    <StatString
                        statName="Race"
                        statValue={selectedCharacter.appearance.race ?? "Unknown"}
                        icon={
                            selectedCharacter.appearance.race?.toLowerCase().includes("meta") ?
                                "🧬"
                                :
                                selectedCharacter.appearance.race?.toLowerCase() === "human" ?
                                    "🌎"
                                    :
                                    selectedCharacter.appearance.race?.toLowerCase() === "mutant" ?
                                        "🧬"
                                        :
                                        selectedCharacter.appearance.race?.toLowerCase() === "android" || selectedCharacter.appearance.race?.toLowerCase() === "cyborg" && (selectedCharacter.appearance.race !== null) ?
                                            "🤖"
                                            :
                                            selectedCharacter.appearance.race?.toLowerCase() === "alien" || selectedCharacter.appearance.race?.toLowerCase() === "eternal" || selectedCharacter.appearance.race?.toLowerCase() === "asgardian" || selectedCharacter.appearance.race?.toLowerCase() === "kryptonian" && (selectedCharacter.appearance.race !== null) ?
                                                "👽"
                                                :
                                                "🌎"
                        }
                        dataTest="race-stat"
                    />
                    <Separator />

                    <StatString
                        statName="Weigth"
                        statValue={`${selectedCharacter.appearance.weight[0]} | ${selectedCharacter.appearance.weight[1]}`}
                        icon="⚖"
                    />
                    <Separator />

                </StatContainer>
            </FeatureTabContainer>

            <FeatureTabContainer
                valueTab="Biography"
                extraClassNames="md:max-h-[75vh] border-2 overflow-hidden"
            >
                <StatContainer>
                    <StatString
                        statName="Alignment"
                        statValue={selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}
                        icon={
                            selectedCharacter.biography.alignment === "good" ?
                                "😃"
                                :
                                selectedCharacter.biography.alignment === "bad" ?
                                    "😡"
                                    :
                                    "😐"
                        }
                        dataTest="aligment-stat"
                    />
                    <Separator />
                    <div className="flex flex-row justify-between items-center gap-5 my-5">
                        <div className="flex items-center gap-2">
                            <p className='text-2xl md:text-3xl'>📚</p>
                            {
                                windowWidth > 770
                                    ? <p>Publisher</p>
                                    : null
                            }
                        </div>
                        <div className="font-bold capitalize"><img className="h-10" src={publisherIMG(selectedCharacter.biography.publisher)} alt="publisher" /></div>
                    </div>
                    <Separator />
                    <Accordion type="single" collapsible className="w-full">
                        <StatAccordion
                            icon="📅"
                            title="First Appearance"
                            content={<p>{selectedCharacter.biography.firstAppearance}</p>}
                        />

                        <StatAccordion
                            icon="🗺"
                            title="Place Of Birth"
                            content={<p>{selectedCharacter.biography.placeOfBirth}</p>}
                        />

                        <StatAccordion
                            icon="🔠"
                            title="Aliases"
                            content={selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                return (
                                    <p key={`${currentAlias}-${index}`} >{currentAlias}</p>
                                )
                            }))}
                        />
                        <StatAccordion
                            icon="🆎"
                            title="Alter egos"
                            content={<p>{selectedCharacter.biography.alterEgos}</p>}
                        />
                        <StatAccordion
                            icon="👪"
                            title="Teams"
                            content={<p>{selectedCharacter.connections.groupAffiliation}</p>}
                            dataTest="teams-collapse"
                        />
                        <StatAccordion
                            icon="🧾"
                            title="Occupation"
                            content={<p>{selectedCharacter.work.occupation}</p>}
                        />
                    </Accordion>
                </StatContainer>
            </FeatureTabContainer>

            <FeatureTabContainer
                valueTab="Teams"
                extraClassNames="h-[51.5vh] md:h-[70vh] border-2 overflow-scroll"
            >
                <StatContainer>
                    {
                        getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                            <TooltipProvider>
                                <div className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5">
                                    {
                                        getTeamsImagesByCharacter(selectedCharacter).map((teamFound) => {
                                            return (
                                                <div key={teamFound?.name} className="tooltip mt-5 mx-auto w-[70%]" data-tip={teamFound?.name}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <img className="hover:pointer-events-none active:pointer-events-none" src={teamFound?.img} alt={teamFound?.name} />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{teamFound?.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TooltipProvider>
                            :
                            <div className="text-xl font-bold text-center my-5">No teams</div>
                    }
                </StatContainer>
            </FeatureTabContainer>

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
                                        selectedCharacter={selectedCharacter}
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
        </Tabs>
    )
}

export default CharacterFeatures