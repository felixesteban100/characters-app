import { useFavorites } from '@/state/favorites'
import { manageFavorite } from '../functions'

import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { useSelectedCharacter } from '@/state/selectedCharacter'

type FavoriteCharacterButtonProps = {
}

function FavoriteCharacterButton({ }: FavoriteCharacterButtonProps) {
    const { favorites, setFavorites } = useFavorites()
    const { selectedCharacter } = useSelectedCharacter()

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