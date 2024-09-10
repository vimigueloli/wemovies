import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1080px;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%; 
`
export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
    @media (max-width: 1082px) {
        justify-content: center;
    }
`

export const WhiteContainer = styled.div`
    width: 100%; 
    padding: 24px; 
    background-color: white;
    border-radius: 4px;
    @media (max-width: 350px) {
        padding: 8px;
    }
`;

export const EmptyContainer = styled.div`
    width: 100%; 
    height: 596px;
    padding: 64px; 
    background-color: white;
    border-radius: 4px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;

`