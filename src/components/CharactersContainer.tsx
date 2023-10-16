
type CharactersContainerProps = {
    children: JSX.Element
}
function CharactersContainer({ children }: CharactersContainerProps) {

    return (
        <div
        //min-h-[82vh] lg:mt-7 m-0 md:min-h-[85vh] pt-[5rem] md:pt-[2rem] 
            className={
                `
                min-h-fit 
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
                w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] 
                h-[90%]
                justify-center items-center
                gap-10 mx-auto 
                `
            }
        >
            {children}
        </div>
    )
}

export default CharactersContainer