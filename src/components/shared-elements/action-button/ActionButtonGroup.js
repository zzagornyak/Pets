import React from 'react'
import styled from 'styled-components'

import ActionButton from '../../shared-elements/action-button/ActionButton'

import Favorite from "../../images/shared/favorite.svg"
import Like from "../../images/shared/like.svg"
import Dislike from "../../images/shared/dislike.svg"



const ActionButtonGroup = ({cat}) => {
  return (
    <>
    <StyledActionButtons >
        <ActionButton 
            action={"like"} 
            imgSrc={Like} 
            bg={"#97EAB9;"}
            cat={cat}
            />
            
        <ActionButton 
            action={"favorite"} 
            imgSrc={Favorite}
            bg={"#FF868E;"}
            cat={cat}

            />

        <ActionButton 
            action={"dislike"} 
            imgSrc={Dislike}
            bg={"#FFD280;"}
            cat={cat}

            />
    </StyledActionButtons>
    </>
  )
}

export default ActionButtonGroup

const StyledActionButtons = styled.div`
overflow: hidden;
border:  4px solid;
border-color: ${({theme}) => theme.whiteSemyBlack};
border-radius: 20px;
background-color: ${({theme})=>theme.whiteSemyBlack};
position: absolute;
display: flex;
justify-content: space-between;
align-items: center;
left: 50%;
bottom: 0;
width: 256px;
transform: translate3d(-50%, 50%, 0);

`

