import FeatureTabContainer from "./components/FeatureTabContainer"
import StatContainer from "./components/StatContainer"
import { Separator } from "./ui/separator"
import StatString from "./components/StatString"
import { Character } from "@/types"

type FeatureTabAppereanceProps = {
    selectedCharacter: Character
}

function FeatureTabAppereance({ selectedCharacter }: FeatureTabAppereanceProps) {

    return (
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
    )
}

export default FeatureTabAppereance