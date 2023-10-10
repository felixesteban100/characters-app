import { useEffect, useState } from 'react'
import Characters from "./components/Characters"
import Header from './components/Header';
import ChangeCharacters from './components/ChangeCharacters';
import { Character } from './types';
import { characterEmpty, listOfTeamsWithImgInTheHeroSection, teamIMG } from './constants';
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

function App() {
  const { toast } = useToast()

  const [searchParams, setSearchParams] = useSearchParams(
    JSON.parse(
      localStorage.getItem("CHARACTERS_APP_SEARCHPARAMS")
      ??
      JSON.stringify({
        viewFavorites: 'false',
        characterName: "",
        howMany: "8",
        asHowManyAsPossible: "false",
        side: "All",
        universe: "All",
        team: "All",
        gender: "All",
        race: "All",
        includeNameOrExactName: "true",
        characterOrFullName: "false",
        charactersFilteredIds: [620, 70, 846]
      }
      )
    )
  )

  const objectParams = {
    viewFavorites: searchParams.get("viewFavorites") === "" ? true : searchParams.get("viewFavorites") === "true",
    characterName: searchParams.get("characterName") ?? "",
    howMany: parseInt(searchParams.get("howMany") ?? "2"),
    asHowManyAsPossible: searchParams.get("asHowManyAsPossible") === "true",
    side: searchParams.get("side") ?? "All",
    universe: searchParams.get("universe") ?? "All",
    team: searchParams.get("team") ?? "All",
    gender: searchParams.get("gender") ?? "All",
    race: searchParams.get("race") ?? "All",
    includeNameOrExactName: searchParams.get("includeNameOrExactName") === "true",
    characterOrFullName: searchParams.get("characterOrFullName") === "true",
    charactersFilteredIds: searchParams.get("charactersFilteredIds") ?? JSON.stringify([620, 70, 846])
  }

  const { viewFavorites, characterName, howMany, asHowManyAsPossible, side, universe, team, gender, race, includeNameOrExactName, characterOrFullName, charactersFilteredIds } = objectParams

  useEffect(() => localStorage.setItem("CHARACTERS_APP_SEARCHPARAMS", JSON.stringify(objectParams)), [searchParams]);
  useEffect(() => {
    if (viewFavorites) {
      toast({ title: "Favorites 🌟", description: "Your favorites characters ", })
    }
  }, [viewFavorites]);

  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characterEmpty)
  const [searchDifferentCharacters, setSearchDifferentCharacters] = useState(false)
  const [heroSection, setHeroSection] = useLocalStorage("CHARACTERS_APP_HEROSECTION", { imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"], title: "", description: "" })
  const [favorites, setFavorites] = useLocalStorage<Character[] | []>("CHARACTERS_APP_FAVORITES", [])

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
      }
      setHeroSection({ imgs: teamIMG(team), title: team, description: team })
      if (howMany === 691) {
        setSearchParams((prev) => {
          prev.set('howMany', data.length.toString())
          return prev
        }, { replace: true })
      }
      if (data.length > 0) {
        toast({ title: "Success ✅", description: "😃 Characters founded", })
      } else {
        toast({ title: "Success ❔", description: "😐 No Characters founded", })
      }
    },
    onSettled: () => {
      setSearchDifferentCharacters(false)
    },
    onError: (error) => {
      console.log(error)
      toast({ title: "Error ❗", description: `😥 Characters not founded ${error}`, })
    },
  })

  useKeyPress('Enter', () => { setViewFavorites(false); refetchCharacters() });
  useKeyPress('z', () => setViewFavorites(!viewFavorites));
  useKeyPress('r', () => {
    resetCharactersSelection(setSearchParams, setHeroSection);
    setViewFavorites(false);
    // setTimeout(() => refetchCharacters(), 500) 
  });

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

              <div>
                {
                  isLoading || isFetching ?
                    <LoadingCharacters howMany={asHowManyAsPossible ? 621 : howMany} />
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
                        >
                          <Characters
                            charactersFiltered={viewFavorites ? favorites : charactersFiltered}
                            viewFavorites={viewFavorites}
                            setSelectedCharacter={setSelectedCharacter}
                          />
                        </DialogCharacters>
                      </>
                }
              </div>
              <br />
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App