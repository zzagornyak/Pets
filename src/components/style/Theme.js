import eyeLight from "../images/theme-switcher/light/eye.svg"
import eyeDark from "../images/theme-switcher/dark/eye.svg"

const White = "#FFFFFF"
const Gray = "#F8F8F7"

const Pink = "#FBE0DC"
const DarkPink = "rgba(255, 134, 142, 0.2)"

const Black = "#1D1D1D"
const SemyBlack = "#282828"
const LightBlack = "rgba(255, 255, 255, 0.05)"
const FullyBlack = "#282828"
const Red = "#FF868E"

export const lightTheme = {
    red: Red,
    
    pinkDarkPink: Pink,
    pinkLightBlack: Pink,
    

    whiteBlack: White,
    whiteGray: White,
    whiteLightBlack: White,
    whiteSemyBlack: White,
    whiteFullyBlack: White,

    grayWhite: Gray,
    grayBlack: Gray,
    grayLightBlack: Gray,
    graySemyBlack: Gray,

    blackWhite: Black,

    

    textMain: Black,
    textSec: "#8C8C8C",
    buttonBg: "background: rgba(255, 255, 255, 0.1)",

    themeSwitcher: "20px" ,
    eye: eyeLight,
}

export const darkTheme = {
    red: Red,

    
    pinkDarkPink: DarkPink,
    pinkLightBlack: LightBlack,

    whiteBlack: Black,
    whiteGray: Gray,
    whiteLightBlack: LightBlack,
    whiteSemyBlack: SemyBlack,
    whiteFullyBlack: FullyBlack,


    grayWhite: White,
    grayBlack: Black,
    grayLightBlack: LightBlack,
    graySemyBlack: SemyBlack,


    blackWhite: White,

    textMain: White,
    textSec: "#8C8C8C",
    buttonBg: "background: rgba(255, 255, 255, 0.1)",

    themeSwitcher: "0",
    eye: eyeDark


}

// @media (max-width: 1200px) {
//     display: flex;
// }

// @media (max-width: 767px) {
    
// }

// @media (max-width: 656px) {
    
// }

