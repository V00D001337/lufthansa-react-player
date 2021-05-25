import React from 'react'
import { AlbumGrid } from '../components/AlbumGrid'
import { SearchForm } from '../components/SearchForm'
import { useSearchAlbums } from '../../core/hooks/useSearchAlbums'
import { fetchAlbums, useFetch } from '../../core/hooks/useSearch'

interface Props { }

export const MusicSearchView = (props: Props) => {
    const [{ isLoading, message, results }, setQuery] = useFetch(fetchAlbums)

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

                    {results && <AlbumGrid albums={results} />}
                </div>
            </div>
        </div>
    )
}
