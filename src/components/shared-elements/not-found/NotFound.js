import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
    return (
        <StyledWrapper>
            <span>No item found</span>
        </StyledWrapper>
    )
}

export default NotFound

const StyledWrapper = styled.div`
height: 60px;
width: 100%;
background: ${({theme}) => theme.grayLightBlack};
border-radius: 10px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 20px;
    span {
        font-size: 16px;
        line-height: 24px;
        color: #8C8C8C;
    }
`