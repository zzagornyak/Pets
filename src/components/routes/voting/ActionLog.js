
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
        <span>{time}</span>
        <p>Image ID:  {id} {message}</p>
        <img src={img} alt={action != "delete" ? action : ""}/>
    </StyledAction>
  )
}

export default ActionLog


const StyledAction = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-height: 60px;
background-color: ${({theme}) => theme.grayLightBlack};
border-radius: 10px;
margin-bottom: 10px;
padding: 10px 25px;
text-align: center;
flex-wrap: wrap;
div{
  display: flex;
}


@media (max-width: 656px) {
text-align: left;

span {
  margin-right: 30px;
  order: -3;

}
p {
  width: 100%;
  margin-right: 30px;
  order: 5;
}
img {
  display: block;
  order: -1;
}   
}
`
