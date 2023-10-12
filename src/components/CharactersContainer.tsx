
type CharactersContainerProps = {
    children: JSX.Element
}
function CharactersContainer({ children }: CharactersContainerProps) {

    return (
        <div
            className={
                `m-0 lg:mt-7
                min-h-[82vh] lg:min-h-[85vh]
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
                w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] 
                h-[90%]
                gap-10 mx-auto 
                pt-[5rem] md:pt-[2rem] 
                `
            }
        >
            {children}
        </div>
    )
}

export default CharactersContainer