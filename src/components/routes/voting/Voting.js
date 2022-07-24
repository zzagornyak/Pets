import { useEffect } from "react"


import SearchBar from "../../shared-elements/search-bar/search-bar"
import VotingContent from "./VotingContent"

// Styled Components
import styled from "styled-components"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
// 


import useCatServices from "../../services/CatServices"

const Voting = () => {
   

    return (
    
        <StyledFlexBox>

            <SearchBar/>

            <StyledContentArea>

                <StyledFlexBox 
                    align="flex-start"
                    jc="flex-start" 
                    fd="row"
                    minHeigth="40px">

                    <StyledButtonBack/>
                    <StyledButton 
                        noHover 
                        isActive={true} 
                        textContent="VOTING"  />
                </StyledFlexBox>

                <VotingContent/>

            </StyledContentArea>

        </StyledFlexBox>
    
        
    )
}

const StyledImgContainer = styled.div


export default Voting