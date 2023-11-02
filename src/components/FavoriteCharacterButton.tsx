import { manageFavorite } from '../functions'

import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { selectedCharacter } from '@/flow/selectedCharacter'
import { favorites, setFavorites } from '../flow/favorites'

type FavoriteCharacterButtonProps = {}

function FavoriteCharacterButton({ }: FavoriteCharacterButtonProps) {
    return (
        <div className="flex items-center gap-2">
            <Switch
                id="favorite"
                checked={favorites.value.find(c => c._id === selectedCharacter.value._id) ? true : false}
                onCheckedChange={() => {
                    if (favorites.value.find(c => c._id === selectedCharacter.value._id)) {
                        manageFavorite("remove", selectedCharacter.value, favorites.value, setFavorites)
                    } else {
                        manageFavorite("add", selectedCharacter.value, favorites.value, setFavorites)
                    }
                }}
            />
            <Label className='text-2xl pb-[7.5px]' htmlFor="favorite">{favorites.value.find(c => c._id === selectedCharacter.value._id) ? '🌟' : '⭐'}</Label>
        </div>
    )
}

export default FavoriteCharacterButton