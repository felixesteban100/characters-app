import FeatureTabContainer from "./components/FeatureTabContainer"
import StatContainer from "./components/StatContainer"
import StatNumber from "./components/StatNumber"
import { Separator } from "./ui/separator"
import { Character } from "@/types"

type FeatureTabStatsProps = {
    selectedCharacter: Character
}

function FeatureTabStats({ selectedCharacter }: FeatureTabStatsProps) {
    return (
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
    )
}

export default FeatureTabStats