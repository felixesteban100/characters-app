import { Character } from '@/types'
import { effect, signal, Signal } from '@preact/signals-react'

export const favorites: Signal<Character[]> = signal(getFavories())

function getFavories(){
  const value = localStorage.getItem("CHARACTERS_APP_FAVORITES")
  if(value == null) return []
  return JSON.parse(value)
}

effect(() => {
  localStorage.setItem('CHARACTERS_APP_FAVORITES', JSON.stringify(favorites.value))
})

export function setFavorites(favoritesS: Character[] | []) {
  favorites.value = [...favoritesS]
}