import styled from 'styled-components'

export  const Container = styled.div`
    background-color: white;
    border-radius: 4px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 32px;

    @media( max-width: 1000px){
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        overflow-x: auto;
    }
`;

export const ColorHover = styled.div`
    color: #999999;
    cursor:pointer;
    transition-duration: 0.5s;
    :hover{
        color: #009EDD;
        transition:all;
        transition-duration: 0.5s;
    }
`;

export const Separator = styled.div`
    border-bottom: solid 1px #999999;
    height: 1px;
    width: auto;
    margin-top: 15px;
    margin-bottom: 12px;
    margin-left:12px;
    margin-right:12px
`;

export const NullContainer = styled.div`
    border-radius: 4px;
    background-color: white;
    width:100%;
    height:80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    @media (max-width: 1000px) {
        margin-left: 12px;
        margin-right: 12px;
        height: min-content;
        padding: 8px;
    }
`;

export const ImageSizer = styled.div`
    height: 264px;
    width: 300px;
    position: relative;
    border-bottom: solid 1px #999999;
    @media (max-width:500px) {
        height: 100;
        width: 150px
    }
`;

export const ResponsiveConrainer = styled.div`
    width: 100;
    @media (max-width: 670px) {
        width: 600px;
    }
`;