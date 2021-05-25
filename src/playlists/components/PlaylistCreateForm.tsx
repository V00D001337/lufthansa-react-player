import React, { createRef } from 'react'
import { Playlist } from '../../model/Playlist'

interface Props {
    cancel(): void;
    add(draft: Playlist): void
}


export const PlaylistCreateForm = (props : Props) => {
    const nameInput = createRef<HTMLInputElement>()
    const publicInput = createRef<HTMLInputElement>()
    const descInput = createRef<HTMLTextAreaElement>()

    const create = () => {
        const draft: Playlist = {
            id: Math.random().toString(36).substring(7),
            name: nameInput.current?.value ?? '',
            public: publicInput.current?.checked ?? false,
            description: descInput.current?.value ?? '_',
        }
        props.add(draft);
    }


    return (
        <div>
            <h3>PlaylistCreateForm</h3>

            <div className="form-group">
                <label>Name:</label>
                <input ref={nameInput} type="text" className="form-control"/>
            </div>

            <div className="form-check">
                <label><input ref={publicInput} type="checkbox" className="form-check-input"/>Public</label>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea ref={descInput} className="form-control"></textarea>
            </div>
            <button className="btn btn-danger" onClick={props.cancel}>Cancel</button>
            <button className="btn btn-success" onClick={create}>Save</button>
        </div>
    )
} 