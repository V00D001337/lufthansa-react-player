import { Reducer } from "redux"
import { Playlist } from "../../model/Playlist";

export interface PlaylistsState {
    items: Playlist[]
    selectedId?: Playlist['id']
}

type PLAYLISTS_LOAD = {
    type: 'PLAYLISTS_LOAD'; payload: { items: Playlist[]; };
};

type PLAYLISTS_UPDATE = {
    type: 'PLAYLISTS_UPDATE'; payload: { playlist: Playlist; };
};

type PLAYLISTS_ADD = {
    type: 'PLAYLISTS_ADD'; payload: { draft: Playlist; };
};

type PLAYLISTS_SELECT = {
    type: 'PLAYLISTS_SELECT'; payload: { id?: Playlist['id']; };
};

type PLAYLISTS_REMOVE = {
    type: 'PLAYLISTS_REMOVE'; payload: { id?: Playlist['id']; };
};


type Actions =
    | PLAYLISTS_LOAD
    | PLAYLISTS_SELECT
    | PLAYLISTS_UPDATE
    | PLAYLISTS_ADD
    | PLAYLISTS_REMOVE

const initialState: PlaylistsState = {
    items: [],
    selectedId: undefined
}

const reducer: Reducer<PlaylistsState, Actions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'PLAYLISTS_LOAD': return {
            ...state, items: action.payload.items
        }
        case 'PLAYLISTS_SELECT': return {
            ...state, selectedId: action.payload.id
        }
        case 'PLAYLISTS_ADD': return {
            ...state, items: [...state.items, action.payload.draft]
        }
        case 'PLAYLISTS_REMOVE': return {
            ...state, items: state.items.filter(p => p.id !== action.payload.id)
        }
        case 'PLAYLISTS_UPDATE': {
            const draft = action.payload.playlist
            return {
                ...state, items: state.items.map(p => p.id === draft.id ? draft : p)
            }
        }
        default: return state
    }
}
export default reducer


export const playlistsLoad = (items: Playlist[]): PLAYLISTS_LOAD => ({
    type: 'PLAYLISTS_LOAD', payload: { items }
})
export const playlistsSelect = (id: Playlist['id']): PLAYLISTS_SELECT => ({
    type: 'PLAYLISTS_SELECT', payload: { id }
})
export const playlistsRemove = (id: Playlist['id']): PLAYLISTS_REMOVE => ({
    type: 'PLAYLISTS_REMOVE', payload: { id }
})
export const playlistsUpdate = (playlist: Playlist): PLAYLISTS_UPDATE => ({
    type: 'PLAYLISTS_UPDATE', payload: { playlist }
})
export const playlistsAdd = (draft: Playlist): PLAYLISTS_ADD => {
    draft.id = (~~(Math.random() * Date.now())).toString()

    return ({
        type: 'PLAYLISTS_ADD', payload: { draft }
    })
}