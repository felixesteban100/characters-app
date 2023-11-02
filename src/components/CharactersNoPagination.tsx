import { Character } from '../types';
import CharacterComponent from './CharacterComponent';
import CharactersContainer from './CharactersContainer';
import SectionCharacters from './SectionCharacters';
import { DialogTrigger } from './ui/dialog';

type CharactersProps = {
    charactersFiltered: Character[]
    viewFavorites: boolean
}

function CharactersNoPagination({ charactersFiltered, viewFavorites }: CharactersProps) {
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