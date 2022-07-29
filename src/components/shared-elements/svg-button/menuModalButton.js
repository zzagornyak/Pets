import styled from "styled-components"

const MenuModalBtn = styled.button`
display: none;
border-radius: 20px;
background-position: center;
background-repeat: no-repeat;
min-width: 60px;
height: 60px;
background-color: ${({theme}) => theme.whiteLightBlack};
background-image: url(${props => props.defaultImg});
cursor: pointer;
&:hover  {
    background-color: #FBE0DC;
    background-image: url(${props => props.defaultImg})
} 
@media (max-width: 1200px) {
    display: block;
}
`
export default MenuModalBtn