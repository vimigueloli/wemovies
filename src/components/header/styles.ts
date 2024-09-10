import styled from 'styled-components'

export const Container = styled.header`
    width: 100%; 
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    padding-left: 16px;  
    padding-right: 16px;
`;

export const NavButton = styled.button`
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
export const HideOnMobile = styled.div`
    display: block;
    @media (max-width:723px) {
        display: none;
    }
`