import React from 'react'
import styled from 'styled-components'
import VoteHandler  from '../../tools/VoteHandler'


const ActionButton = (props) => {
  const {clickHandler} = VoteHandler()
  return (
    <Btn {...props} onClick={() => {
      clickHandler(props.action, props.cat)
      
    }} >
        <img src={props.imgSrc} alt={props.action} />
    </Btn>
  )
}

export default ActionButton

const Btn = styled.button`
width: ${props => props.width ? props.width : '80px'};
height: ${props => props.height ? props.height : '80px'};
border: ${props => props.border ? props.border : "none"};
background-color: ${props => props.bg ? props.bg : "inherit"};
cursor: pointer;
img{
    margin: auto;
    filter: grayscale(1) brightness(1000%) ;
}
@media (max-width: 656px) {
  width: 60px;
  height: 60px;
}
`