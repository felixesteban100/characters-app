
type SectionCharactersProps = {
    children: JSX.Element[]
}

function SectionCharacters({children}: SectionCharactersProps) {
    return (
        <div
            id='section-characters'
            data-test="section-characters"
            className='flex flex-col gap-10 min-h-[90vh] items-center justify-center'
        >
            {children}
        </div>
    )
}

export default SectionCharacters