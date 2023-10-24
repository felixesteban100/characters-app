import { Character } from '../types';
import CharacterComponent from './CharacterComponent';
import CharactersContainer from './CharactersContainer';
import SectionCharacters from './SectionCharacters';
import { DialogTrigger } from './ui/dialog';

type CharactersProps = {
    charactersFiltered: Character[]
    viewFavorites: boolean
    setSelectedCharacter: (character: Character) => void;
    setSelectedCharacterId: (idSelected: number) => void;
}

function CharactersNoPagination({ charactersFiltered, viewFavorites, setSelectedCharacter, setSelectedCharacterId }: CharactersProps) {

    return (
        <SectionCharacters>
            {
                charactersFiltered.length > 0 ?
                    <CharactersContainer>
                        <>
                            {
                                charactersFiltered.map((currentCharacter, index) => {
                                    return (
                                        <DialogTrigger className='grid h-fit' key={currentCharacter._id}>
                                            <CharacterComponent
                                                indexForTest={index}
                                                setSelectedCharacter={setSelectedCharacter}
                                                setSelectedCharacterId={setSelectedCharacterId}
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
            <div></div>

        </SectionCharacters>
    )
}


export default CharactersNoPagination



/* 
    {
                pagination.range.length > 1 ?
                    <div ref={scrollRef} id="pagination-buttons" className="w-[70%] flex justify-center">
                        <Button size={windowWidth < 700 ? 'sm' : "default"} variant={'outline'} disabled={1 === pagination.active ? true : false} data-test="paginationBtn-prev" onClick={() => { pagination.setPage(pagination.active - 1); }} className={`text-xl -pt-2`}>«</Button>
                        {pagination.range.map((currentPage, index) => {
                            return (
                                <Button
                                    size={windowWidth < 700 ? 'sm' : "default"}
                                    variant={'outline'}
                                    data-test={currentPage === 'dots' ? "paginationBtnDisabled" : `paginationBtn-${index}`}
                                    key={`${currentPage}-${index}`}
                                    onClick={() => { pagination.setPage(currentPage !== 'dots' ? currentPage : 1);}}
                                    // className={`${pagination.active === currentPage ? "bg-primary/50 text-foreground" : ""}`}
                                    disabled={currentPage === 'dots' || pagination.active === currentPage ? true : false}
                                >
                                    {currentPage === "dots" ? <p className="text-base">...</p> : currentPage}
                                </Button>
                            )
                        })}
                        <Button size={windowWidth < 700 ? 'sm' : "default"} variant={'outline'} disabled={pagination.range[pagination.range.length - 1] === pagination.active ? true : false} data-test="paginationBtn-next" onClick={() => { pagination.setPage(pagination.active + 1);}} className={`join-item btn btn-primary text-xl -pt-2`}>»</Button>
                    </div>
                    :
                    <div className="w-[70%] flex justify-center"></div>
            }
*/