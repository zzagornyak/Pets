import { Link } from "react-router-dom"

import { useState } from "react"

import NavItem from "./NavItem"

import BreedsButton from "../images/side-nav/breeds-button.svg"
import GalleryButton from "../images/side-nav/gallery-button.svg"
import VotingButton from "../images/side-nav/voting-button.svg"

import styled from "styled-components"

import StyledLogo from "./Logo"

import themeEye from "../images/theme-switcher/light/eye.svg"
import themeEyeDark from "../images/theme-switcher/dark/eye.svg"
import themeButton from "../images/theme-switcher/themeButton.svg"

import { lightTheme } from "../style/Theme.js"
import { darkTheme } from "../style/Theme.js"


const SideNav = ({setTheme}) => {

    return (
    <StyledSection>
        <StyledWrapper>
            <header>
                <div>
                    <Link to="/">
                        <StyledLogo/>
                    </Link>
                </div>

                <ThemeSwitcher 
                    onClick={() => {
                        setTheme(theme => theme === darkTheme ? lightTheme : darkTheme  )
                    }} 
                >
                    <Eye/>
                    <div>
                        <img src={themeButton} alt="theme-switcher-button" />
                    </div>
                </ThemeSwitcher>

            </header>
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
        </StyledWrapper>
    </StyledSection>
           
    )
}

export default SideNav

const StyledWrapper = styled.div`
margin: 0 auto;
max-width:450px;
`
const StyledNavWrapper = styled.div`
width: 450px;
height: 450px;
display: flex;
flex-direction: column;

margin: 80px auto;
p {
    color: #8C8C8C;
    margin-top: 10px;
    font-style: normal;
}
`

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


const StyledSection = styled.section`
width: 100%;
height: 100%;

header {
    display: flex;
    justify-content: space-between;
    margin: auto;
}
`

const ThemeSwitcher = styled.div`
display: flex;
cursor: pointer;

div {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* ${({theme}) => theme.themeSwitcher}; */
    margin-left: 5px;
    width: 44px;
    height: 24px;
    border-radius: 50px;
    background-color: ${({theme}) => theme.pinkDarkPink};
    transition: all 1s ease;    

    img{
        transition: all 0.5s ease;    
        transform: translateX(${({theme}) => theme.themeSwitcher});

    }
}
`


const Eye = styled.section` 
background-image: url(${({theme}) => theme.eye});
background-position: center;
background-repeat: no-repeat;  
width: 24px;
height: 24px;
border-radius: 50px ;
`