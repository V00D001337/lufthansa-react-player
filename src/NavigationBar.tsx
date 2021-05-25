import React, { useState } from 'react'

interface Props {
    changeMode(mode: 'playlists' | 'searchAlbums'| 'searchArtists'): void
}

export const NavigationBar = (props: Props) => {
    const [selected, setSelected] = useState('playlists')

    const switchMode = (mode: 'playlists' | 'searchAlbums'| 'searchArtists') => {
        props.changeMode(mode)
        setSelected(mode)
    }

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={`nav-link ${selected === 'playlists' ? 'active' : ''}`} href="#" onClick={(e) => switchMode('playlists')}>Playlists</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${selected === 'searchAlbums' ? 'active' : ''}`} href="#" onClick={(e) => switchMode('searchAlbums')}>Album Search</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link ${selected === 'searchArtists' ? 'active' : ''}`} href="#" onClick={(e) => switchMode('searchArtists')}>Artist Search</a>
                </li>
                <li className="nav-item"></li>
            </ul>
        </div>
    )
}