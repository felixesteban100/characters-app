
type SectionCharactersProps = {
    children: JSX.Element[]
}

function SectionCharacters({children}: SectionCharactersProps) {
    return (
        <div
            id='section-characters'
            data-test="section-characters"
            //min-h-[90vh]
            className='flex flex-col gap-10 items-center justify-center'
        >
            {children}
        </div>
    )
}

export default SectionCharacters