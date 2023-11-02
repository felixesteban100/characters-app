import LoadingCard from "../components/components/LoadingCard";
import { windowWidth } from '../flow/windowWidth';
import { getLoadingCards } from '../functions';
import SectionCharacters from '../components/SectionCharacters';
import CharactersContainer from "../components/CharactersContainer";
import { characterEmpty } from "../constants";
import { Button } from "./ui/button";

type LoadingCharactersProps = {
    howMany: number;
    howManyRows: number;
    withPagination: boolean
}

function LoadingCharacters({ howMany, howManyRows, withPagination }: LoadingCharactersProps) {
    return (
        <SectionCharacters>
            <CharactersContainer>
                <>
                    {
                        Array(getLoadingCards(windowWidth.value, howMany, howManyRows, withPagination)).fill(characterEmpty).map((_, index) => {
                            return (
                                <div key={index}>
                                    <LoadingCard />
                                </div>
                            )
                        })
                    }
                </>
            </CharactersContainer>

            {
                /* howMany > 8 &&  */withPagination === true ?
                    <div data-test="paginationHandler" className="w-[70%] flex justify-center gap-1">
                        <Button variant={'outline'} disabled className={`text-xl -pt-2`}>«</Button>
                        {new Array(3).fill(0).map((_, index) => {
                            return (
                                <Button
                                    variant={'outline'}
                                    key={index}
                                    disabled
                                >
                                    <p className="text-base">...</p>
                                </Button>
                            )
                        })}
                        <Button variant={'outline'} disabled className={`text-xl -pt-2`}>»</Button>
                    </div>
                    :
                    <div className="w-[70%] flex justify-center"></div>
            }
        </SectionCharacters>
    )
}

export default LoadingCharacters