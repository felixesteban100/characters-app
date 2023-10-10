import { Character } from '../types';
import { useEffect, useState } from 'react'
import { usePagination } from "@mantine/hooks";

import CharacterComponent from './CharacterComponent';
import CharactersContainer from './CharactersContainer';
import useWindowWidth from '../hooks/useWindowWidth';
import SectionCharacters from './SectionCharacters';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';

type CharactersProps = {
    charactersFiltered: Character[]
    viewFavorites: boolean
    setSelectedCharacter: (character: Character) => void
}

function Characters({ charactersFiltered, /* favorites, setFavorites, */ viewFavorites, /* selectedCharacter, */ setSelectedCharacter }: CharactersProps) {
    const windowWidth = useWindowWidth()
    const [charactersPerPage, setCharactersPerPage] = useState(8)
    const [visibleResults, setVisibleResults] = useState<Character[]>(charactersFiltered.slice(0, charactersPerPage))

    useEffect(() => { setVisibleResults(charactersFiltered.slice(0, charactersPerPage)) }, [charactersFiltered, charactersPerPage])

    useEffect(() => { pagination.setPage(1) }, [charactersFiltered])

    useEffect(() => {
        switch (true) {
            case windowWidth > 782 && windowWidth < 1285: setCharactersPerPage(6); break;
            case windowWidth < 782: setCharactersPerPage(4); break;
            default: setCharactersPerPage(8); break;
        }
    }, [windowWidth])

    const pagination = usePagination({
        total: Math.ceil(charactersFiltered.length / charactersPerPage),
        initialPage: 1,
        onChange(page: number) {
            const start = (page - 1) * charactersPerPage
            const end = start + charactersPerPage
            setVisibleResults(charactersFiltered.slice(start, end))
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
                                                setSelectedCharacter={setSelectedCharacter}
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
                    <div data-test="paginationHandler" className="w-[70%] flex justify-center gap-1">
                        <Button variant={'outline'} disabled={1 === pagination.active ? true : false} data-test="paginationBtn-prev" onClick={() => pagination.setPage(pagination.active - 1)} className={`text-xl -pt-2`}>«</Button>
                        {pagination.range.map((currentPage, index) => {
                            return (
                                <Button
                                    variant={'outline'}
                                    data-test={currentPage === 'dots' ? "paginationBtnDisabled" : `paginationBtn-${index}`}
                                    key={`${currentPage}-${index}`}
                                    onClick={() => pagination.setPage(currentPage !== 'dots' ? currentPage : 1)}
                                    // className={`${pagination.active === currentPage ? "bg-primary/50 text-foreground" : ""}`}
                                    disabled={currentPage === 'dots' || pagination.active === currentPage ? true : false}
                                >
                                    {currentPage === "dots" ? <p className="text-base">...</p> : currentPage}
                                </Button>
                            )
                        })}
                        <Button variant={'outline'} disabled={pagination.range[pagination.range.length - 1] === pagination.active ? true : false} data-test="paginationBtn-next" onClick={() => pagination.setPage(pagination.active + 1)} className={`join-item btn btn-primary text-xl -pt-2`}>»</Button>
                    </div>
                    :
                    <></>
            }
        </SectionCharacters>
    )
}


export default Characters