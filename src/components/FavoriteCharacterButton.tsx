import { manageFavorite } from '../functions'
import { Character } from '../types'

import { Label } from './ui/label'
import { Switch } from './ui/switch'

type FavoriteCharacterButtonProps = {
    favorites: Character[]
    setFavorites: (favoritesS: Character[]) => void
    selectedCharacter: Character
}

function FavoriteCharacterButton({ favorites, setFavorites, selectedCharacter }: FavoriteCharacterButtonProps) {
    return (
        <div className="flex items-center gap-2">
            <Switch
                id="favorite"
                checked={favorites.find(c => c._id === selectedCharacter._id) ? true : false}
                onCheckedChange={() => {
                    if (favorites.find(c => c._id === selectedCharacter._id)) {
                        manageFavorite("remove", selectedCharacter, favorites, setFavorites)
                    } else {
                        manageFavorite("add", selectedCharacter, favorites, setFavorites)
                    }
                }}
            />
            <Label className='text-2xl pb-[7.5px]' htmlFor="favorite">{favorites.find(c => c._id === selectedCharacter._id) ? '🌟' : '⭐'}</Label>
        </div>
    )
}

export default FavoriteCharacterButton