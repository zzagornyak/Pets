import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"

// Styled Components
import styled, {css} from 'styled-components'
// 



const NavItem = ({imgSrc, buttonText, url, background, alt}) =>  {
    const [isActive, setActive] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === url) {

            setActive(true)
        } else {
            setActive(false)
        }
    }, [location.pathname, url])

    return (
        <StyledWrapper  isActive={isActive}>
            <Link to={url}>
                <StyledImg 
                    background={background} 
                    src={imgSrc} 
                    alt={alt} />
                <StyledNavButton>
                    {buttonText}
                </StyledNavButton>
            </Link>
        </StyledWrapper>
    )
}


const StyledImg = styled.img`

background-color: ${props => props.background};
border: 4px solid rgba(255, 255, 255, 0.6);
object-fit: scale-down;
border: 5px solid inherit;
border-radius: 20px;
width: 138px;
height: 198px;
${props => props.isActive ? `border-color: #FF868E` : null}

`
const StyledNavButton = styled.button`
    letter-spacing: 2px;
    color: #FF868E;

    width: 138px;
    height: 36px;
    margin-top: 10px;
    background: ${({theme})=>theme.whiteLightBlack };
    border-radius: 10px;
    border: none;

    font-size: 12px;
    line-height: 16px;

`


const StyledWrapper = styled.div`  

&:hover {
    img {
        border-color: transparent;
    };
    button {
        background-color: #FBE0DC;
    };
}

/* IS ACTIVE */
${props => props.isActive && css`

pointer-events: none;

img {
    border-color: #FF868E;
};
button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #FF868E;
    color:#fff

};


`}
`


export default NavItem