import React, { useState } from 'react'

interface Props {
    onSearch(name: string): void
}

export const SearchForm = (props: Props) => {
    const [inputSearch, setInputSearch] = useState('')

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" 
                onChange={event => setInputSearch(event.target.value)}
                onKeyUp={event => event.code === "Enter" && props.onSearch(inputSearch)}
                />
                <button className="btn btn-outline-secondary" type="button" onClick={() => props.onSearch(inputSearch)}>Search</button>
            </div>
        </div>
    )
} 