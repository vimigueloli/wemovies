import styled from 'styled-components'

export const NumberBox = styled.div`
    width: 62px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TransparentButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
    :hover{
        transition: opacity 0.5s ease-in-out;
        opacity: 0.4;
    }
`

