import { useEffect, useState } from 'react'
import Characters from "./components/Characters"
import Header from './components/Header';
import ChangeCharacters from './components/ChangeCharacters';
import LoadingCharacters from './components/LoadingCharacters';
import SectionCharacters from './components/SectionCharacters';
import useKeyPress from './hooks/useKeyPress';
import { resetCharactersSelection } from './functions';
import useLocalStorage from './hooks/useLocalStorage';
import { Route, Routes } from 'react-router-dom';
import SliderSection from './components/SliderSection';
import DialogCharacters from './components/DialogCharacters';
import CharactersNoPagination from './components/CharactersNoPagination';
import favoriteSound from './assets/favoriteSound.mp3'
import { useToast } from "@/components/ui/use-toast"
import { useSearchParamsForTheApp } from './hooks/useSearchParamsForTheApp';
import useQueryCharacters from './api/useQueryCharacters';
import { useHeroSection } from './state/heroSection';
import { useFavorites } from './state/favorites';

function App() {
  const { toast, dismiss } = useToast()

  const [initialRender, setInitialRender] = useState(true);

  const { asHowManyAsPossible, howMany, viewFavorites, setSearchParams } = useSearchParamsForTheApp()

  const { charactersFiltered, refetchCharacters, isLoading, isFetching, isError, setSearchDifferentCharacters } = useQueryCharacters()
  const { changeHeroSection } = useHeroSection()

  const { favorites } = useFavorites()

  const [withPagination, setWithPagination] = useLocalStorage<boolean>("CHARACTERS_APP_WITHPAGINATION", false)
  const [howManyRows, setHowManyRows] = useLocalStorage("CHARACTERS_APP_HOWMANYROWS", 1)

  useKeyPress('Enter', () => { setViewFavorites(false); setSearchDifferentCharacters(true); setTimeout(() => refetchCharacters()); });
  useKeyPress('z', () => setViewFavorites(!viewFavorites));
  useKeyPress('r', () => { resetCharactersSelection(setSearchParams, changeHeroSection); setViewFavorites(false); });

  useEffect(() => {
    if (viewFavorites === true) {
      toast({ title: "Favorites 🌟", description: "Your favorites characters ", })
      new Audio(favoriteSound).play()
    }
    if (viewFavorites === false) {
      dismiss()
      new Audio(favoriteSound).pause()
    }
  }, [viewFavorites])

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
              <Header
                setWithPagination={setWithPagination}
                withPagination={withPagination}
                howManyRows={howManyRows}
                setHowManyRows={setHowManyRows}
              >
                <ChangeCharacters />
              </Header>

              <SliderSection/>
              <>
                {
                  isLoading || isFetching ?
                    <LoadingCharacters howManyRows={howManyRows} withPagination={withPagination} howMany={asHowManyAsPossible ? 710 : howMany} />
                    :
                    isError || charactersFiltered === undefined ?
                      <SectionCharacters>
                        <p>Sorry</p>
                        <p>😢 Opps... something happend. Please try again. </p>
                      </SectionCharacters>
                      :
                      <>
                        <DialogCharacters>
                          {
                            withPagination ?
                              <Characters
                                charactersFiltered={viewFavorites ? favorites : charactersFiltered}
                                viewFavorites={viewFavorites}
                                initialRender={initialRender}
                                setInitialRender={setInitialRender}
                                howManyRows={howManyRows}
                              />
                              :
                              <CharactersNoPagination
                                charactersFiltered={viewFavorites ? favorites : charactersFiltered}
                                viewFavorites={viewFavorites}
                              />
                          }
                        </DialogCharacters>
                      </>
                }
              </>
              <br />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App