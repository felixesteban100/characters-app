import { SetURLSearchParams } from "react-router-dom";
import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../constants";
import { resetCharactersSelection } from "../functions";
import ButtonChangeCharacter from "./components/ButtonChangeCharacter";
import SelectInput from "./components/SelectInput";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "./ui/button";

import SwitchWithIcon from "./components/SwitchWithIcon";
// import { Textarea } from "./ui/textarea";

// import { Eraser } from "lucide-react";
import useWindowWidth from "@/hooks/useWindowWidth";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type ChangeCharactersProps = {
    characterName: string;
    howMany: number
    asHowManyAsPossible: boolean
    side: string
    universe: string;
    team: string;
    gender: string;
    race: string;
    includeNameOrExactName: boolean;
    characterOrFullName: boolean,
    refetchCharacters: () => void
    setHeroSection: React.Dispatch<React.SetStateAction<{ imgs: string[]; title: string; description: string; }>>
    isLoading: boolean;
    isFetching: boolean;
    setSearchDifferentCharacters: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchParams: SetURLSearchParams;
    viewFavorites: boolean
}

function ModalChangeCharacters({ characterName, howMany, asHowManyAsPossible, gender, side, universe, team, race, includeNameOrExactName, characterOrFullName, refetchCharacters, setHeroSection, isLoading, isFetching, setSearchDifferentCharacters, setSearchParams, viewFavorites }: ChangeCharactersProps) {
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(universe)
    const windowWidth = useWindowWidth()

    return (
        <div className="min-h-fit">
            <div className="flex justify-center items-center gap-5 mb-5">
                <SwitchWithIcon
                    valueChecked={includeNameOrExactName}
                    id="exactorinclude"
                    onCheckedChangeFunc={() => setSearchParams((prev) => {
                        prev.set('includeNameOrExactName', (!includeNameOrExactName).toString())
                        return prev
                    }, { replace: true })}
                    firstIcon="🔄"
                    secondIcon="🎯"
                    firstText="Include written character's name"
                    secondText="Exact written character's name"
                />

                <SwitchWithIcon
                    valueChecked={characterOrFullName}
                    id="fullOrCharacterName"
                    onCheckedChangeFunc={() => setSearchParams((prev) => {
                        prev.set('characterOrFullName', (!characterOrFullName).toString())
                        return prev
                    }, { replace: true })}
                    firstIcon="😀"
                    secondIcon="🦸‍♂️"
                    firstText="Character civil name"
                    secondText="Character hero/villain name"
                />
            </div>

            <div className="grid grid-cols-6 items-center gap-4">
                <div className="col-span-6 flex flex-col w-full justify-center gap-1.5">
                    {/* <Label htmlFor="name" className="text-left">Name/s</Label> */}
                    <Input
                        // id="name"
                        type="search"
                        value={characterName === null ? "" : characterName}
                        //border-muted-foreground
                        className="col-span-5 overflow-y-auto "
                        onChange={(event) => setSearchParams((prev) => {
                            prev.set('characterName', event.target.value)
                            return prev
                        }, { replace: true })}
                        placeholder={characterOrFullName === false ? "Batman / Batman, Spider-Man..." : "Bruce Wayne, Peter Parker..."}
                    />
                </div>
                {/* <Button
                    variant={'outline'}
                    onClick={() => setSearchParams((prev) => {
                        prev.set('characterName', "")
                        return prev
                    }, { replace: true })}
                    size="icon"
                // className="border-muted-foreground"
                >
                    <Eraser className="h-[1.2rem] w-[1.2rem]" />
                </Button> */}
            </div>

            <div className="w-full">
                <div className="grid grid-cols-5 items-center gap-2 mx-auto py-5">
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            if (howMany - 1 >= 1) {
                                setSearchParams((prev) => {
                                    prev.set('howMany', (howMany - 1).toString())
                                    return prev
                                }, { replace: true })
                            }
                        }}
                        disabled={asHowManyAsPossible}
                    // className="border-muted-foreground"
                    >
                        {`-`}
                    </Button>
                    <Input
                        type={asHowManyAsPossible ? 'string' : 'number'}
                        id="howMany"
                        value={asHowManyAsPossible ? 'All' : howMany}
                        //border-muted-foreground
                        className="col-span-3 text-center "
                        min={1}
                        max={710}
                        onChange={(event) => {
                            if (parseInt(event.target.value) > 0 && parseInt(event.target.value) < 710) {
                                setSearchParams((prev) => {
                                    prev.set('howMany', event.target.value.toString())
                                    return prev
                                }, { replace: true })
                            } else {
                                setSearchParams((prev) => {
                                    prev.set('howMany', (1).toString())
                                    return prev
                                }, { replace: true })
                            }
                        }}
                        disabled={asHowManyAsPossible}
                    />
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            if (howMany + 1 <= 710) {
                                setSearchParams((prev) => {
                                    prev.set('howMany', (howMany + 1).toString())
                                    return prev
                                }, { replace: true })
                            }
                        }}
                        disabled={asHowManyAsPossible}
                    // className="border-muted-foreground"
                    >
                        {`+`}
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <Checkbox
                        checked={asHowManyAsPossible}
                        id="ashowmanyaspossible"
                        onCheckedChange={() => setSearchParams((prev) => {
                            prev.set('asHowManyAsPossible', (!asHowManyAsPossible).toString())
                            return prev
                        }, { replace: true })}
                    />
                    <Label htmlFor="ashowmanyaspossible">As how many characters as possible</Label>
                </div>
            </div>

            <SelectInput
                dataTest={'select-Gender'}
                value={gender}
                options={ALLGENDERS}
                onChangeFunction={(valueS) => setSearchParams((prev) => {
                    console.log(valueS)
                    prev.set('gender', valueS)
                    return prev
                }, { replace: true })}
                forWhat={'gender'}
            />

            <SelectInput
                dataTest={'select-Race'}
                value={race}
                options={ALLRACES}
                onChangeFunction={(valueS) => setSearchParams((prev) => {
                    prev.set('race', valueS)
                    return prev
                }, { replace: true })}
                forWhat={'characters race'}
            />

            <SelectInput
                dataTest={'select-Aligment'}
                value={side}
                options={ALLALIGMENTS}
                onChangeFunction={(valueS) => setSearchParams((prev) => {
                    prev.set('side', valueS)
                    return prev
                }, { replace: true })}
                forWhat={'character alignment'}
            />

            <SelectInput
                dataTest={'select-Universe'}
                value={universe}
                options={ALLUNIVERSE}
                onChangeFunction={(valueS) => {
                    setSearchParams((prev) => {
                        prev.set('universe', valueS)
                        prev.set('team', 'All')
                        return prev
                    }, { replace: true })
                }}
                forWhat={'characters universe'}
            />

            {
                universe !== 'All' ?
                    <SelectInput
                        dataTest={'select-Team'}
                        value={team}
                        options={[
                            { value: "All", name: "All teams" },
                            ...teamByUniverse.map((current) => {
                                return {
                                    value: current.value,
                                    name: current.name,
                                }
                            })
                        ]}
                        onChangeFunction={(valueS) => setSearchParams((prev) => {
                            prev.set('team', valueS)
                            return prev
                        }, { replace: true })}
                        forWhat={'the team'}
                    />
                    :
                    null
            }

            <div className="flex flex-col gap-5 justify-around mt-5">
                <ButtonChangeCharacter
                    dataTest="btn-FindFilters"
                    classNameSended="btn-success"
                    functionSended={() => {
                        setSearchDifferentCharacters(true)
                        setTimeout(() => refetchCharacters())
                        setSearchParams((prev) => {
                            prev.set('viewFavorites', (false).toString())
                            return prev
                        }, { replace: true })
                    }}
                    forWhat="Find by filters 🔍"
                    loadingOrFetching={isLoading || isFetching}
                    variantS={'default'}
                />

                <ButtonChangeCharacter
                    dataTest="btn-Favorites"
                    classNameSended="btn-warning"
                    functionSended={() => {
                        setSearchParams((prev) => {
                            prev.set('viewFavorites', (!viewFavorites).toString())
                            return prev
                        }, { replace: true })
                    }}
                    forWhat="Favorites ⭐"
                    variantS={'warning'}
                />

                <ButtonChangeCharacter
                    dataTest="btn-Reset"
                    classNameSended="btn-danger"
                    functionSended={() => {
                        resetCharactersSelection(setSearchParams, setHeroSection)
                        setSearchParams((prev) => {
                            prev.set('viewFavorites', (false).toString())
                            return prev
                        }, { replace: true })
                        setSearchDifferentCharacters(true)
                        setTimeout(() => refetchCharacters())
                    }}
                    forWhat="Reset filters 🔁"
                    variantS={'secondary'}
                />

                {
                    windowWidth > 770 ?
                        <div className="flex flex-col gap-2">
                            <p className="text-xl font-bold">Shortcuts</p>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center gap-2">
                                            <p>Press</p>
                                            <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">Enter</kbd>
                                            <p>to Search 🔍</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center gap-2">
                                            <p>Press</p>
                                            <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">Ctrl</kbd>
                                            <p>+</p>
                                            <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">z</kbd>
                                            <p>to Favorites ⭐</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center gap-2">
                                            <p>Press</p>
                                            <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">Ctrl</kbd>
                                            <p>+</p>
                                            <kbd className="bg-primary text-primary-foreground p-1 rounded-md shadow-sm shadow-accent">r</kbd>
                                            <p>to Reset 🔁</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        :
                        null
                }
            </div>


        </div>
    )
}

export default ModalChangeCharacters