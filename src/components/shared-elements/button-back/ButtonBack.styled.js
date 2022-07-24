import styled from "styled-components";
import Arrow from "./button-back.svg"

 const StyledButtonBack = () => {
    return(
        <StyledButton onClick={() => {
            window.history.back()
        }}>
            <img src={Arrow} alt="" />
        </StyledButton>
    )
}


const StyledButton = styled.button`
min-width: 40px;
min-height: 40px;
border-radius: 10px;
background-color: ${({theme}) => theme.pinkDarkPink};
margin-right: 10px;
&:hover {
    background-color: #FF868E;
    img{
        filter: grayscale(1) brightness(1000%);
    }
}
img {
    margin: auto;
}
`

export default StyledButtonBack