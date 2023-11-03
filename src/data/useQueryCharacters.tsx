import { REACT_QUERY_DEFAULT_PROPERTIES, teamIMG } from '../constants'
import { useQuery } from 'react-query';
import axios from "axios"
import { Character } from '@/types'
import { useSearchParamsForTheApp } from '../hooks/useSearchParamsForTheApp';
import notificationSound from '../assets/notificationSound.mp3'
import { useToast } from "@/components/ui/use-toast"
import { setHeroSection } from "../flow/heroSection"
import { setSelectedCharacter } from "@/flow/selectedCharacter"
import { searchDifferentCharacters, setSearchDifferentCharacters } from '@/flow/searchDifferentCharacters';
import { Signal, signal } from '@preact/signals-react';

export const charactersSignal: Signal<Character[]> = signal([])

function useQueryCharacters() {
    const { toast } = useToast()

    const { asHowManyAsPossible, characterName, characterOrFullName, charactersFilteredIds, gender, howMany, includeNameOrExactName, race, selectedCharacterId, side, team, universe, setSearchParams } = useSearchParamsForTheApp()

    const { isLoading, isError, /* data: charactersFiltered, */ refetch: refetchCharacters, isFetching } = useQuery<Character[]>({
        ...REACT_QUERY_DEFAULT_PROPERTIES,
        queryKey: ["Characters"],
        queryFn: async () => {
            if (charactersFilteredIds.length > 0 && searchDifferentCharacters.value === false) {
                return await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/charactersids?ids="${charactersFilteredIds}"`).then((response) => response.data)
                // return await axios.get<Character[]>(`http://localhost:5000/api/v1/characters/charactersids?ids=${charactersFilteredIds}`).then((response) => response.data)
            }
            return await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/filter?characterName=${characterName}&howMany=${asHowManyAsPossible ? 0 : howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)
            // return await axios.get<Character[]>(`http://localhost:5000/api/v1/characters/filter?characterName=${characterName}&howMany=${asHowManyAsPossible ? 0 : howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)
        },
        onSuccess(data) {
            if (data.length > 0) {
                charactersSignal.value = data
                setSearchParams((prev) => {
                    prev.set('charactersFilteredIds', JSON.stringify(data.map(c => c.id)))
                    return prev
                }, { replace: true })
                const characterForDialog = data.find((c) => c.id === selectedCharacterId)
                if (characterForDialog !== undefined) setSelectedCharacter(characterForDialog)
                toast({ title: "Success ✅", description: "😃 Characters founded" })
            } else {
                toast({ title: "Success ❔", description: "😐 No Characters founded" })
            }
            setHeroSection({imgs: teamIMG(team).slice().sort(() => Math.random() - 0.5), title: team, description: team})
            if (howMany === 710) {
                setSearchParams((prev) => {
                    prev.set('howMany', data.length.toString())
                    return prev
                }, { replace: true })
            }
        },
        onSettled: () => {
            setSearchDifferentCharacters(false)
            new Audio(notificationSound).play()
        },
        onError: (error) => {
            console.log(error)
            toast({ title: "Error ❗", description: `😥 Characters not founded ${error}`, })
        },
    })

    return { isLoading, isError, refetchCharacters, isFetching, setSearchDifferentCharacters }
}

export default useQueryCharacters