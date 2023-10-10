import { useInView } from 'react-intersection-observer';
import { Character } from '../types';
import { publisherIMG, transitionImageCard } from '../functions';

type CharacterProps = {
    // setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
    setSelectedCharacter: (character: Character) => void
    currentCharacter: Character;
    indexForTest: number
}

function CharacterComponent({ setSelectedCharacter, currentCharacter, indexForTest }: CharacterProps) {
    const { ref, inView } = useInView({
        threshold: 0.8,
        initialInView: true,
    });

    return (
        <div
            data-test={`character-${indexForTest}`}
            onClick={() => setSelectedCharacter(currentCharacter)}
            className={`cursor-pointer group/item`}
        >
            <div
                ref={ref}
                className={
                    `${inView ? "animate-fadeIn" : "animate-fadeOut"} 
                    md:card
                    md:image-full
                    object-contain 
                    w-full 
                    h-[20rem] md:h-[20rem] xl:h-[22rem] 
                    md:hover:shadow-current 
                    md:hover:shadow-lg 
                    md:hover:scale-110 
                    relative
                    transition-all 
                    duration-700
                    `
                }
            >
                <img className={`object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md group-hover/item:blur-sm`} src={currentCharacter.images.md} alt={currentCharacter.name} loading='lazy' onLoadCapture={transitionImageCard} />

                <div
                    // className={`absolute z-[100] h-[80%] px-5 -translate-y-[18rem] lg:-translate-y-[20rem] group/edit md:invisible group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between gap-5`}
                    className={`absolute z-[100] h-[80%] px-5 -translate-y-[18rem] lg:-translate-y-[20rem] group/edit group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between gap-5`}
                >
                    <div>
                        <h2 className="font-bold text-foreground-muted text-xl md:text-2xl lg:text-3xl">{currentCharacter.name}</h2>
                    </div>

                    <div className="card-actions justify-end">
                        <div className='flex w-full justify-between'>
                            {currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros"
                                ? <img className='h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem] self-center' src={publisherIMG(currentCharacter.biography.publisher)} alt={`Logo ${currentCharacter.biography.publisher}`} loading="lazy" />
                                : <img className='h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem] self-center' src={publisherIMG(currentCharacter.biography.publisher)} alt={`Logo ${currentCharacter.biography.publisher}`} loading="lazy" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterComponent