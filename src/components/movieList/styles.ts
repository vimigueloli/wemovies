import styled from 'styled-components'

export const Container = styled.div`
    padding-bottom: 40px;
    max-width: 1080px;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%; 
    height: 100%;
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

export const EmptyContainer = styled.div`
    width: 100%; 
    height: 596px;
    padding: 64px; 
    background-color: white;
    border-radius: 4px;
`;