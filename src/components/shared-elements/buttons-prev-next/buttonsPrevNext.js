// TODO: скачки кнопок пагинации

import React from 'react'

import {css} from "styled-components"
import styled from 'styled-components'

import BtnPrevDefault from "../../images/page-buttons/prev/Default.svg"
import BtnPrevHover from "../../images/page-buttons/prev/Hover.svg"
import BtnPrevDisabled from "../../images/page-buttons/prev/Disabled.svg"

import BtnNextDefault from "../../images/page-buttons/next/Default.svg"
import BtnNextHover from "../../images/page-buttons/next/Hover.svg"
import BtnNextDisabled from "../../images/page-buttons/next/Disabled.svg"

const StyledPagesButton = ({page, setPage, paggedArray, lastPage, setLastPage}) => {

  return (
    <BtnWrapper >
        <BtnPrev 
            onClick={() => {
                setPage(page => page-1)
                setLastPage(false)
            }} 
            page={page} 
            default={BtnPrevDefault} 
            hover={BtnPrevHover} 
            disabledImg={BtnPrevDisabled} 
            paggedArray={paggedArray}
        />
        <BtnNext
            onClick={() => {
                setPage(page => page+1)
            }} 
            page={page}
            paggedArray={paggedArray}
            default={BtnNextDefault}
            hover={BtnNextHover}
            disabledImg={BtnNextDisabled}
            lastPage={lastPage}
        />
    </BtnWrapper>
  )
}

export default StyledPagesButton


const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    max-width: 280px;
    overflow: hidden;
    margin: 14px auto 0 auto;
`
const BtnPrev = styled.button`

    border-radius: 10px;
    overflow: hidden;
    width: 122px;
    height: 40px;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    background-image: url(${props => props.default});
    background-position: center;
    background-color: ${({theme}) => theme.pinkDarkPink};
    background-repeat: no-repeat;
        &:hover {
            background-image: url(${props => props.hover});
        }
    
    ${props => props.page === 0 ? 
        css`
        pointer-events: none;
        background-image: url(${props => props.disabledImg});
        background-color: ${({theme}) => theme.grayBlack}
        ` :null
    }
    ${props => props.paggedArray.length === 0 ? "display: none" : null}
    

`
const BtnNext = styled.button`

border-radius: 10px;
    overflow: hidden;
    width: 122px;
    height: 40px;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    background-image: url(${props => props.default});
    background-position: center;
    background-color: ${({theme}) => theme.pinkDarkPink};
    background-repeat: no-repeat;
        &:hover {
            background-image: url(${props => props.hover});
        }

    ${props => props.lastPage === true ? 
        css`
        pointer-events: none;
        background-image: url(${props => props.disabledImg});
        background-color: ${({theme}) => theme.whiteBlack}
        ` :null
    }

`
