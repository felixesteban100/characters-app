import useWindowWidth from "./../hooks/useWindowWidth";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeatureTabStats from "./FeatureTabStats";
import FeatureTabAppereance from "./FeatureTabAppereance";
import FeatureTabBiography from "./FeatureTabBiography";
import FeatureTabTeams from "./FeatureTabTeams";
import FeatureTabComics from "./FeatureTabComics";


type CharacterFeaturesProps = {}

function CharacterFeatures({ }: CharacterFeaturesProps) {
    const windowWidth = useWindowWidth()

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
            <FeatureTabStats />
            <FeatureTabAppereance />
            <FeatureTabBiography />
            <FeatureTabTeams />
            <FeatureTabComics />
        </Tabs>
    )
}

export default CharacterFeatures