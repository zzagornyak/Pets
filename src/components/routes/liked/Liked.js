import { useEffect } from "react"


import SearchBar from "../../shared-elements/search-bar/search-bar"
import GridArea from "../../shared-elements/grid-area/GridArea"
// Styled Components
import styled from "styled-components"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
// 


import useCatServices from "../../services/CatServices"
import React from 'react'
import { useContext } from "react"
import { CatContext } from "../../Context/CatContext"
    
const Likes = () => {
    const {LikedKey} = useContext(CatContext)
    const [liked, setToLiked] = LikedKey
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
                        textContent="LIKES" />
                </StyledFlexBox>
                <GridArea
                    noHover={true}
                    content={liked}
                />
            </StyledContentArea>
        </StyledFlexBox>
    )
}

export default Likes