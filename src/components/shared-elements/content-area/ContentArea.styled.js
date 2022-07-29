import styled from "styled-components"

 const StyledContentArea = styled.div`
    padding: 20px 20px 14px 20px;
    background-color: ${({theme}) => theme.whiteLightBlack};
    height: 100%;
    width: 100%;
    margin-top: 10px;
    border-radius: 20px;
    overflow: auto;
    position: relative;
    
`
export default StyledContentArea