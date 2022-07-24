
import React from 'react'
import styled from 'styled-components'

import Like from "../../images/shared/colored-smiles/like.svg"
import Dislike from "../../images/shared/colored-smiles/dislike.svg"
import Favorite from "../../images/shared/colored-smiles/favorite.svg"


const ActionLog = ({id, message, action, time}) => {
  let img
  switch (action) {
    case "like":
      img = Like
      break
    case "dislike":
      img = Dislike
      break
    case "favorite":
      img = Favorite
      break
    case "delete":
      img = null
  }

  return (
    <StyledAction >
        <div>
          <span>{time}</span>
          <span>Image ID:  {id} {message}</span>
        </div>
        <img src={img} alt={action != "delete" ? action : ""}/>
    </StyledAction>
  )
}

export default ActionLog


const StyledAction = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 60px;
background-color: ${({theme}) => theme.grayLightBlack};
border-radius: 10px;
margin-bottom: 10px;
padding: 0 25px;
div{
  display: flex;
}
span {
  display: block;
  margin-right: 30px;
  min-width: 50px;
}

`
