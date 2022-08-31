import styled from 'styled-components'

interface HoverProps{
    disabled?: boolean
}

export const OpacityHover= styled.div<HoverProps>`
    color: ${props => props.disabled? '#999999' : '#009EDD'} ;
    opacity: 1;
    cursor: pointer;
    margin-right: 8px;
    :hover{
        opacity: 0.50;
    }
`;

export const Input = styled.input`
    width: 42px;
    height: 27px;
    border-radius: 4px;
    padding-left: 4px;
    border: solid 1px #D9D9D9;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    margin-right: 8px;
`;
