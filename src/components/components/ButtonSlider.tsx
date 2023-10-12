type ButtonSliderProps = {
    children: JSX.Element
    functionClick: () => void
    classNames: string
    label: string
}

function ButtonSlider({ children, functionClick, classNames, label }: ButtonSliderProps) {
    return (
        <button
            // style={{ all: 'unset', display: 'block', position: 'absolute', top: 0, bottom: 0, padding: '1px', cursor: 'pointer', left: 0, width: '2rem', height: '2rem' }}
            onClick={() => functionClick()}
            className={
                `
                    block absolute top-0 bottom-0 p-1 
                    cursor-pointer 
                    ${classNames} 
                    hover:bg-background/20 focus-visible:bg-black/20 
                    transition-all 
                    ease-in-out 
                    duration-500 
                    hover:animate-squish 
                    focus-visible:animate-squish 
                    motion-reduce:hover:animate-none 
                    motion-reduce:focus-visible:animate-none 
                `
            }
            aria-label={`View ${label} image`}
        >
            {children}
        </button>
    )
}

export default ButtonSlider