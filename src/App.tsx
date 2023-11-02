import Characters, { setPageActive } from "./components/Characters"
import Header from './components/Header';
import ChangeCharacters from './components/ChangeCharacters';
import LoadingCharacters from './components/LoadingCharacters';
import SectionCharacters from './components/SectionCharacters';
import useKeyPress from './hooks/useKeyPress';
import { resetCharactersSelection } from './functions';
import { Route, Routes } from 'react-router-dom';
import SliderSection from './components/SliderSection';
import DialogCharacters from './components/DialogCharacters';
import CharactersNoPagination from './components/CharactersNoPagination';
import { useSearchParamsForTheApp } from './hooks/useSearchParamsForTheApp';
import useQueryCharacters, { charactersSignal } from './data/useQueryCharacters';
import { setHeroSection } from './flow/heroSection';
import { favorites } from './flow/favorites'
import { viewFavorites, setViewFavorites } from './flow/viewFavorites'
import { selectedCharacter } from './flow/selectedCharacter';
import { withPagination, setWithPagination } from './flow/withPagination';
import { howManyRows, setHowManyRows } from './flow/howManyRows';

function App() {
  const { asHowManyAsPossible, howMany, setSearchParams } = useSearchParamsForTheApp()

  const { refetchCharacters, isLoading, isFetching, isError, setSearchDifferentCharacters } = useQueryCharacters()

  useKeyPress('Enter', () => {
    if (viewFavorites.value === true) {
      setViewFavorites(false);
      setSearchDifferentCharacters(true);
      setTimeout(() => {
        if (viewFavorites.value === false) refetchCharacters()
      });
    }
  });
  useKeyPress('z', () => {
    setPageActive(1)
    setViewFavorites(!viewFavorites.value)
  });
  useKeyPress('r', () => {
    resetCharactersSelection(setSearchParams, setHeroSection);
    setViewFavorites(false);
  });

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header
                setWithPagination={setWithPagination}
                withPagination={withPagination.value}
                howManyRows={howManyRows.value}
                setHowManyRows={setHowManyRows}
              >
                <ChangeCharacters />
              </Header>

              <SliderSection />
              
              <>
                {
                  viewFavorites.value === false && (isLoading || isFetching) ?
                    <LoadingCharacters howManyRows={howManyRows.value} withPagination={withPagination.value} howMany={asHowManyAsPossible ? 710 : howMany} />
                    :
                    viewFavorites.value === false && (isError || charactersSignal.value === undefined) ?
                      <SectionCharacters>
                        <p>Sorry</p>
                        <p>😢 Opps... something happend. Please try again. </p>
                      </SectionCharacters>
                      :
                      <>
                        <DialogCharacters
                          selectedCharacter={selectedCharacter.value}
                        >
                          {
                            withPagination.value === true ?
                              <Characters />
                              :
                              <CharactersNoPagination
                                charactersFiltered={viewFavorites.value === true ? favorites.value : charactersSignal.value}
                                viewFavorites={viewFavorites.value}
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