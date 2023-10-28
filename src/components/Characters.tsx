import { Character } from '../types';
import { useEffect, useState } from 'react'
import { usePagination } from "@mantine/hooks";

import CharacterComponent from './CharacterComponent';
import CharactersContainer from './CharactersContainer';
import useWindowWidth from '../hooks/useWindowWidth';
import SectionCharacters from './SectionCharacters';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useInView } from 'react-intersection-observer';

type CharactersProps = {
    charactersFiltered: Character[]
    viewFavorites: boolean
    initialRender: boolean
    setInitialRender: React.Dispatch<React.SetStateAction<boolean>>;
    howManyRows: number;
}

function Characters({ charactersFiltered, viewFavorites, initialRender, setInitialRender, howManyRows }: CharactersProps) {
    const windowWidth = useWindowWidth()
    const [charactersPerPage, setCharactersPerPage] = useState(8)
    const [visibleResults, setVisibleResults] = useLocalStorage<Character[]>("CHARACTERS_APP_VISIBLERESULTS", charactersFiltered.slice(0, charactersPerPage))

    const [pageActive, setPageActive] = useLocalStorage<number>("CHARACTERS_APP_PAGEACTIVE", 1)

    const { ref, inView } = useInView({
        threshold: 0.5,
        initialInView: true,
    });

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
        } else {
            setVisibleResults(charactersFiltered.slice(0, charactersPerPage))
        }
    }, [charactersFiltered])

    useEffect(() => {
        let newValue
        switch (true) {
            case windowWidth > 782 && windowWidth < 1285:
                newValue = howManyRows * 3 //6
                break;
            case windowWidth < 782:
                newValue = howManyRows * 2 //4;
                break;
            default:
                newValue = howManyRows * 4 //8;
                break;
        }
        setCharactersPerPage(newValue);
        if (!initialRender) {
            pagination.setPage(1);
            setVisibleResults(charactersFiltered.slice(0, newValue));
        }
    }, [windowWidth, howManyRows])

    const pagination = usePagination({
        total: Math.ceil(charactersFiltered.length / charactersPerPage),
        page: pageActive,
        onChange(page: number) {
            const start = (page - 1) * charactersPerPage
            const end = start + charactersPerPage
            const newVisibleResults = charactersFiltered.slice(start, end)
            setVisibleResults(newVisibleResults)
            setPageActive(page)
            // if(howManyRows === 2){
            //     setTimeout(() => {
            //         if (ref.current) {
            //             ref.current.scrollIntoView({ behavior: "smooth" });
            //         }
            //     }, 600);
            // }
        },
        boundaries: 1,
        siblings: 1
    })

    return (
        <SectionCharacters>

            {
                visibleResults.length > 0 ?
                    <CharactersContainer>
                        <>
                            {
                                visibleResults.map((currentCharacter, index) => {
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
                    <div>
                        <p className='text-primary text-4xl text-center'>
                            {
                                viewFavorites ?
                                    "No favorites"
                                    :
                                    "No characters found"
                            }
                        </p>
                    </div>
            }

            {
                pagination.range.length > 1 ?
                    <div ref={ref} id="pagination-buttons" className={`w-[70%] flex justify-center ${inView ? "scale-100" : "scale-0"} duration-500 transition-all`}>
                        <Button size={windowWidth < 700 ? 'sm' : "default"} variant={'outline'} disabled={1 === pagination.active ? true : false} data-test="paginationBtn-prev" onClick={() => { pagination.setPage(pagination.active - 1); }} className={`text-xl -pt-2`}>«</Button>
                        {pagination.range.map((currentPage, index) => {
                            return (
                                <Button
                                    size={windowWidth < 700 ? 'sm' : "default"}
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
                        <Button size={windowWidth < 700 ? 'sm' : "default"} variant={'outline'} disabled={pagination.range[pagination.range.length - 1] === pagination.active ? true : false} data-test="paginationBtn-next" onClick={() => { pagination.setPage(pagination.active + 1); }} className={`join-item btn btn-primary text-xl -pt-2`}>»</Button>
                    </div>
                    :
                    <div className="w-[70%] flex justify-center"></div>
            }


        </SectionCharacters>
    )
}

export default Characters