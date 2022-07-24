// TODO Убрать клик хенлер
import { useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import React from 'react'

const SvgButton = ({onClick, active, defaultImg, hoverImg, activeImg, themeStyle, bg, w, h, br, ml, mr, mt, mb, pos, r, b, t, l }) => {
    return (
        <StyledBtn
            onClick={(onClick)}
            active={active}
    
            sortStyle={"reverse"}

            br={br}
            w={w}
            h={h}

            bg={bg}

            ml={ml}
            mr={mr}
            mt={mt}
            mb={mb}

            pos={pos}
            r={r}
            l={l}
            t={t}
            b={b}

            themeStyle={themeStyle}

            defaultImg={defaultImg}
            hoverImg={hoverImg}
            activeImg={activeImg}
        >

        </StyledBtn>



    )
}

export default SvgButton


const StyledBtn = styled.button`
width: ${({w}) => w ? w : 'auto'};
height: ${({h}) => h ? h : "40px"};
border-radius: ${({br}) => br ? br : "10px"};

background-position: center;
background-repeat: no-repeat;
object-fit: cover;
margin-left: ${({ml}) => ml ? ml : 0};
margin-right: ${({mr}) => mr ? mr : 0};
margin-top: ${({mt}) => mt ? mt : 0};
margin-bottom: ${({mb}) => mb ? mb : 0};


background-color: ${(props)=> {
    switch (props.themeStyle) {
        case "grayLightBlack":
            return props.theme.grayLightBlack
        case "whiteBlack":
            return props.theme.whiteBlack
        case "whiteLightBlack":
            return props.theme.whiteLightBlack
            break
        default:
            return props.theme.pinkDarkPink
    }
    
}};
cursor: pointer;

${({active}) => active === true ? css`
    background-image: url(${props => props.activeImg});
    cursor-events: none;`: css`
            background-image: url(${props => props.defaultImg});
            &:hover {
                background-color: #FF868E;
                background-image: url(${props => props.hoverImg})
            }
`}

position: ${props => props.pos ? props.pos : "static"};
right: ${props => props.r};
left: ${props => props.l};
top: ${props => props.t};
bottom: ${props => props.b};


`