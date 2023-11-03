import { windowWidth } from "../flow/windowWidth";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeatureTabStats from "./FeatureTabStats";
import FeatureTabAppereance from "./FeatureTabAppereance";
import FeatureTabBiography from "./FeatureTabBiography";
import FeatureTabTeams from "./FeatureTabTeams";
import FeatureTabComics from "./FeatureTabComics";
import { selectedCharacter } from "@/flow/selectedCharacter";
import { Signal, effect, signal } from "@preact/signals-react";


type CharacterFeaturesProps = {}

const tabSelected: Signal<string> = signal(getTabSelected())

function getTabSelected(): string{
    const value = localStorage.getItem("CHARACTERS_APP_TABSELECTED");
    if (value == null) return "Stats";
    return JSON.parse(value);
}

function setTabSelected(newValue: string){
    tabSelected.value = newValue
}

effect(() => {
    localStorage.setItem(
        "CHARACTERS_APP_TABSELECTED",
        JSON.stringify(tabSelected.value)
    );
});

function CharacterFeatures({ }: CharacterFeaturesProps) {
    return (
        <Tabs
            defaultValue={tabSelected.value}
            className="w-full"
        >
            <TabsList className={`grid w-full grid-cols-5 bg-accent`}>
                <TabsTrigger onClick={() => setTabSelected("Stats")} className='text-base-content' value="Stats">{windowWidth.value > 770 ? 'Stats' : '📊'}</TabsTrigger>
                <TabsTrigger onClick={() => setTabSelected("Appereance")} className='text-base-content' value="Appereance">{windowWidth.value > 770 ? 'Appereance' : '👀'}</TabsTrigger>
                <TabsTrigger onClick={() => setTabSelected("Biography")} className='text-base-content' value="Biography">{windowWidth.value > 770 ? 'Biography' : '📜'}</TabsTrigger>
                <TabsTrigger onClick={() => setTabSelected("Teams")} className='text-base-content' value="Teams">{windowWidth.value > 770 ? 'Teams' : '👪'}</TabsTrigger>
                <TabsTrigger onClick={() => setTabSelected("Comics")} className='text-base-content' value="Comics">{windowWidth.value > 770 ? 'Comics' : '📕'}</TabsTrigger>
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