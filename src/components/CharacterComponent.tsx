import { useInView } from 'react-intersection-observer';
import { Character } from '../types';
import { publisherIMG/* , transitionImageCard */ } from '../functions';

type CharacterProps = {
    // setSelectedCharacter: React.Dispatch<React.SetStateAction<Character>>
    currentCharacter: Character;
    indexForTest: number;
    setSelectedCharacter: (character: Character) => void
    setSelectedCharacterId: (idSelected: number) => void;
}

function CharacterComponent({ setSelectedCharacter, setSelectedCharacterId, currentCharacter, indexForTest }: CharacterProps) {
    const { ref, inView } = useInView({
        threshold: 0.8,
        initialInView: true,
    });

    return (
        <div
            data-test={`character-${indexForTest}`}
            onClick={() => {
                setSelectedCharacterId(currentCharacter.id)
                setSelectedCharacter(currentCharacter)
            }}
            className={`cursor-pointer group/item`}
        >
            <div
                ref={ref}
                // ${useWindowWidth() < 700 ? "card-new" : ""}
                // card-new
                //md:image-full
                className={
                    `${inView ? "animate-fadeIn " : "animate-fadeOut"} 
                    card-new
                    object-contain 
                    w-full 
                    h-[20rem] md:h-[20rem] xl:h-[22rem] 
                    hover:transition-all
                    hover:duration-700
                    md:hover:shadow-current 
                    md:hover:shadow-lg 
                    md:hover:scale-110 
                    relative
                    `
                }
            >
                <img className={`absolute object-cover w-full h-full transition-opacity duration-200 ease-in-out rounded-md md:group-hover/item:blur-sm`} src={currentCharacter.images.md} alt={currentCharacter.name} loading='lazy' /* onLoadCapture={transitionImageCard} */ />
                <div
                    // className={`absolute z-[100] h-[80%] px-5 -translate-y-[18rem] lg:-translate-y-[20rem] group/edit md:invisible group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between gap-5`}
                    // className={`absolute z-[100] h-[80%] px-5 -translate-y-[18rem] xl:-translate-y-[20rem] group/edit group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between gap-5`}
                    className={`absolute z-[100] ml-5 mt-7 w-[90%] h-[85%]  flex flex-col justify-between items-start gap-[55%]`}
                >
                    {/* character_name */}
                    <h2 className={`${inView ? "animate-scaleForwardEntranceCardInfo" : "animate-scaleForwardExitCardInfo"} font-bold text-muted-background text-xl xl:text-2xl`}>{currentCharacter.name}</h2>
                    <img
                        className={`
                        ${inView ? "animate-scaleForwardEntranceCardInfo" : "animate-scaleForwardExitCardInfo"}
                            ${currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros" || currentCharacter.biography.publisher === "Microsoft" ?
                                'h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]'
                                : 'h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]'}
                        `}
                        src={publisherIMG(currentCharacter.biography.publisher)}
                        alt={`Logo ${currentCharacter.biography.publisher}`}
                        loading="lazy"
                    />
                   {/*  {currentCharacter.biography.publisher === "DC Comics" || currentCharacter.biography.publisher === "Warner Bros" || currentCharacter.biography.publisher === "Microsoft"
                        ? <img className='h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[5rem] lg:w-[5rem]' src={publisherIMG(currentCharacter.biography.publisher)} alt={`Logo ${currentCharacter.biography.publisher}`} loading="lazy" />
                        : <img className='h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem]' src={publisherIMG(currentCharacter.biography.publisher)} alt={`Logo ${currentCharacter.biography.publisher}`} loading="lazy" />
                    } */}
                </div>
            </div>
        </div>
    );
}

export default CharacterComponent