import styled from "styled-components"

import BreedsButton from "../images/side-nav/breeds-button.svg"
import GalleryButton from "../images/side-nav/gallery-button.svg"
import VotingButton from "../images/side-nav/voting-button.svg"
import NavItem from "./NavItem"
const Navigation = () => {
  return (
    <StyledNavWrapper>
        <h1 >Hi, intern!</h1>
        <p>Welcome to MI 2022 Front-end test</p>
        <StyledNav>
            <span>Lets start using The Cat API</span>
            <ul>
                <NavItem
                    imgSrc={VotingButton}
                    buttonText="VOTING"
                    url="/voting"
                    background="#B4B7FF"
                    alt="tablet"
                    onClick={null}
                />
                <NavItem
                    imgSrc={BreedsButton}
                    buttonText="BREEDS"
                    url="/breeds"
                    background="#97EAB9"
                    alt="cat"
                    onClick={null}
                />
                <NavItem
                    imgSrc={GalleryButton}
                    buttonText="GALLERY"
                    url="/gallery"
                    background="#FFD280"
                    alt="cat`s hand with mp3-player"
                    onClick={null}
                />
            </ul>
        </StyledNav>
    </StyledNavWrapper>
  )
}

export default Navigation

const StyledNav = styled.nav`
margin-top: 60px;
span {
    font-size: 20px;
    line-height: 29px;
    color: ${({theme}) => theme.textMain};
}
ul {
margin-top: 20px;
display: flex;
justify-content: space-between;
}
`
const StyledNavWrapper = styled.div`
width: 450px;
height: 450px;
display: flex;
flex-direction: column;
@media (max-width: 656px) {
    width: auto;
}


margin: 80px auto;
p {
    color: #8C8C8C;
    margin-top: 10px;
    font-style: normal;
}
`