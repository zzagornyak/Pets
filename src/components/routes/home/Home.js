import React from 'react'
import homeImg from "../../images/home/girl-and-pet1.png"

import styled from 'styled-components'


export default function Home() {
  
  return (
    <StyledDiv className='home'>
      <img  src={homeImg}  alt="girl and cat" className="home__img" />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
width: 100%;
height: 100vhwidth;
background: ${({theme}) => theme.pinkLightBlack};
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
overflow: visible;
img {
  height: 100%;
  object-fit: cover;
  transform: scale(1.2, 1.2);
}
@media (max-width: 1200px) {
    display: none;
}


`