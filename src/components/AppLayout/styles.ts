import styled from "styled-components";

export const BG = styled.div`
    background-color: #2f2e41;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const Content = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    @media (max-width: 1500px) {
        width: 75%;
    }
    @media (max-width: 1100px) {
        width: 85%;
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const OpacityHover = styled.div`
    opacity: 1;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover{
        opacity: 0.5;
    }

`;