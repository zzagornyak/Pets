import styled from "styled-components"

 const StyledFlexBox = styled.section`
display: flex;
flex-direction: ${props => props.fd || "column"};
justify-content: ${props => props.jc || "space-between"} ;
align-items: ${props => props.align || "stretch"};
width: ${props => props.width || "100%"} ;
min-height: ${props => props.minHeigth || "100%"};
height: ${props => props.heigth || "1px"};
box-sizing: border-box;
position: relative;

   
`

export default StyledFlexBox