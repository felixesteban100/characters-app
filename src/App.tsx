import { useEffect, useState } from 'react'
import Characters from "./components/Characters"
import Header from './components/Header';
import ChangeCharacters from './components/ChangeCharacters';
import { Character } from './types';
import { DEFAULT_HERO_SECTION, DEFAULT_SEARCHPARAMS, batmanandSpider_manObj, getSearchParamsFormatted, listOfTeamsWithImgInTheHeroSection, teamIMG } from './constants';
import { useQuery } from 'react-query';
import axios from "axios"
import LoadingCharacters from './components/LoadingCharacters';
import SectionCharacters from './components/SectionCharacters';
import useKeyPress from './hooks/useKeyPress';
import { resetCharactersSelection } from './functions';
import useLocalStorage from './hooks/useLocalStorage';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import SliderSection from './components/SliderSection';
import { useToast } from "@/components/ui/use-toast"
import DialogCharacters from './components/DialogCharacters';
import notificationSound from './assets/notificationSound.mp3'

function App() {
  const { toast } = useToast()

  const [searchParams, setSearchParams] = useSearchParams(JSON.parse( localStorage.getItem("CHARACTERS_APP_SEARCHPARAMS") ?? JSON.stringify(DEFAULT_SEARCHPARAMS)))

  const { viewFavorites, characterName, howMany, asHowManyAsPossible, side, universe, team, gender, race, includeNameOrExactName, characterOrFullName, charactersFilteredIds, selectedCharacterId, isDialogOpen } = getSearchParamsFormatted(searchParams)

  useEffect(() => localStorage.setItem("CHARACTERS_APP_SEARCHPARAMS", JSON.stringify(getSearchParamsFormatted(searchParams))), [searchParams]);
  useEffect(() => {
    if (viewFavorites) toast({ title: "Favorites 🌟", description: "Your favorites characters ", })
  }, [viewFavorites]);

  const { isLoading, isError, data: charactersFiltered, refetch: refetchCharacters, isFetching } = useQuery<Character[]>({
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: ["Characters"],
    queryFn: async () => {
      if (charactersFilteredIds.length > 0 && searchDifferentCharacters === false) {
        return await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/charactersids?ids="${charactersFilteredIds}"`).then((response) => response.data)
        // return await axios.get<Character[]>(`http://localhost:5000/api/v1/characters/charactersids?ids=${charactersFilteredIds}`).then((response) => response.data)
      }
      return await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/filter?characterName=${characterName}&howMany=${asHowManyAsPossible ? 0 : howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)
      // return await axios.get<Character[]>(`http://localhost:5000/api/v1/characters/filter?characterName=${characterName}&howMany=${asHowManyAsPossible ? 0 : howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)
    },
    onSuccess(data) {
      if (data.length > 0) {
        setSearchParams((prev) => {
          prev.set('charactersFilteredIds', JSON.stringify(data.map(c => c.id)))
          return prev
        }, { replace: true })
        const characterForDialog = data.find((c) => c.id === selectedCharacterId)
        if (characterForDialog !== undefined) setSelectedCharacter(characterForDialog)
        toast({ title: "Success ✅", description: "😃 Characters founded", })
      } else {
        toast({ title: "Success ❔", description: "😐 No Characters founded", })
      }
      setHeroSection({ imgs: teamIMG(team), title: team, description: team })
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

  const [selectedCharacter, setSelectedCharacter] = useState<Character>(batmanandSpider_manObj[0])
  const [searchDifferentCharacters, setSearchDifferentCharacters] = useState(false)
  const [heroSection, setHeroSection] = useLocalStorage("CHARACTERS_APP_HEROSECTION", DEFAULT_HERO_SECTION)
  const [favorites, setFavorites] = useLocalStorage<Character[] | []>("CHARACTERS_APP_FAVORITES", [])

  useKeyPress('Enter', () => { setViewFavorites(false); refetchCharacters() });
  useKeyPress('z', () => setViewFavorites(!viewFavorites));
  useKeyPress('r', () => { resetCharactersSelection(setSearchParams, setHeroSection); setViewFavorites(false); });


  function setViewFavorites(f: boolean) {
    setSearchParams((prev) => {
      prev.set('viewFavorites', f.toString())
      return prev
    }, { replace: true })
  }

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header>
                <ChangeCharacters
                  characterName={characterName}
                  howMany={howMany}
                  asHowManyAsPossible={asHowManyAsPossible}
                  side={side}
                  universe={universe}
                  team={team}
                  gender={gender}
                  race={race}
                  includeNameOrExactName={includeNameOrExactName}
                  characterOrFullName={characterOrFullName}
                  refetchCharacters={refetchCharacters}
                  setHeroSection={setHeroSection}
                  isLoading={isLoading}
                  isFetching={isFetching}
                  setSearchDifferentCharacters={setSearchDifferentCharacters}
                  setSearchParams={setSearchParams}
                  viewFavorites={viewFavorites}
                />
              </Header>

              <SliderSection
                selectedOne={`${team !== "All" ? universe : team} ${(!listOfTeamsWithImgInTheHeroSection.includes(team) && team !== "All") ? "WithOutImage" : ""}`}
                heroSection={heroSection}
              />

              <div className=''>
                {
                  isLoading || isFetching ?
                    <LoadingCharacters howMany={asHowManyAsPossible ? 710 : howMany} />
                    :
                    isError || charactersFiltered === undefined ?
                      <SectionCharacters>
                        <p>Sorry</p>
                        <p>😢 Opps... something happend. Please try again. </p>
                      </SectionCharacters>
                      :
                      <>
                        <DialogCharacters
                          setFavorites={setFavorites}
                          favorites={favorites}
                          selectedCharacter={selectedCharacter}
                          isDialogOpen={isDialogOpen}
                          setIsDialogOpen={() => {
                            setSearchParams((prev) => {
                              prev.set("isDialogOpen", (!isDialogOpen).toString())
                              return prev
                            })
                          }}
                        >
                          <Characters
                            charactersFiltered={viewFavorites ? favorites : charactersFiltered}
                            viewFavorites={viewFavorites}
                            setSelectedCharacter={setSelectedCharacter}
                            setSelectedCharacterId={(idSelected: number) => {
                              setSearchParams((prev) => {
                                prev.set('selectedCharacterId', idSelected.toString())
                                return prev
                              })
                            }}
                          />
                        </DialogCharacters>
                      </>
                }
              </div>
              <br />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App