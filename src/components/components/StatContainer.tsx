
export default function StatContainer({ children }: { children: JSX.Element[] | JSX.Element }) {
    return (
        <div className="self-center w-full h-full">
            {children}
        </div>
    )
}
