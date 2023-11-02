import { windowWidth } from "../flow/windowWidth";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeatureTabStats from "./FeatureTabStats";
import FeatureTabAppereance from "./FeatureTabAppereance";
import FeatureTabBiography from "./FeatureTabBiography";
import FeatureTabTeams from "./FeatureTabTeams";
import FeatureTabComics from "./FeatureTabComics";
import { selectedCharacter } from "@/flow/selectedCharacter";


type CharacterFeaturesProps = {}

function CharacterFeatures({ }: CharacterFeaturesProps) {
    return (
        <Tabs
            defaultValue="Stats"
            className="w-full"
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger className='text-base-content' value="Stats">{windowWidth.value > 770 ? 'Stats' : '📊'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Appereance">{windowWidth.value > 770 ? 'Appereance' : '👀'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Biography">{windowWidth.value > 770 ? 'Biography' : '📜'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Teams">{windowWidth.value > 770 ? 'Teams' : '👪'}</TabsTrigger>
                <TabsTrigger className='text-base-content' value="Comics">{windowWidth.value > 770 ? 'Comics' : '📕'}</TabsTrigger>
            </TabsList>
            <FeatureTabStats selectedCharacter={selectedCharacter.value}/>
            <FeatureTabAppereance selectedCharacter={selectedCharacter.value}/>
            <FeatureTabBiography selectedCharacter={selectedCharacter.value}/>
            <FeatureTabTeams selectedCharacter={selectedCharacter.value}/>
            <FeatureTabComics selectedCharacter={selectedCharacter.value} />
        </Tabs>
    )
}

export default CharacterFeatures