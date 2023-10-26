
type SectionCharactersProps = {
    children: JSX.Element[]
}

function SectionCharacters({children}: SectionCharactersProps) {
    return (
        <div
            id='section-characters'
            data-test="section-characters"
            //min-h-[90vh]
            //-mt-[25rem] md:-mt-72 lg:-mt-20
            className='flex flex-col gap-10 items-center justify-center'
        >
            {children}
        </div>
    )
}

export default SectionCharacters