import { DEFAULT_SEARCHPARAMS, getSearchParamsFormatted } from '../constants';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'

export function useSearchParamsForTheApp() {
    const [searchParams, setSearchParams] = useSearchParams(JSON.parse(localStorage.getItem("CHARACTERS_APP_SEARCHPARAMS") ?? JSON.stringify(DEFAULT_SEARCHPARAMS)))

    useEffect(() => {
        localStorage.setItem("CHARACTERS_APP_SEARCHPARAMS", JSON.stringify(getSearchParamsFormatted(searchParams)))
    }, [searchParams]);

    return { ...getSearchParamsFormatted(searchParams), setSearchParams };
}