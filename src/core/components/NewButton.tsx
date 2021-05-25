import styled, { css, keyframes } from 'styled-components'

{/* <MyButton primary={true} onClick={...}> <h1>...</h1> </MyButton> */ }

interface Props {
  primary: boolean
}

const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

export const NewButton = styled.button<Props>`
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    ${props => props.primary === true && css`
    background: black;
    font-weight:bold;
    `}
    ${props => props.primary === false && css`
    background: #bada55;
    color: black;
    font-weight:bold;
    `}
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;

    &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

&:active {
    color: #000
}

&:active:after {
    background: transparent;
}

&:hover:before {
    opacity: 1;
}

&:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    ${props => props.primary === true && css`
    background: black;
    `}
    ${props => props.primary === false && css`
    background: #bada55;
    `}
    left: 0;
    top: 0;
    border-radius: 10px;
}
`
