import { Link } from "react-router-dom"

import { useState } from "react"

import NavItem from "./NavItem"

import Navigation from "./Navigation"
import styled from "styled-components"

import StyledLogo from "./Logo"

import themeEye from "../images/theme-switcher/light/eye.svg"
import themeEyeDark from "../images/theme-switcher/dark/eye.svg"
import themeButton from "../images/theme-switcher/themeButton.svg"

import { lightTheme } from "../style/Theme.js"
import { darkTheme } from "../style/Theme.js"
import { useLocation } from "react-router-dom"

const SideNav = ({setTheme}) => {
    const location = useLocation()
    return (
    <StyledSection
        path={location.pathname}
    >
        <SideNavContent
            setTheme={setTheme}
        />
    </StyledSection>
           
    )
}

export default SideNav

const StyledWrapper = styled.div`
margin: 0 auto;
max-width:450px;
@media (max-width: 656px) {
    width: 100%;
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
@media (max-width: 1200px) {
    display: ${(props) => (props.path === "/Pets/") || (props.path === "/") ? "flex" : "none"};
}
@media (max-width:500px) {
    nav {
        ul {
            flex-direction: column;
            align-items: center;
            button {
                width: 90vw;
            }
        }
        img {
            display: none;
        }
    }
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


export const SideNavContent = ({setTheme}) => {

    return (
        <StyledWrapper>
            <header>
                <div>
                    <Link to="/">
                        <StyledLogo/>
                    </Link>
                </div>

                <ThemeSwitcher 
                    onClick={(e) => {
                        e.stopPropagation()
                        setTheme(theme => theme === darkTheme ? lightTheme : darkTheme  )
                    }} 
                >
                    <Eye/>
                    <div>
                        <img src={themeButton} alt="theme-switcher-button" />
                    </div>
                </ThemeSwitcher>

            </header>
            <Navigation/>
        </StyledWrapper>
    )
}