import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { idText } from 'typescript'
import { fetchAlbumById } from '../../core/hooks/usePlaylists'
import { playlistsSelect } from '../../core/reducers/PlaylistsReducer'
import { fetchAlbumFailed, fetchAlbumStart, fetchAlbumSuccess, selectAlbum, selectAlbumFetchState } from '../../core/reducers/SearchReducer'
import { tracksAddToPlaylist } from '../../core/reducers/TracksReducer'
import { Playlist } from '../../model/Playlist'
import { SimpleTrack, Track } from '../../model/Search'
import SelectPlaylist from '../../playlists/components/SelectPlaylist'
import { AppState } from '../../store'
import { AlbumCard } from '../components/AlbumCard'

interface Props {

}

export const AlbumDetails = (props: Props) => {
    const dispatch = useDispatch()
    const { isLoading, message } = useSelector(selectAlbumFetchState)
    const album = useSelector(selectAlbum)
    const playlists = useSelector((state: AppState) => 
    state.playlists.items)
    const selectedPlaylist = useSelector((state: AppState) =>
    state.playlists.items.find(p => p.id === state.playlists.selectedId))
    const { album_id } = useParams<{ album_id: string }>()

    useEffect(() => { 
        dispatch(playlistsSelect(''))
        dispatch(fetchAlbumStart(album_id))
        fetchAlbumById(album_id)
            .then(data => { dispatch(fetchAlbumSuccess(data)) })
            .catch(error => { dispatch(fetchAlbumFailed(error)) })
    }, [album_id])

    const onSelectPlaylist = (playlist_id: Playlist['id']) => {
        dispatch(playlistsSelect(playlist_id))
    }

    const onAddTrack = (track: Track) => {
        const simpleTrack: SimpleTrack = {
            id: track.id,
            name: track.name
        }
        dispatch(tracksAddToPlaylist(simpleTrack))
    }

    if (isLoading) { return <Loading /> }

    if (message) {
        return <p className="alert alert-danger">{message}</p>
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <small className="text-muted">{album_id}</small>
                    <h1>{album?.name}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {album && <AlbumCard album={album} />}
                </div>
                <div className="col">

                    <dl>
                        <dt>Album name:</dt>
                        <dd>{album?.name}</dd>

                        <dt>Artist:</dt>
                        <dd>{album?.artists[0]?.name}</dd>
                    </dl>
                    {console.log(album)
                    }
                    {/* 
                        TODO:
                            - search results - clicking PhilCollins redirects here with ID
                            - show list of playlists below
                            - dispatch select playlist 
                            - show tracks
                            - on button click add track to selected playlist
                    */}

                    <SelectPlaylist playlists={playlists} onSelect={onSelectPlaylist} />

                    <h3>Tracks</h3>
                    {album?.tracks?.items.map(track =>
                        <div>{track.name} {track.name && selectedPlaylist?.id && <button className='btn btn-success' onClick={() => onAddTrack(track)}>(+) add to selected playlist</button>}</div>
                    )}


                </div>
            </div>
        </div>
    )
}

export const Loading = () => <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
    </div>
</div>