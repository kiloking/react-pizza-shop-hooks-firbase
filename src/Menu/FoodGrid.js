import styled from 'styled-components'
import {Title} from '../Styles/title'

export const FoodGrid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
`

export const FoodLabel = styled(Title)`
    position:absolute;
    background-color:rgba(255,255,255,0.8);
    padding:2px 5px;
`

export const Food = styled.div`
    height:100px;
    font-size:20px;
    background-size:cover;
    background-position:center;
    background-image: ${({img}) => `url(${img})` } ;
    filter:contrast(70%);
    padding:10px;
    border-radius:7px;
    transition:0.3s;
    margin-top:0px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
        filter:contrast(100%)
        margin-top:-5px;
    }

`
