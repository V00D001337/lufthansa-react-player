import React, { useEffect, useState } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistEditForm } from '../components/PlaylistEditForm'
import { PlaylistList } from '../components/PlaylistList'
import {Playlist} from '../../model/Playlist'
import { PlaylistCreateForm } from '../components/PlaylistCreateForm'

interface Props {

}

const playlists: Playlist[] = [
    {
        id: '123',
        name: 'plejlista123',
        public: true,
        description: 'Lubie placki'
    },
    {
        id: '234',
        name: 'plejlista234',
        public: false,
        description: 'Lubie placki'
    },
    {
        id: '567',
        name: 'plejlista567',
        public: true,
        description: 'Lubie placki'
    }
]


export const PlaylistsView = (props: Props) => {
    const [forceUpdate, setForceUpdate] = useState(Date.now())
    const [selectedId, setSelectedId] = useState<string | undefined>()
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>()
    const [mode, setMode] = useState<'details' | 'form' | 'create'>('details')
    const [list, setList] = useState<Playlist[]>(playlists)


    const save = (draft: Playlist) => {
        const newData = list.map((item) => {
            return item.id === draft.id ? draft : item
        })
        setList(newData);
        setMode('details');
    }

    const onDelete = (id: Playlist['id']) => {
        const newData = list.filter((item) => item.id !== id);
        setList(newData);
        setMode('details')
    }

    const onCreate = (draft: Playlist) => {
        const newData = list.slice();
        newData.push(draft);
        setList(newData);
        setSelectedId(draft.id);
        setMode('details')
    }

    const edit = () => {
        setMode('form')
    }

    const cancel = () => {
        setMode('details')
    }

    const create = () => {
        setMode('create')
    }

    useEffect(() => {
        setSelectedPlaylist(list.find(p => p.id === selectedId))
    }, [selectedId, forceUpdate, list])

    return (
        <div>
            <h4>PlaylistsView</h4>
            <div className="row">
                <div className="col">
                    <PlaylistList 
                    playlists = {list}
                    selectedId={selectedId}
                    onSelected={id => {
                        setSelectedId(id)
                    }}
                    onDelete={onDelete}
                    />
                    {mode !== 'create' && <button className="btn btn-info btn-block mt-4" onClick={create}>Create New Playlist</button>}
                </div>
                <div className="col">
                    {selectedPlaylist && mode ==='details' && <PlaylistDetails edit={edit} playlist={selectedPlaylist}/>}
                    {selectedPlaylist && mode === 'form' && <PlaylistEditForm save={save} cancel={cancel} playlist={selectedPlaylist} />}
                    {mode === 'create' && <PlaylistCreateForm cancel={cancel} add={onCreate}/>}
                    {!selectedPlaylist && mode !== 'create' &&<div className="alert alert-info">Please select playlist</div>}
                </div>
            </div>
        </div>
    )
}