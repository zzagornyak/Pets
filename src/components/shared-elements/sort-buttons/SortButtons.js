// SortButton images
import sortBtn from "../../images/sort-buttons/sort.svg"
import sortBtnHover from "../../images/sort-buttons/sortHover.svg"
import sortRevBtn from "../../images/sort-buttons/sortReversed.svg"
import sortRevBtnHover from "../../images/sort-buttons/sortReversedHover.svg"
import { useState, useEffect, useContext } from "react"
import { BreedsContext } from "../../Context/BreedsContext"
import styled from "styled-components"
import { css } from "styled-components"

const SortButtons = ({ isSortReversed, setSortReversed}) => {

    return (
        <>
            <StyledBtn 
                sortStyle={"reverse"}
                isSortReversed={isSortReversed}
                onClick={() => setSortReversed(true)}
                default={sortRevBtn}
                hover={sortRevBtnHover}
            />
            <StyledBtn
                sortStyle={"default"}
                isSortReversed={isSortReversed}
                onClick={() => setSortReversed(false)}
                default={sortBtn}
                hover={sortBtnHover}
            />

        </>
    )

}
export default SortButtons

const StyledBtn = styled.button`
    min-width: 40px;
    min-height: 40px;
    border-radius: 10px;
    background-image: url(${props => props.default});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    cursor: pointer;
    background-color: ${({theme}) => theme.grayLightBlack};
    &:hover {
        background-image: url(${props => props.hover});
        border: 2px solid #FBE0DC;
    }

    ${props => props.sortStyle === "default" ? 
        css`
            ${props => props.isSortReversed === false ? "pointer-events: none"  : null}
        ` 
        : null}
    ${props => props.sortStyle === "reverse" ? 
        css`
            ${props => props.isSortReversed === true ? "pointer-events: none"  : null}
        ` 
        : null}
`