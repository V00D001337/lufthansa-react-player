import React from 'react'
import { fetchArtists, useFetch } from '../../core/hooks/useSearch'
import { ArtistGrid } from '../components/ArtistGrid'
import { SearchForm } from '../components/SearchForm'

interface Props { }

export const ArtistSearchView = (props: Props) => {
    const [{ isLoading, message, results }, setQuery] = useFetch(fetchArtists)

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm onSearch={setQuery} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {isLoading && <p className="alert alert-info">Loading</p>}
                    {message && <p className="alert alert-danger">{message}</p>}

                    {results && <ArtistGrid artists={results} />}
                </div>
            </div>
        </div>
    )
}

