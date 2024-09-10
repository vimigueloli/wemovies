import styled from 'styled-components'

export const ItemsList = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 24px 16px;
    padding-bottom: 48px;

    @media (max-width:850px) {
        display: flex;
        flex-wrap: wrap;  
        justify-content: space-around ;
    }

`;

interface LineProps {
  color?: string;
  bottom?: string;
  top?: string;
  height?: string;
  width?: string;
  left?: string;
  right?: string;
  justify?: string;
  align?: string;
  noPrint?: boolean;
  gap?: string
  direction?: string;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  wrap?: boolean;
}


export const Line = styled.div<LineProps>`
  display: flex;
  width: ${props=> props.width? props.width : 'auto'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-direction: ${props=> props.direction? props.direction : 'row'};  
  background-color: ${props=> props.color || '#ffffff00'};
  margin-bottom: ${props=> props.bottom || '0'};
  margin-top: ${props=> props.top || '0'};
  height: ${props=> props.height || 'auto'};
  padding-left: ${props=> props.left || '0'};
  padding-right: ${props=> props.right || '0'};
  flex-wrap: ${props=> props.wrap? 'wrap' :  'no-wrap'};
  ${props => props.noPrint && `@media print { display: none; }`};
  ${props => props.mobileOnly && `@media (min-width: 1082px) { display: none; }`};
  ${props => props.desktopOnly && `@media (max-width: 1082px) { display: none; }`};
  ${props => props.gap && `gap: ${props.gap}`};
`;

interface TextProps{
    color?: string;
    size?: string;
    weight?: string;
    align?: string;
    width?: string;
    left?: string;
    right?: string;
}

export const Text = styled.div<TextProps>`
    width: ${props=> props.width? props.width : 'auto'};
    color: ${props=> props.color || '#ffffff'};
    padding-left: ${props=> props.left || '0'};
    padding-right: ${props=> props.right || '0'};
    font-size: ${props=> props.size || '14px'};
    font-weight: ${props=> props.weight || 'normal'};
    text-align: ${props=> props.align || 'left'};
    font-family: 'Open Sans', sans-serif;
    line-height: 16.30px
`;

interface ButtonProps{
    size?: string;
    width?: string;
    color?: string;
    background?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${props=> props.width? props.width : '180px'};
    height: 40px;
    background-color: ${props=> props.background? props.background : '#009EDD'};
    border-radius: 4px;
    color: ${props=> props.color? props.color : 'white'};
    border: none;
    font-size: ${props=> props.size? props.size : '14px'};
    padding: 7px;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
    :hover{
        transition: opacity 0.5s ease-in-out;
        opacity: 0.4;
    }
`;