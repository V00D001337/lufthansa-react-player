import React from 'react'
import { Artist } from '../../model/Search'


interface Props {
    artist: Artist
}

export const ArtistCard = ({ artist }: Props) => {
    return (
        <div className="card h-100">
            <img src = {artist.images[0]?.url} className="card-img-top" alt={artist.name} />
            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
            </div>
        </div>
    )
}