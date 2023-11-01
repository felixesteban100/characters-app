// import useQueryCharacters from '@/data/useQueryCharacters'
// import { useFavorites } from '@/redux/favorites'
// import { useSearchParamsForTheApp } from './useSearchParamsForTheApp'
// import { useState } from 'react'
// import { useVisibleResults } from '@/redux/visibleResults'
// import { useCharactersPerPage } from '@/redux/charactersPerPage'

// function useCharactersToShow() {
//     const { favorites } = useFavorites()
//     const { charactersFiltered } = useQueryCharacters()
//     const { viewFavorites } = useSearchParamsForTheApp()
//     const { setVisibleResults } = useVisibleResults()
//     const { charactersPerPage } = useCharactersPerPage()

//     const [charactersToShow, setCharactersToShow] = useState((viewFavorites ? favorites : charactersFiltered) ?? [])
//     // const [paginationTotal, setPaginationTotal] = useState(Math.ceil(charactersToShow.length / charactersPerPage))

//     // useEffect(() => {
//     //     const current = (viewFavorites ? favorites : charactersFiltered) ?? []
//     //     setCharactersToShow(current)
//     //     setVisibleResults(current ? current.slice(0, charactersPerPage) : [])
//     // }, [viewFavorites])

//     // function ChangeCharactersToShow(viewFavoritesNew: boolean = viewFavorites) {
//     //     const current = (viewFavoritesNew ? favorites : charactersFiltered) ?? []
//     //     setCharactersToShow(current)
//     //     setVisibleResults(current ? current.slice(0, charactersPerPage) : [])
//     //     // setPaginationTotal(Math.ceil(current.length / charactersPerPage))
//     //     console.log(charactersPerPage)
//     // }

//     return { charactersToShow: charactersToShow/* , ChangeCharactersToShow */ }
// }

// export default useCharactersToShow