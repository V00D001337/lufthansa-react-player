import styled, { css, keyframes } from 'styled-components'

interface Props {
    
}

export const NewInput = styled.input<Props>`
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid #746f6b;
    border-radius: 4px;
`