
export type Character = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string;
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        // mdi?: string;
        // md2?: string;
        [key: string]: string
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
}



export type ImageZoomProps = {
    image: string,
    character: string,
}



export type ModalTeamMembersProps = {
    teamMembers: Character[] | undefined
    team: string;
    universe: string;
}

export type ColorPalette = string[];


export type HeroProps = {
    imgs: string[];
    title: string;
    description: string;
}

export type HeroSelectorProps = {
    selectedOne: string;
    heroSection: {
        imgs: string[];
        title: string;
        description: string;
    }
}

export type heroSelectorLookUp = {
    [key: string]: JSX.Element
}

export type SuccessChangedProps = {
    heroSection: { imgs: string[], title: string, description: string }
    charactersFiltered: Character[]
}


export type StateVariables = {
    letItSearch: string,
    // selectedCharacter: JSON.stringify(characterEmpty),
    viewFavorites: string,
    howMany: string,
    asHowManyAsPossible: string,
    characterName: string,
    side: string,
    universe: string,
    team: string,
    gender: string,
    race: string,
    includeNameOrExactName: string,
    characterOrFullName: string,
    heroSection: string,
    teamMembers: string,
    theme: string
    // favorites: '[]',
    // charactersFiltered: JSON.stringify(batmanandSpider_manObj)
  }