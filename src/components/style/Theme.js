import eyeLight from "../images/theme-switcher/light/eye.svg"
import eyeDark from "../images/theme-switcher/dark/eye.svg"

const White = "#FFFFFF"
const Gray = "#F8F8F7"

const Pink = "#FBE0DC"
const DarkPink = "rgba(255, 134, 142, 0.2)"

const Black = "#1D1D1D"
const SemyBlack = "#282828"
const LightBlack = "rgba(255, 255, 255, 0.05)"

export const lightTheme = {
    pinkDarkPink: Pink,
    pinkLightBlack: Pink,
    

    whiteBlack: White,
    whiteGray: White,
    whiteLightBlack: White,
    whiteSemyBlack: White,

    grayWhite: Gray,
    grayBlack: Gray,
    grayLightBlack: Gray,

    blackWhite: Black,

    

    textMain: Black,
    textSec: "#8C8C8C",
    buttonBg: "background: rgba(255, 255, 255, 0.1)",

    themeSwitcher: "20px" ,
    eye: eyeLight,
}

export const darkTheme = {
    pinkDarkPink: DarkPink,
    pinkLightBlack: LightBlack,

    whiteBlack: Black,
    whiteGray: Gray,
    whiteLightBlack: LightBlack,
    whiteSemyBlack: SemyBlack,


    grayWhite: White,
    grayBlack: Black,
    grayLightBlack: LightBlack,

    blackWhite: White,

    textMain: White,
    textSec: "#8C8C8C",
    buttonBg: "background: rgba(255, 255, 255, 0.1)",

    themeSwitcher: "0",
    eye: eyeDark


}