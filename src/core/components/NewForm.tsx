import React, { useState } from 'react'
import styled from 'styled-components';
import { useInput } from '../hooks/useInput';
import { NewButton } from './NewButton';
import { NewInput } from './NewInput';

export const NewForm = () => {
    const [message, setMessage] = useState('')

    
    const onSave = () => {
        if (!firstInput.value || !secondInput.value)
            setMessage('wypełnij oba pola')
        else {
            console.log(firstInput.value, secondInput.value)
        }

    }
    
    const validate = (value: string) => {
        if (value.length > 3){
            setMessage('')
        }   
        else {
            setMessage('wypełnij oba pola')
        }
    }

    const firstInput = useInput('', validate)
    const secondInput = useInput('', validate)

    return (
        <div>
            <div className="form-group">
                <Label>Name:</Label>
                <NewInput type="text" 
                className="form-control"
                value={firstInput.value} 
                onChange={firstInput.onChange}
                onBlur={firstInput.onBlur}/>
                <Label>Description:</Label>
                <NewInput type="text" 
                className="form-control"
                value={secondInput.value}
                onChange={secondInput.onChange}
                onBlur={e => validate(e.target.value)}/>
            </div>
            <NewButton primary={true} onClick={onSave}>Save</NewButton>
            {message !== '' && <div className="alert alert-info">{message}</div>}
        </div>
    )
}

const Label = styled.label`
    color: #1DB954;
    font-family: 'Raleway',sans-serif;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
`;
