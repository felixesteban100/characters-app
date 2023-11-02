import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../constants";
import { resetCharactersSelection } from "../functions";
import ButtonChangeCharacter from "./components/ButtonChangeCharacter";
import SelectInput from "./components/SelectInput";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "./ui/button";
import SwitchWithIcon from "./components/SwitchWithIcon";
import { useSearchParamsForTheApp } from "@/hooks/useSearchParamsForTheApp";
import { setSearchDifferentCharacters } from "@/flow/searchDifferentCharacters";
import useQueryCharacters from "@/data/useQueryCharacters";
import { setHeroSection } from "../flow/heroSection";
import { setViewFavorites, viewFavorites } from "@/flow/viewFavorites";

type ChangeCharactersProps = {}

function ModalChangeCharacters({ }: ChangeCharactersProps) {
    const { asHowManyAsPossible, characterName, characterOrFullName, gender, howMany, includeNameOrExactName, race, side, team, universe, setSearchParams } = useSearchParamsForTheApp()

    const { isLoading, isFetching, refetchCharacters } = useQueryCharacters()

    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(universe)

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
                    <Input
                        type="search"
                        value={characterName === null ? "" : characterName}
                        className="col-span-5 overflow-y-auto "
                        onChange={(event) => setSearchParams((prev) => {
                            prev.set('characterName', event.target.value)
                            return prev
                        }, { replace: true })}
                        placeholder={characterOrFullName === false ? "Batman / Batman, Spider-Man..." : "Bruce Wayne, Peter Parker..."}
                    />
                </div>
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
                    >
                        {`-`}
                    </Button>
                    <Input
                        type={asHowManyAsPossible ? 'string' : 'number'}
                        id="howMany"
                        value={asHowManyAsPossible ? 'All' : howMany}
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
                        setViewFavorites(!viewFavorites.value)
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
                    }}
                    forWhat="Reset filters 🔁"
                    variantS={'secondary'}
                />
            </div>
        </div>
    )
}

export default ModalChangeCharacters