import FeatureTabContainer from "./components/FeatureTabContainer"
import StatContainer from "./components/StatContainer"
import { getTeamsImagesByCharacter } from "@/functions"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useSearchParamsForTheApp } from "@/hooks/useSearchParamsForTheApp"
import useQueryCharacters from "@/data/useQueryCharacters"
import { DialogClose } from "./ui/dialog"
import { Character } from "@/types"

type FeatureTabTeamsProps = {
    selectedCharacter: Character
}

function FeatureTabTeams({ selectedCharacter }: FeatureTabTeamsProps) {
    const { setSearchParams } = useSearchParamsForTheApp()
    const { refetchCharacters, setSearchDifferentCharacters } = useQueryCharacters()

    return (
        <div>
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
                                                <div
                                                    key={teamFound.name}
                                                    className="tooltip mt-5 mx-auto w-[70%]"
                                                    data-tip={teamFound.name}
                                                    onClick={() => {
                                                        setSearchParams((prev) => {
                                                            prev.set("asHowManyAsPossible", "true")
                                                            prev.set("universe", selectedCharacter.biography.publisher)
                                                            prev.set("team", teamFound.name)
                                                            prev.set("viewFavorites", "false");
                                                            prev.set("characterName", "");
                                                            prev.set("side", "All");
                                                            prev.set("gender", "All");
                                                            prev.set("race", "All");
                                                            prev.set("includeNameOrExactName", "true");
                                                            prev.set("characterOrFullName", "false");
                                                            return prev
                                                        })

                                                        setSearchDifferentCharacters(true)
                                                        setTimeout(() => refetchCharacters())
                                                    }}
                                                >
                                                    <DialogClose>
                                                        <Tooltip>
                                                            <TooltipTrigger asChild>
                                                                <img className="hover:pointer-events-none active:pointer-events-none" src={teamFound?.img} alt={teamFound?.name} />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>{teamFound?.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </DialogClose>
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

        </div>
    )
}

export default FeatureTabTeams