import { Character } from '../types';
import { usePagination } from "@mantine/hooks";
import CharacterComponent from './CharacterComponent';
import CharactersContainer from './CharactersContainer';
import { windowWidth } from '../flow/windowWidth';
import SectionCharacters from './SectionCharacters';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';
import { useInView } from 'react-intersection-observer';
import { computed, signal, effect, Signal } from '@preact/signals-react';
import { charactersSignal } from '../data/useQueryCharacters'
import { viewFavorites } from '@/flow/viewFavorites';
import { favorites } from '@/flow/favorites';
import { howManyRows } from '@/flow/howManyRows';

const pageActive = signal(getPageActive())

function getPageActive() {
    const value = localStorage.getItem("CHARACTERS_APP_PAGEACTIVE");
    if (value == null) return 1;
    return JSON.parse(value);
}

export function setPageActive(page: number) {
    pageActive.value = page
}

effect(() => {
    localStorage.setItem(
        "CHARACTERS_APP_PAGEACTIVE",
        JSON.stringify(pageActive.value)
    );
});

const charactersPerPage = computed(getCharactersPerPage)
function getCharactersPerPage(): number {
    switch (true) {
        case windowWidth.value > 782 && windowWidth.value < 1285:
            return howManyRows.value * 3 //6
            break;
        case windowWidth.value < 782:
            return howManyRows.value * 2 //4;
            break;
        default:
            return howManyRows.value * 4 //8;
            break;
    }
}

const start = computed(() => (pageActive.value - 1) * charactersPerPage.value)
const end = computed(() => start.value + charactersPerPage.value)

const visibleResults: Signal<Character[]> = computed(() => {
    if (viewFavorites.value === true) return favorites.value.slice(start.value, end.value)
    return charactersSignal.value.slice(start.value, end.value)
})

effect(() => {
    localStorage.setItem(
        "CHARACTERS_APP_VISIBLERESULTS",
        JSON.stringify(visibleResults.value)
    );
});

const paginationTotal = computed(() => {
    return viewFavorites.value === true ? Math.ceil(favorites.value.length / charactersPerPage.value) : Math.ceil(charactersSignal.value.length / charactersPerPage.value)
})

type CharactersProps = {}

function Characters({ }: CharactersProps) {
    const { ref, inView } = useInView({
        threshold: 0.5,
        initialInView: true,
    });

    const pagination = usePagination({
        total: paginationTotal.value,
        page: pageActive.value,
        onChange: setPageActive,
        boundaries: 1,
        siblings: 1
    })

    return (
        <SectionCharacters>
            {
                visibleResults.value.length > 0 ?
                    <CharactersContainer>
                        <>
                            {
                                visibleResults.value.map((currentCharacter, index) => {
                                    return (
                                        <DialogTrigger className='grid h-fit' key={currentCharacter._id}>
                                            <CharacterComponent
                                                indexForTest={index}
                                                currentCharacter={currentCharacter}
                                            />
                                        </DialogTrigger>
                                    )
                                })
                            }
                        </>
                    </CharactersContainer>
                    :
                    charactersSignal.value.length > 0 ?
                        <div>
                            <p className='text-primary text-4xl text-center'>
                                Wrong page in the pagination 😐
                            </p>
                        </div>
                        :
                        <div>
                            <p className='text-primary text-4xl text-center'>
                                {/* {
                                viewFavorites ?
                                    "No favorites"
                                    :
                                    "No characters found"
                            } */}
                                No characters Founded 😥
                            </p>
                        </div>
            }

            {
                pagination.range.length > 1 ?
                    <div ref={ref} id="pagination-buttons" className={`w-[70%] flex justify-center ${inView ? "scale-100" : "scale-0"} duration-500 transition-all`}>
                        <Button size={windowWidth.value < 700 ? 'sm' : "default"} variant={'outline'} disabled={1 === pagination.active ? true : false} data-test="paginationBtn-prev" onClick={() => { pagination.setPage(pagination.active - 1); }} className={`text-xl -pt-2`}>«</Button>
                        {pagination.range.map((currentPage, index) => {
                            return (
                                <Button
                                    size={windowWidth.value < 700 ? 'sm' : "default"}
                                    variant={'outline'}
                                    data-test={currentPage === 'dots' ? "paginationBtnDisabled" : `paginationBtn-${index}`}
                                    key={`${currentPage}-${index}`}
                                    onClick={() => { pagination.setPage(currentPage !== 'dots' ? currentPage : 1); }}
                                    disabled={currentPage === 'dots' || pagination.active === currentPage ? true : false}
                                    className={currentPage !== 'dots' ? 'disabled:opacity-100 disabled:bg-primary disabled:text-primary-foreground' : ""}
                                >
                                    {currentPage === "dots" ? <p className="text-base">...</p> : currentPage}
                                </Button>
                            )
                        })}
                        <Button size={windowWidth.value < 700 ? 'sm' : "default"} variant={'outline'} disabled={pagination.range[pagination.range.length - 1] === pagination.active ? true : false} data-test="paginationBtn-next" onClick={() => { pagination.setPage(pagination.active + 1); }} className={`join-item btn btn-primary text-xl -pt-2`}>»</Button>
                    </div>
                    :
                    <div className="w-[70%] flex justify-center"></div>
            }

        </SectionCharacters>
    )
}

export default Characters