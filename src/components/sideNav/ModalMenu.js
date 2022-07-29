import { useContext } from "react"
import Navigation from "./Navigation"
import styled from "styled-components"
import SvgButton from "../shared-elements/svg-button/SvgButton"
import defaultImg from "../images/close-button/closeDefault.svg"
import hoverImg from "../images/close-button/closeHover.svg"
import { SideNavContent } from "./SideNav"
import { CatContext } from "../Context/CatContext"

const ModalMenu = ({setTheme}) => {

    const {ModalKey} = useContext(CatContext)
    const [isModalOpen, setModalOpen] = ModalKey
    
  return (
    <Modal 
        onClick={() => {
            setModalOpen(false)        
        }}
        isModalOpen={isModalOpen}
    >
        <SideNavContent
            setTheme={setTheme}
        />
        

        <SvgButton
            defaultImg={defaultImg}
            hoverImg={hoverImg}
            pos="absolute"
            r="30px"
            t="30px"
            w="40px"
            h="40px"
            themeStyle="whiteLightBlack"
            onClick={() => {
                setModalOpen(false)
            }}
        />
    </Modal>    
  )
}

export default ModalMenu           

const Modal = styled.div`
display: ${(props) => props.isModalOpen===true ? "flex" : "none"};
position: absolute;
justify-content: center;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: ${({theme}) => theme.grayBlack};
z-index: 10;
padding: 30px;
div {
}
h1, p , span {
    display: none;
}
header {

    
    div:nth-child(0n) {
        justify-content: center;
    }
}
header div:first-child {
    display: none;

}

@media (max-width: 500px) {
    nav {
        ul {
            flex-direction: column;
            align-items: center;
            button{
                width: 80vw;
            }
        }
        img {
            display: none;
        }
    } 
}
`



