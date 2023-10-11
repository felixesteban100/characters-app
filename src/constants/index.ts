import { Character } from "../types"


export const characterEmpty: Character = {
    powerstats: {
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0,
    },
    appearance: {
        gender: "",
        race: "",
        height: ["", ""],
        weight: ["", "",],
        eyeColor: "",
        hairColor: "",
    },
    biography: {
        fullName: "",
        alterEgos: "",
        aliases: [],
        placeOfBirth: "",
        firstAppearance: "",
        publisher: "",
        alignment: "good",
    },
    work: {
        occupation: "",
        base: "",
    },
    connections: {
        groupAffiliation: "",
        relatives: "",
    },
    images: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
    },
    _id: "",
    id: 0,
    name: "",
    slug: "",
    comics: [""]
}

/* teams */
export const listOfTeamsWithImgInTheHeroSection = [
    "Avengers",
    "Justice League",
    "Fantastic Four(Original)",
    "X-Men",
    "Illuminati",
    "Batman Family",
    "Teenage Mutant Ninja Turtles",
    "Guardians of the Galaxy",
    "Fantastic Four",
    "Justice League (Original)",
    "Teen Titans",
    "Future Foundation",
    "Symbiotes",
    "Flash Family",
    "Suicide Squad",
    "Demon Slayer",
    "Ben 10",
    "New Guardians",
    "Lantern Corps",
    "Hulk Family"
]
export function teamIMG(teamName: string) {
    // change these for comics images like the guardians of the galaxy one (for a more responsive design)
    switch (teamName) {
        case "Avengers":
            return ["https://cdn.marvel.com/u/prod/marvel/i/mg/9/60/6451109edb7ed/clean.jpg", "https://comicvine.gamespot.com/a/uploads/scale_small/10/103530/6410591-qwadf.jpg", "https://images.comicbooktreasury.com/wp-content/uploads/2022/04/The-Avengers-100-Avengers-Reading-Order-705x470.jpg", "https://cdn.mos.cms.futurecdn.net/DBi5Vv6sJr3HNzyWrUCgK6.jpg", "https://storage.googleapis.com/hipcomic/p/1ac894c3ed9eb207973eaae05a672bc5-800.jpg"]

        case "Justice League":
            return ["https://i.pinimg.com/564x/5a/75/4b/5a754b3b2eba4bb6784f682003958383.jpg", "https://images.comicbooktreasury.com/wp-content/uploads/2021/09/DC-Comics-Omnibus.jpg"]

        case "Justice League (Original)":
            return ["https://i.pinimg.com/564x/5a/75/4b/5a754b3b2eba4bb6784f682003958383.jpg"]

        case "Fantastic Four(Original)":
            return ["https://www.writeups.org/wp-content/uploads/Ultimate-Fantastic-Four-Marvel-Comics-a.jpg", "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8113336-fantastic_four_vol_6_1_dell%27otto_exclusive_variant_textless.jpg", "https://i.pinimg.com/736x/88/73/ab/8873ab9f66f9283d1c5cf08a708818c1--marvel-dc-comics-marvel-art.jpg", "https://comicartcommunity.com/gallery/data/media/248/ULTIMATE_FANTASTIC_FOUR_06_Dale_Keown.jpg"]

        case "Fantastic Four":
            return ["https://preview.redd.it/amtkskhm6jp71.jpg?width=640&crop=smart&auto=webp&s=5210447223f321889ad6f663e6bf856629c6df0a"]

        case "X-Men":
            return ["https://kevinreviewsuncannyxmen.files.wordpress.com/2014/06/all-new-x-men-covers.jpg", "https://i.pinimg.com/564x/7b/81/50/7b815015d9763e61a4bd67957cedfa91.jpg"]

        case "Illuminati":
            return ["https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/05/Illuminati.jpg"]

        case "Batman Family":
            return ["https://i.pinimg.com/736x/93/a9/8b/93a98b6a447c4a394c1d2e670996daf5.jpg"]

        case "Teenage Mutant Ninja Turtles":
            return ["https://www.entertainmentearth.com/news/wp-content/uploads/2015/03/teenage-mutant-ninja-turtles-660x400.jpg", "https://m.media-amazon.com/images/I/91L4+Vf8YWL._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/91JJ2KVqZxL._AC_UF1000,1000_QL80_.jpg", "https://dyn.media.forbiddenplanet.com/G6ZsQHigqNP4v8OumhRGzMRL9OA=/fit-in/1500x1500/https://media.forbiddenplanet.com/products/50/79/190b46be00d1ee8197156b731327e30c105a.jpg"]

        case "Guardians of the Galaxy":
            return ["https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/5c3f94442d3e9/clean.jpg", "https://images5.alphacoders.com/872/872052.jpg", "https://s33525.pcdn.co/wp-content/uploads/2021/02/STL181935-1.jpg", "https://cdn.kobo.com/book-images/d6403f38-b70d-4db5-97ef-11b29f6658c5/1200/1200/False/guardians-of-the-galaxy-vol-1.jpg"]

        case "Teen Titans":
            return ["https://13thdimension.com/wp-content/uploads/2016/09/640z.jpg", "https://insidepulse.com/wp-content/uploads/2023/04/Tales-of-The-Titans-1-A-scaled.webp"]

        case "Future Foundation":
            return ["https://media.wired.com/photos/5932b9ebd80dd005b42b03b1/master/w_2560%2Cc_limit/FF_1_Cover-660.jpg", "https://staticg.sportskeeda.com/editor/2022/07/3d896-16591198229869-1920.jpg", "https://comicaption.files.wordpress.com/2011/11/fantasticfour600a1.jpg"]

        case "Symbiotes":
            return ["https://celebrity.fm/wp-content/uploads/2022/05/Who-is-the-God-of-symbiote-celebrityfm.jpg", "https://i.pinimg.com/originals/a7/d8/4b/a7d84bf9fe6b44529f3b17555ab07a5d.jpg"]

        case "Flash Family":
            return ["https://w0.peakpx.com/wallpaper/618/788/HD-wallpaper-flash-family-dceu-arrowverse-dc-dc-comics.jpg", "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2020/05/EX_IIaHUYAAE6Aa.jpg?ssl=1"]

        case "Suicide Squad":
            return ["https://m.media-amazon.com/images/I/A1nLFV0is9L._AC_UF1000,1000_QL80_.jpg", "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/09/suicide_squad_detail_-_publicity_-_embed_-_2019.jpg"]

        case "Demon Slayer":
            return ["https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg", "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg", "https://www.nme.com/wp-content/uploads/2023/01/demon-slayer-season-3-swordsmith-village-arc-key-art@2000x1270.jpg", "https://m.media-amazon.com/images/M/MV5BZGVlNzJkN2QtYmQ2YS00MmUzLTk0MjYtOWQ2YmVhZjMyNGZjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_.jpg"]

        case "Ben 10":
            return ["https://i.pinimg.com/originals/56/81/f2/5681f244b6d26283fa5e535e176613e9.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c014b4c-5206-41f3-a2f2-d24f96e3b43a/dfhwk74-83d3082a-b435-4dc9-81f6-b42aba70ee97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjMDE0YjRjLTUyMDYtNDFmMy1hMmYyLWQyNGY5NmUzYjQzYVwvZGZod2s3NC04M2QzMDgyYS1iNDM1LTRkYzktODFmNi1iNDJhYmE3MGVlOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kPC69MFKByFc_2E4X2na6DpU4o4zgqzDGIt-Idnsnaw"]

        case "New Guardians":
            return ["https://digitalspyuk.cdnds.net/12/40/comics_new_guardians_2.jpg", "https://e1.pxfuel.com/desktop-wallpaper/769/825/desktop-wallpaper-i-redesigned-kyle-s-white-lantern-suit-original-art-by-tyler-kirkham-from-green-lantern-new-guardians-%E2%80%A6-lantern-corps-suits.jpg"]

        case "Lantern Corps":
            return ["https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq"]

        case "Hulk Family":
            return ["https://i.pinimg.com/originals/c4/6b/4c/c46b4cad4416a382de72896f9e0d5b9f.jpg", "https://comicvine.gamespot.com/a/uploads/original/11134/111347244/7079315-4150626068-96446.jpg", "https://i.pinimg.com/736x/4e/e0/1f/4ee01f483be7ac031996b51e30e8e8e1--hulk-hulk-walter-obrien.jpg"]

        default:
            return DEFAULT_HERO_SECTION.imgs
    }
}

export function getTeamByUniverse(universe: string) {
    switch (universe) {
        case "Marvel Comics":
            return [
                {
                    name: "Asgardians",
                    value: "Asgardians",
                    img: 'https://cdna.artstation.com/p/assets/images/images/038/379/120/large/nicholas-russell-asgardiansofthegalaxy-logo.jpg?1622926425'
                },
                {
                    name: "Avengers",
                    value: "Avengers",
                    img: 'https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2015.png'
                },
                {
                    name: "Avengers (Original)",
                    value: "Avengers (Original)",
                    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd5vtke-4242c01a-acb6-49d6-8952-5f78313b7da0.png/v1/fill/w_1280,h_603/avengers__2019_logo__by_alanmac95_dd5vtke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvNjI3ZmU3MjEtODQ2Zi00Zjc1LWFjNjEtMTExY2EwMGIyN2RkXC9kZDV2dGtlLTQyNDJjMDFhLWFjYjYtNDlkNi04OTUyLTVmNzgzMTNiN2RhMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D_rCPgMAzwI7axRhtrx9tzc24PXQR0lRzU637xqkkoA"
                },
                {
                    name: "Black Order",
                    value: "Black Order",
                    img: 'https://cdnb.artstation.com/p/assets/images/images/038/379/307/large/nicholas-russell-theblackorder-logo.jpg?1622926914'
                },
                {
                    name: "Brotherhood of Evil Mutants",
                    value: "Brotherhood of Evil Mutants",
                    img: 'https://i.pinimg.com/564x/1a/65/39/1a6539168939ad87492441851f5f6160.jpg'
                },
                {
                    name: "Dark avengers",
                    value: "Dark avengers",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deezys0-ad61e4e7-f0b7-458c-a304-ce6a82883302.png/v1/fill/w_1181,h_591/dark_avengers_logo_by_lyriumrogue_deezys0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvMDJiNjBlZWQtZDljOC00YjhlLWI4MjYtM2VkMDY5NGJjZjI2XC9kZWV6eXMwLWFkNjFlNGU3LWYwYjctNDU4Yy1hMzA0LWNlNmE4Mjg4MzMwMi5wbmciLCJ3aWR0aCI6Ijw9MTE4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WGNpBaikwouoeHzsLf0ywqFGVrJKaErqEjuquOdU-14'
                },
                {
                    name: "Defenders",
                    value: "Defenders",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c566b360-dcc0-4f8d-8154-05e8123d0d36/d6nq2rp-d52122fd-909a-4eaa-963e-3268cc5595a8.png/v1/fill/w_1024,h_442,q_80,strp/marvel_s_the_defenders___logo_by_mrsteiners_d6nq2rp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDQyIiwicGF0aCI6IlwvZlwvYzU2NmIzNjAtZGNjMC00ZjhkLTgxNTQtMDVlODEyM2QwZDM2XC9kNm5xMnJwLWQ1MjEyMmZkLTkwOWEtNGVhYS05NjNlLTMyNjhjYzU1OTVhOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MFsU6vsmf_xeeiPuf_qwGy6HrYqunWGwqxJEs6JJql8'
                },
                {
                    name: "Fantastic Four",
                    value: "Fantastic Four",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Fantastic_Four_logo.svg/263px-Fantastic_Four_logo.svg.png'
                },
                {
                    name: "Fantastic Four(Original)",
                    value: "Fantastic Four(Original)",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Fantastic_Four_logo_%28blue_and_white%29.svg/302px-Fantastic_Four_logo_%28blue_and_white%29.svg.png?20230309220347'
                },
                {
                    name: "Future Foundation",
                    value: "Future Foundation",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0OTk4NzFkLWI2OTMtNDVmNi1hZTkwLWY5NDUxZmZmMDBkYVwvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fe-uzIK474LCq2QnBzXM7ge6m-TfBFonIv5WIJ-3_rc'
                },
                {
                    name: "Guardians of the Galaxy",
                    value: "Guardians of the Galaxy",
                    img: 'https://i.pinimg.com/originals/fe/e6/fa/fee6fa98ccec5fa47a152bbc94bec79f.jpg'
                },
                {
                    name: "Heroes For Hire",
                    value: "Heroes For Hire",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b6361af-d2ac-439d-a6fe-b3d69bba2a56/ddvf1p0-bfe256b5-cdf6-4e9d-8536-30ed5f48850b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiNjM2MWFmLWQyYWMtNDM5ZC1hNmZlLWIzZDY5YmJhMmE1NlwvZGR2ZjFwMC1iZmUyNTZiNS1jZGY2LTRlOWQtODUzNi0zMGVkNWY0ODg1MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lYyHlhENqrsoZEvfkvp5dJ5I0srj6Exb6dKUD6HmlnI'
                },
                {
                    name: "Hulk Family",
                    value: "Hulk Family",
                    img: 'https://logos-world.net/wp-content/uploads/2022/01/Hulk-Logo.png'
                },
                {
                    name: "Hydra",
                    value: "Hydra",
                    img: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Hydra_symbol.png'
                },

                {
                    name: "Illuminati",
                    value: "Illuminati",
                    img: 'https://i.ytimg.com/vi/kMzBLe2X-aE/maxresdefault.jpg'
                },
                {
                    name: "Inhumans",
                    value: "Inhumans",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5fd7346-eed0-4416-8203-58b0d230afe3/dfejcpg-e927c215-be44-4640-8c81-a88090ef5163.png/v1/fill/w_1280,h_578/inhumans_logo_png___disney__variant_by_bats66_dfejcpg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZTVmZDczNDYtZWVkMC00NDE2LTgyMDMtNThiMGQyMzBhZmUzXC9kZmVqY3BnLWU5MjdjMjE1LWJlNDQtNDY0MC04YzgxLWE4ODA5MGVmNTE2My5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dlImHRVc7dcYDiwRhYU5rff0xaUDBwpfIXMXVtfrgmY'
                },
                {
                    name: "Legion of Monsters",
                    value: "Legion of Monsters",
                    img: 'https://i.pinimg.com/564x/6e/a7/f5/6ea7f5127b20f058a2fba019e2008115.jpg'
                },
                {
                    name: "Marvel Knights",
                    value: "Marvel Knights",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0104ec68-4823-457b-9ac4-ca10b5317304/ddfbsxi-09e76b3c-43a5-42d2-9bdd-0d9d86095f1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxMDRlYzY4LTQ4MjMtNDU3Yi05YWM0LWNhMTBiNTMxNzMwNFwvZGRmYnN4aS0wOWU3NmIzYy00M2E1LTQyZDItOWJkZC0wZDlkODYwOTVmMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNvdl7_yq-ZSLqWweeXSFIUFvi6IUpPwVCnPqI5SDu4'
                },
                {
                    name: "Midnight Sons",
                    value: "Midnight Sons",
                    img: 'https://thecosmiccircus.com/wp-content/uploads/2021/08/midnight-suns-launch-announce-article-card.jpeg'
                },
                {
                    name: "MCU Villains",
                    value: "MCU Villains",
                    //https://tiermaker.com/images/avatars-2022/Ostrazo/Ostrazo.jpg?1665249362
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07dc11de-dc89-436a-89e0-8ddc2bf29af2/deurkec-115a9ad5-ab77-41eb-bb60-507c8144a89d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3ZGMxMWRlLWRjODktNDM2YS04OWUwLThkZGMyYmYyOWFmMlwvZGV1cmtlYy0xMTVhOWFkNS1hYjc3LTQxZWItYmI2MC01MDdjODE0NGE4OWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tjqC1rZ_YsIckE9pRKb8_htMIf9PRvSnq1-WV4HORLk'
                },
                {
                    name: "New Mutants",
                    value: "New Mutants",
                    img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082020/the_new_mutants_1st_logo.jpg?mjl.sY8ZuhzkwNEcKRiDwYSYeLCVjDKg&itok=XB7yoDKc'
                },
                {
                    name: "New Warriors",
                    value: "New Warriors",
                    img: 'https://i.pinimg.com/originals/ce/19/0a/ce190a4b163fb70300e2b92ead1f9980.png'
                },
                {
                    name: "Secret Avengers",
                    value: "Secret Avengers",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/df9w9rh-9dd43bc1-9b36-4034-9bb6-8a1c7e4078d0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGY5dzlyaC05ZGQ0M2JjMS05YjM2LTQwMzQtOWJiNi04YTFjN2U0MDc4ZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xTMfNwvub190r_OcyRUWkVDY-1ODA0yVHDj3ztaamAI'
                },
                {
                    name: "S.H.I.E.L.D",
                    value: "S.H.I.E.L.D",
                    img: 'https://seeklogo.com/images/M/marvel-agents-of-shield-icon-logo-54CED6908B-seeklogo.com.png'
                },
                {
                    name: "Sinister Six",
                    value: "Sinister Six",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a21c2816-49d4-4a5b-b6db-7634a5ea8671/deuucix-26734fb7-e2d7-4f87-8a43-08db5a598984.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMWMyODE2LTQ5ZDQtNGE1Yi1iNmRiLTc2MzRhNWVhODY3MVwvZGV1dWNpeC0yNjczNGZiNy1lMmQ3LTRmODctOGE0My0wOGRiNWE1OTg5ODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IZ7FEozXuyy4NOOqmj9ARb9Xh0k3eVDwMGBamAkOwWo'
                },
                {
                    name: "Spider-Army",
                    value: "Spider-Army",
                    img: 'https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg'
                },
                {
                    name: "Symbiotes",
                    value: "Symbiotes",
                    img: 'https://e7.pngegg.com/pngimages/747/62/png-clipart-venom-illustration-spider-man-venom-wall-decal-sticker-venom-face-s-text-superhero.png'
                },
                {
                    name: "Thunderbolts",
                    value: "Thunderbolts",
                    img: 'https://reelfreak.files.wordpress.com/2014/02/fotoflexer_photo.jpg'
                },
                {
                    name: "Ultimates",
                    value: "Ultimates",
                    img: 'https://i0.wp.com/guiasdelectura.com/wp-content/uploads/2018/04/Ultimates_Vol_1_1.jpg?fit=1000%2C251&ssl=1'
                },
                {
                    name: "Weapon X",
                    value: "Weapon X",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10795fa2-3dbe-470b-93ce-dada2e3e954e/dag852-48ba374e-4007-49ce-bc5a-5f843ccb960c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwNzk1ZmEyLTNkYmUtNDcwYi05M2NlLWRhZGEyZTNlOTU0ZVwvZGFnODUyLTQ4YmEzNzRlLTQwMDctNDljZS1iYzVhLTVmODQzY2NiOTYwYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.a-SwCvcA6JX9o8-CntlDCbl2OnNxnTjDi2tcbJyr0AQ'
                },
                {
                    name: "X-Force",
                    value: "X-Force",
                    img: 'https://i.pinimg.com/originals/fd/d0/5e/fdd05ee150633abd43ed5ba6ca46dfe7.png'
                },
                {
                    name: "X-Men",
                    value: "X-Men",
                    // img: 'https://assets.stickpng.com/images/6160517776000b00045a7d7e.png'
                    img: 'https://cdn.mos.cms.futurecdn.net/ZmMkFCTgBNMoxEohbzBXJm.jpg'
                },
                {
                    name: "X-Men (Original)",
                    value: "X-Men (Original)",
                    img: 'https://cdn.freebiesupply.com/logos/large/2x/x-men-logo-svg-vector.svg'
                },
                {
                    name: "Young avengers",
                    value: "Young avengers",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f835025f-aa9a-4a6f-bf26-b084438b2053/dfa4dao-424bffc3-fca8-4342-a9f2-cb2eae86efff.jpg/v1/fill/w_1342,h_595,q_70,strp/marvel_studios__young_avengers__logo_png__by_thescarletwitch1989_dfa4dao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvZjgzNTAyNWYtYWE5YS00YTZmLWJmMjYtYjA4NDQzOGIyMDUzXC9kZmE0ZGFvLTQyNGJmZmMzLWZjYTgtNDM0Mi1hOWYyLWNiMmVhZTg2ZWZmZi5qcGciLCJ3aWR0aCI6Ijw9MTYzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JtuXXo7s7xs_xJYyI5xTBDymrR3JxXC9vf90NZcB_HY'
                },
            ]

        case "DC Comics":
            return [
                {
                    name: "Aquaman Family",
                    value: "Aquaman Family",
                    img: "https://sportshub.cbsistatic.com/i/2021/11/08/e2a46e72-9d65-4583-b8d8-14e1563b1e8a/aquamen-dc-logo.jpg"
                },
                {
                    name: 'Assorted Batman rogues',
                    value: 'Assorted Batman rogues',
                    img: 'https://w0.peakpx.com/wallpaper/555/276/HD-wallpaper-batman-villains-joker-comics-scarecrow-peguin-superheroes-catwoman-two-face-dc-comics-batman-villains-poison-ivy.jpg'
                },
                {
                    name: "Batman Family",
                    value: "Batman Family",
                    img: "https://1.bp.blogspot.com/--SVWM1KMnVg/Xw91Rg-CF5I/AAAAAAAAmYk/31fWiKwl520MlvOY5q3deIke4dibyB8UACLcBGAsYHQ/s1600/228-2288332_gotham-knights-logo-png-transparent-batman-gotham-knights.png"
                },
                {
                    name: "Crimebusters / Watchmen",
                    value: "Crimebusters",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/300b1a15-9250-4271-b852-3d8701ff1dbd/d1vzmvq-a0f12489-90d0-43e8-a1d9-4a94801fbca1.png/v1/fill/w_1280,h_960,q_80,strp/watchmen_logo_by_marsu85_d1vzmvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzAwYjFhMTUtOTI1MC00MjcxLWI4NTItM2Q4NzAxZmYxZGJkXC9kMXZ6bXZxLWEwZjEyNDg5LTkwZDAtNDNlOC1hMWQ5LTRhOTQ4MDFmYmNhMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kh8vx0-H6mAi5DCDHPqNN_QosDLpU9wfrLLUy2OcYZ0'
                },
                {
                    name: "Crime Syndicate",
                    value: "Crime Syndicate",
                    img: 'https://www.dafont.com/img/illustration/c/r/crime_syndicate.png'
                },
                {
                    name: "Flash Family / Speedsters",
                    value: "Flash Family",
                    img: 'https://i.pinimg.com/736x/b4/1c/f7/b41cf7951ae77dcf210eaa20e4b0172b--logos-flash.jpg'
                },
                {
                    name: "Green Lantern Corps",
                    value: "Green Lantern Corps",
                    img: "https://static.miraheze.org/iconswiki/9/94/Green_Lantern_Corps_vol3_Logo.png"
                },
                {
                    name: "Injustice League",
                    value: "Injustice League",
                    img: 'https://d36m266ykvepgv.cloudfront.net/uploads/media/wI2fTCuIZN/c-160-160/logo-02-1.jpg'
                },
                {
                    name: "Justice League",
                    value: "Justice League",
                    img: "https://heroichollywood.com/wp-content/uploads/2017/09/justice-league-logo-square-4.jpg"
                },
                {
                    name: "Justice League (Original)",
                    value: "Justice League (Original)",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Justice_League_2017_film_logo.svg/2395px-Justice_League_2017_film_logo.svg.png"
                },
                {
                    name: "Justice League Dark",
                    value: "Justice League Dark",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/02b60eed-d9c8-4b8e-b826-3ed0694bcf26/deu14vf-dd6f5d44-ab34-409d-82ab-7959393b86ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyYjYwZWVkLWQ5YzgtNGI4ZS1iODI2LTNlZDA2OTRiY2YyNlwvZGV1MTR2Zi1kZDZmNWQ0NC1hYjM0LTQwOWQtODJhYi03OTU5MzkzYjg2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wMa5cMF9wHLY8Rey0Tv41tBx1vOy3qxYteTLwfVKrck'
                },
                {
                    name: "Justice Society of America",
                    value: "Justice Society of America",
                    img: 'https://i.pinimg.com/736x/a4/cd/ca/a4cdca2411e40a0ecdfe475b2e599871.jpg'
                },
                {
                    name: "Lanterns Corps (All)",
                    value: "Lantern Corps",
                    img: 'https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq'
                },
                {
                    name: "The Terrifics",
                    value: "The Terrifics",
                    img: 'https://www.pngitem.com/pimgs/m/376-3763618_dc-the-terrifics-15-hd-png-download.png'
                },
                {
                    name: "Legion of Super-Heroes",
                    value: "Legion of Super-Heroes",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/765582ae-ee02-4dc4-851a-d3dc540cdf79/d417t7r-06f21f67-aab4-415e-9842-20a64c0dc1b6.png/v1/fill/w_256,h_256/legion_of_superheroes_icon_by_jeremymallin_d417t7r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvNzY1NTgyYWUtZWUwMi00ZGM0LTg1MWEtZDNkYzU0MGNkZjc5XC9kNDE3dDdyLTA2ZjIxZjY3LWFhYjQtNDE1ZS05ODQyLTIwYTY0YzBkYzFiNi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mwQtccx3Qrs1UmpTUsd8nN-mNNgfpvytgCZmwO6f808'
                },
                {
                    name: "Marvel Family",
                    value: "Marvel Family",
                    img: 'https://i.pinimg.com/originals/b8/94/20/b89420afa43affd9f5cd97900fc89806.png'
                },
                {
                    name: "New Guardians Corps",
                    value: "New Guardians",
                    img: 'https://i.pinimg.com/originals/05/58/a9/0558a9596e80cb6931b4bb6d1c876664.png'
                },
                {
                    name: "Outsiders",
                    value: "Outsiders",
                    img: 'https://1.bp.blogspot.com/-xg4MjNnNrH0/Tb50RigNa8I/AAAAAAAAA5w/lfQQBWtBVSs/s1600/outsiders.png'
                },
                {
                    name: "Secret Society of Super Villains",
                    value: "Secret Society of Super Villains",
                    img: 'https://www.logolynx.com/images/logolynx/64/64f427a6fa6c1acd1ddbb4be2b5eac96.jpeg'
                },
                {
                    name: "Suicide Squad",
                    value: "Suicide Squad",
                    img: 'https://www.denofgeek.com/wp-content/uploads/2020/08/The-Suicide-Squad-Logo.png?fit=1200%2C715'
                },
                {
                    name: "Superman Family / Kriptonian",
                    value: "Superman Family",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png'
                },
                {
                    name: "Teen Titans",
                    value: "Teen Titans",
                    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8bdcbc70089491.5b97ce31f3e7b.png'
                }
            ]

        case "Dark Horse Comics":
            return [
                {
                    name: "Incredible Family",
                    value: "Incredible Family",
                    img: 'https://logos-world.net/wp-content/uploads/2021/09/Incredibles-Logo.png'
                },
            ]

        case "IDW Publishing":
            return [
                {
                    name: "Teenage Mutant Ninja Turtles",
                    value: "Teenage Mutant Ninja Turtles",
                    img: 'https://logos-world.net/wp-content/uploads/2023/04/Ninja-Turtles-Logo-2003.png'
                },
            ]

        case "Shueisha":
            return [
                {
                    name: "One Piece",
                    value: "One Piece",
                    img: 'https://1000logos.net/wp-content/uploads/2022/08/One-Piece-Logo.png'
                },
                {
                    name: "Black Clover",
                    value: "Black Clover",
                    img: 'https://guiltybit.com/wp-content/uploads/2022/02/Manga-Black-Clover.webp'
                },
                {
                    name: "Dragon Ball",
                    value: "Dragon Ball",
                    img: 'https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo.png'
                },
                {
                    name: "Demon Slayer",
                    value: "Demon Slayer",
                    img: 'https://logos-world.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png'
                },
                {
                    name: "Jujutsu Kaisen",
                    value: "Jujutsu Kaisen",
                    img: 'https://johto.legiaodosherois.com.br/wp-content/uploads/2021/10/legiao_IC7yo83cx4YV.jpg'
                },
                {
                    name: "Bleach",
                    value: "Bleach",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Bleach_logo_anime.jpg'
                },
                {
                    name: "Attack on Titan",
                    value: "Attack on Titan",
                    img: 'https://logos-world.net/wp-content/uploads/2022/01/Attack-on-Titan-Logo.png'
                },
                {
                    name: "Naruto Shippuden",
                    value: "Naruto Shippuden",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/667787d5-f7b0-4eb6-97ee-76f03852fa83/d1sz44l-d35ebbe3-df1f-4043-9be6-5ed49301c01f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2Nzc4N2Q1LWY3YjAtNGViNi05N2VlLTc2ZjAzODUyZmE4M1wvZDFzejQ0bC1kMzVlYmJlMy1kZjFmLTQwNDMtOWJlNi01ZWQ0OTMwMWMwMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NhJ0Wzg5CuzTnrO-Khw1NrpOdO9JTFJzswd4AWNQSWw'
                },
                {
                    name: "One Punch Man",
                    value: "One Punch Man",
                    img: 'https://i.pinimg.com/564x/6d/b2/02/6db2024de8be20d87662727e6556cb07.jpg'
                },
                {
                    name: "Chainsaw Man",
                    value: "Chainsaw Man",
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chainsaw_Man_logo.png/1200px-Chainsaw_Man_logo.png'
                },
                {
                    name: "Metal Alchemist",
                    value: "Metal Alchemist",
                    img: 'https://m.media-amazon.com/images/I/71p7ercPcHL.jpg'
                },
            ]

        case "Warner Bros":
            return [
                {
                    name: "Ben 10",
                    value: "Ben 10",
                    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b700c630-9435-4853-b567-d025115b827b/degakzn-576504c0-f8f6-40f0-b130-3a19544a0e9e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I3MDBjNjMwLTk0MzUtNDg1My1iNTY3LWQwMjUxMTViODI3YlwvZGVnYWt6bi01NzY1MDRjMC1mOGY2LTQwZjAtYjEzMC0zYTE5NTQ0YTBlOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yPaYT4GYrakHIDBEXastMExHC4xVn4_kUFmgvd5J7sA'
                }
            ]

        default:
            return []
    }
}

export function organizedComicsProperty(comics: string[] | null | undefined, publisher: string): string[] {
    if (comics === undefined || comics === null) {
        switch (publisher) {
            case "Marvel Comics":
                return [
                    "https://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff/clean.jpg",
                    "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/5d5aaf2e85d4d/clean.jpg",
                    "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                    "https://images.saymedia-content.com/.image/t_share/MTc0MzA1MTk3OTc4Mjk4MjM2/getting-into-comics-a-general-guide.jpg",

                    "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                    "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                    "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                ]

            case "DC Comics":
                return [
                    "http://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Justice_League_of_America_poster_Issue_1.jpg",

                    "https://cdn.europosters.eu/image/1300/julisteet/dc-comics-collage-i15088.jpg",
                    "https://d.newsweek.com/en/full/975273/heroes-crisis-tom-king-clay-mann-dc-comics.jpg",
                    "https://i.pinimg.com/originals/02/fb/e3/02fbe3db4a82b9b15c9afefe2b9799a9.png",
                    "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/05/9781608878321.jpg?fit=696%2C862&quality=80&strip=info&ssl=1",
                    "https://www.previewsworld.com/news_images/177217_889486_3.jpg",
                ]

            case "Shueisha":
                return [
                    "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                    "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                    "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                    "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg"
                ]

            case "IDW Publishing":
                return [
                    "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1643902801105-VUT092WGQWT7VUD66Y8M/Teenage+Mutant+Ninja+Turtles+Reborn+Vol.+1.jpg?format=1000w",
                    "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2066186.jpg",
                    "https://static.dc.com/dc/files/default_images/BMTMNT_tp_58cb173a8b8fd6.32122101.jpg",
                    "https://m.media-amazon.com/images/I/61O+P3mEyZL.jpg"
                ]

            case "George Lucas":
                return [
                    "https://cdn.marvel.com/u/prod/marvel/i/mg/c/00/5ff32d6aad522/clean.jpg",
                    "https://tools.toywiz.com/_images/_webp/_products/lg/apr221023.webp",
                    "https://i0.wp.com/MynockManor.com/wp-content/uploads/2020/11/Star-Wars-11-Full-Cover-Vol-2.jpeg?ssl=1",
                    "https://storage.googleapis.com/hipcomic/p/007ce152f644d7971541cb74253b82cf.jpg"
                ]

            default:
                return [
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                    "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000"
                ]

        }
    }

    return comics
}
/* teams */

export const ALLRACES = [
    { value: "All", name: "All races" },
    { value: "Human", name: "Human 🌎" },
    { value: "Metahuman", name: "Metahuman 🧬" },
    { value: "Alien", name: "Alien 👽" },
    { value: "Kryptonian", name: "Kryptonian 👽" },
    { value: "Symbiote", name: "Symbiote 👽" },
    { value: "Mutant", name: "Mutant 🧬" },
    { value: "Atlantean", name: "Atlantean 🐟" },
    { value: "Demon", name: "Demon 😈" },
    { value: "Android", name: "Android 🤖" },
    { value: "Cyborg", name: "Cyborg 🤖" },
    { value: "Animal", name: "Animal 🥦" },
    { value: "Zombie", name: "Zombie 🧟‍♂️🧟‍♀️" },
    { value: "Amazon", name: "Amazon 🥦" },
    { value: "Eternal", name: "Eternal 👽" },
    { value: "Inhuman", name: "Inhuman 🧬" },
    { value: "Asgardian", name: "Asgardian 👽" },
    { value: "Cosmic Entity", name: "Cosmic Entity 🌌" },
]

export const ALLALIGMENTS = [
    {
        value: "All",
        name: "All aligments"
    },
    {
        value: "good",
        name: "Hero 😃"
    },
    {
        value: "bad",
        name: "Villain 😡"
    },
    {
        value: "neutral",
        name: "Anti-hero 😐"
    },
]

export const ALLGENDERS = [
    {
        value: "All",
        name: "Both genders"
    },
    {
        value: "Female",
        name: "Female 🚺"
    },
    {
        value: "Male",
        name: "Male 🚹"
    },
]

export const ALLUNIVERSE = [
    { value: "All", name: "All universes" },
    { value: "Marvel Comics", name: "Marvel" },
    { value: "DC Comics", name: "DC" },
    { value: "Shueisha", name: "Shueisha" },
    { value: "Dark Horse Comics", name: "Dark Horse Comics" },
    { value: "George Lucas", name: "George Lucas" },
    { value: "IDW Publishing", name: "IDW Publishing" },
    { value: "Image Comics", name: "Image Comics" },
    { value: "Warner Bros", name: "Warner Bros" },
    // { value: "Angel", name: "Angel" },
    { value: "NBC - Heroes", name: "NBC - Heroes" },
    { value: "Tempest", name: "Tempest" },
    { value: "SyFy", name: "SyFy" },
    { value: "ABC Studios", name: "ABC Studios" },
    { value: "Icon Comics", name: "Icon Comics" },
    { value: "Universal Studios", name: "Universal Studios" },
    { value: "Gemini V", name: "Gemini V" },
    { value: "Star Trek", name: "Star Trek" },
    // { value: "Goliath", name: "Goliath" },
    // { value: "Deadpool", name: "Deadpool" },
    { value: "Wildstorm", name: "Wildstorm" },
    { value: "South Park", name: "South Park" },
    { value: "Sony Pictures", name: "Sony Pictures" },
    { value: "Vindicator II", name: "Vindicator II" },
    { value: "Image Comics", name: "Image Comics" },
    { value: "Titan Books", name: "Titan Books" },
    { value: "J. K. Rowling", name: "J. K. Rowling" },
    { value: "Microsoft", name: "Microsoft" },
    // { value: "She-Thing", name: "She-Thing" },
    { value: "Rebellion", name: "Rebellion" },
    { value: "J. R. R. Tolkien", name: "J. R. R. Tolkien" },
    { value: 'Carolco Pictures', name: 'Carolco Pictures' },
    { value: 'ARK corporation', name: 'ARK corporation' },
    { value: 'Paramount Pictures', name: 'Paramount Pictures' },
    { value: "-", name: "-" },
    // { value: null, name: "null" },
    { value: 'Real people', name: "Real people" },

    // 
]

export const randomImagesArray = [
    // 'https://static.wikia.nocookie.net/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20190428013057',
    // 'https://static.wikia.nocookie.net/marvel_dc/images/3/34/Teen_Titans_Vol_6_20_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20180726070928',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/9/90/Warlock_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20230516103920',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/d/d8/Wolverine_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20230516113350',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/b/b9/Spider-Man_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20180216053121',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/1/13/Avengers_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20180530082529',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/9/9a/Fantastic_Four_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20130101030841',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/0/06/Guardians_of_the_Galaxy_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20140529215102',
    // 'https://static.wikia.nocookie.net/marveldatabase/images/4/40/X-Men_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20130101030859',
    // 'https://static.wikia.nocookie.net/marvel_dc/images/3/34/Teen_Titans_Vol_6_20_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20180726070928',
    // 'https://static.wikia.nocookie.net/marvel_dc/images/2/21/Action_Comics_Vol_1_977_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20170413041035',
    // 'https://static.wikia.nocookie.net/marvel_dc/images/5/57/Justice_Society_of_America_Prime_Earth_0003.jpg/revision/latest/scale-to-width-down/150?cb=20190907203102',
    // 'https://static.wikia.nocookie.net/marvel_dc/images/b/b3/Justice_League_Vol_4_40_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20200421212518',
    // 'https://static.wikia.nocookie.net/marvel_dc/images/d/d5/Suicide_Squad_Vol_6_9_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20200922043238',

    "https://i.pinimg.com/222x/89/e6/bd/89e6bdf2b46971a60b20cfd714364273.jpg",
    "https://i.pinimg.com/564x/ab/7e/05/ab7e05dbab4bd3198ebd033d931ca712.jpg",
    "https://i.pinimg.com/564x/76/8d/d9/768dd930831c7898f0377d3c493b1a57.jpg",
    "https://i.pinimg.com/564x/82/b0/de/82b0de3dd7bac14970397e8f09e27f83.jpg",
    "https://i.pinimg.com/564x/fb/be/d7/fbbed74e1fb034b647aea0a319701e49.jpg",
    "https://i.pinimg.com/564x/78/32/83/7832839ad65916993e1519ce9211495b.jpg",
    "https://i.pinimg.com/564x/7b/36/fa/7b36fac139e067c3ad9c80769be1fe3e.jpg",
    "https://i.pinimg.com/564x/f3/c9/d1/f3c9d1ef8d3e0fb800e868bd78e77b8f.jpg",
    "https://i.pinimg.com/564x/6f/da/4e/6fda4e7db350b2177c5f30fa456c36aa.jpg",
    "https://i.pinimg.com/564x/fa/03/de/fa03de3f6c00ad4ac796958651bfc1a1.jpg",
    "https://i.pinimg.com/750x/7c/a9/51/7ca951ff8b9c82ec809d490165a51c7b.jpg",
]

export const batmanandSpider_manObj: Character[] = [
    {
        "powerstats": {
            "intelligence": 100,
            "strength": 26,
            "speed": 27,
            "durability": 50,
            "power": 47,
            "combat": 100
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "6'2",
                "188 cm"
            ],
            "weight": [
                "210 lb",
                "95 kg"
            ],
            "eyeColor": "blue",
            "hairColor": "black"
        },
        "biography": {
            "fullName": "Bruce Wayne",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Insider",
                "Matches Malone"
            ],
            "placeOfBirth": "Crest Hill, Bristol Township; Gotham County",
            "firstAppearance": "Detective Comics #27",
            "publisher": "DC Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Businessman",
            "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
        },
        "connections": {
            "groupAffiliation": "Batman Family, Batman Incorporated, Justice League, Justice League Dark, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern_Corps, Sinestro Corps, Justice League (Original)",
            "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward) Martha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
        },
        "images": {
            "xs": "https://i.imgur.com/VGkwQT2.png",
            "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg",
            "md": "https://w0.peakpx.com/wallpaper/978/478/HD-wallpaper-batman-comics-dc-superheros.jpg",
            "lg": "https://images.hdqwalls.com/download/batman-gotham-city-dc-comics-4k-25-1280x2120.jpg",
            "power": "https://i.pinimg.com/564x/ab/bc/b9/abbcb918a5f1746ff0887200e8a82506.jpg"
        },
        "_id": "63744cef81b33ddcb37e9172",
        "id": 70,
        "name": "Batman",
        "slug": "70-batman",
        "comics": [
            "https://m.media-amazon.com/images/I/81kMrMHlqKL._AC_UF1000,1000_QL80_.jpg",
            "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1622556757706-1OW4G4X7CTQ3JAA94YKO/Best+Comics+of+2021+Batman.jpg?format=1000w",
            "https://i.ebayimg.com/images/g/crYAAOSwFSFiCBuZ/s-l1600.jpg",
            "https://people.com/thmb/kyO7E3_ZKhGjtykUW4PFaPJnhe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(496x524:498x526)/Batman-Urban-Legends-e4761e7b416047799823026def684511.jpg",
            "https://m.media-amazon.com/images/I/51GeupQdetL.jpg",
            "https://i0.wp.com/thegeekiary.com/wp-content/uploads/2022/02/batman-issue-125-image.jpg?resize=590%2C895&ssl=1",
            "https://i0.wp.com/batman-news.com/wp-content/uploads/2023/01/Batman-Urban-Legends-23-1.jpg?resize=1068%2C1643&quality=80&strip=info&ssl=1"
        ]
    },
    {
        "powerstats": {
            "intelligence": 90,
            "strength": 55,
            "speed": 67,
            "durability": 75,
            "power": 74,
            "combat": 85
        },
        "appearance": {
            "gender": "Male",
            "race": "Human",
            "height": [
                "5'10",
                "178 cm"
            ],
            "weight": [
                "165 lb",
                "74 kg"
            ],
            "eyeColor": "Hazel",
            "hairColor": "Brown"
        },
        "biography": {
            "fullName": "Peter Parker",
            "alterEgos": "No alter egos found.",
            "aliases": [
                "Spiderman",
                "Bag-Man",
                "Black Marvel",
                "Captain Universe",
                "Dusk",
                "Green Hood",
                "Hornet",
                "Mad Dog 336",
                "Peter Palmer",
                "Prodigy",
                "Ricochet",
                "Scarlet Spider",
                "Spider-Boy",
                "Spider-Hulk",
                "Spider-Morphosis"
            ],
            "placeOfBirth": "New York, New York",
            "firstAppearance": "Amazing Fantasy #15",
            "publisher": "Marvel Comics",
            "alignment": "good"
        },
        "work": {
            "occupation": "Freelance photographer, teacher",
            "base": "New York, New York"
        },
        "connections": {
            "groupAffiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four, Spider-Army, Young avengers, Future Foundation",
            "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
        },
        "images": {
            "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/620-spider-man.jpg",
            "sm": "https://i.pinimg.com/736x/30/04/97/3004974506e8bd36809a0961c42b4a16--copic-markers-copics.jpg",
            "md": "https://i.pinimg.com/564x/1f/c1/99/1fc199401a38168453969044229d6f78.jpg",
            "lg": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/01/spider-man-symbiote-perching.jpg",
            "mdi": "https://i.pinimg.com/564x/06/52/ba/0652ba72707aa5651d683335da43f8c7.jpg",
            "symbiote": "https://i.pinimg.com/564x/b6/e5/f2/b6e5f294604db206c0c617000ba28eb7.jpg"
        },
        "_id": "63744cef81b33ddcb37e931a",
        "id": 620,
        "name": "Spider-Man",
        "slug": "620-spider-man",
        "comics": [
            "https://i.annihil.us/u/prod/marvel/i/mg/8/e0/57a25305eeaa5/portrait_uncanny.jpg",
            "https://i.annihil.us/u/prod/marvel/i/mg/4/f0/5cfaa9ca8a2bd/clean.jpg",
            "https://i.annihil.us/u/prod/marvel/i/mg/c/50/6149f7a0afd4c/clean.jpg",
            "https://cdn.shopify.com/s/files/1/0051/8805/9206/products/The-Amazing-Spider-Man-La-Coleccion-Definitiva-Libro-2-cover_473x.jpg?v=1645236119",
            "https://cdn.shopify.com/s/files/1/0051/8805/9206/products/Marvel-Basicos-The-Amazing-Spider-Man-Cual-es-el-Costo-de-la-Victoria-cover_462x.jpg?v=1656644031",
            "https://i.annihil.us/u/prod/marvel/i/mg/a/10/5beca8756966a/clean.jpg"
        ]
    }
]

export const DEFAULT_HERO_SECTION = {
    imgs: [
        "https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif",
        "https://cdn.mos.cms.futurecdn.net/yD2Dhn28xkm6iigPB8v6qA.jpg",
        "https://www.cardboard-display-stand.com/Content/upload/2018304635/201808201648017571975.png"

    ],
    title: "",
    description: ""
}

export const DEFAULT_SEARCHPARAMS = {
    viewFavorites: 'false',
    characterName: "",
    howMany: "8",
    asHowManyAsPossible: "false",
    side: "All",
    universe: "All",
    team: "All",
    gender: "All",
    race: "All",
    includeNameOrExactName: "true",
    characterOrFullName: "false",
    charactersFilteredIds: [620, 70, 846],
    selectedCharacterId: "620",
    isDialogOpen: "false"
}

export function getSearchParamsFormatted(searchParams: URLSearchParams) {
    return {
        viewFavorites: searchParams.get("viewFavorites") === "" ? true : searchParams.get("viewFavorites") === "true",
        characterName: searchParams.get("characterName") ?? "",
        howMany: parseInt(searchParams.get("howMany") ?? "8"),
        asHowManyAsPossible: searchParams.get("asHowManyAsPossible") === "true",
        side: searchParams.get("side") ?? "All",
        universe: searchParams.get("universe") ?? "All",
        team: searchParams.get("team") ?? "All",
        gender: searchParams.get("gender") ?? "All",
        race: searchParams.get("race") ?? "All",
        includeNameOrExactName: searchParams.get("includeNameOrExactName") === "true",
        characterOrFullName: searchParams.get("characterOrFullName") === "true",
        charactersFilteredIds: searchParams.get("charactersFilteredIds") ?? JSON.stringify([620, 70, 846]),
        selectedCharacterId: parseInt(searchParams.get("selectedCharacterId") ?? "620"),
        isDialogOpen: searchParams.get("isDialogOpen") === "true"
    }
}