import { useContext } from "react"
import { CatContext } from "../../Context/CatContext"
import GridArea from "../../shared-elements/grid-area/GridArea"
import SearchBar from "../../shared-elements/search-bar/search-bar"

// Styled Components
import styled from "styled-components"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
// 



const Dislikes = () => {
    const {DislikedKey} = useContext(CatContext)
    const [disliked, setToDisliked] = DislikedKey
    return (
        <StyledFlexBox>
            <SearchBar />
            <StyledContentArea>
                <StyledFlexBox
                    align="flex-start"
                    jc="flex-start"
                    fd="row"
                    minHeigth="40px">

                    <StyledButtonBack />
                    <StyledButton
                        noHover
                        isActive={true}
                        textContent="DISLIKES" />
                </StyledFlexBox>
                <GridArea
                    noHover={true}
                    content={disliked}
                />
            </StyledContentArea>
        </StyledFlexBox>
    )
}

export default Dislikes