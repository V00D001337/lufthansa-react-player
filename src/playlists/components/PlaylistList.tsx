import React from 'react'
import {Playlist} from '../../model/Playlist'

interface Props {
    playlists: Playlist []
    selectedId?: string
    onSelected(id: Playlist['id']): void
    onDelete(id: Playlist['id']): void
}


export const PlaylistList = (props: Props) => {
    return (
        <div className="list-group">
            {props.playlists.map((item, index) =>
                <div className={`list-group-item ${props.selectedId === item.id ? 'active' : ''}`}
                onClick={() => props.onSelected(item.id)}
                key={item.id}>{item.name}
                <span style={{float: "right", cursor:"pointer"}} className="close" onClick={() => props.onDelete(item.id)}>&times;</span>
                </div>
            )}
        </div>
    )
}