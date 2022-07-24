import { useEffect, useContext } from "react"

import GridArea from "../../shared-elements/grid-area/GridArea"
import SearchBar from "../../shared-elements/search-bar/search-bar"

// Styled Components
import styled from "styled-components"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
// 
import { CatContext } from "../../Context/CatContext"

import useCatServices from "../../services/CatServices"

const Search = () => {
    const { SearchKey, BreedsNamesKey } = useContext(CatContext)
    const [searchTerm, setSearchTerm] = SearchKey
    const [breadsNames, setBreadsNames] = BreedsNamesKey

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
                        textContent="SEARCH" />
                </StyledFlexBox>
                <StyledSpan>
                    Search results for: <strong>{searchTerm}</strong>
                </StyledSpan>
                <GridArea
                    withBreeds
                    content={breadsNames.filter((item) => {
                        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    })}
                />
            </StyledContentArea>

        </StyledFlexBox>


    )
}



export default Search

const StyledSpan = styled.span` 
    margin-top: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #8C8C8C;
    strong {
        font-weight: 500;
        color: #1D1D1D;
    }

`