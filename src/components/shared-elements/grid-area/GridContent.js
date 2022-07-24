
import styled from "styled-components"
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import buttonDefault from "../../images/like-button/likeDefault.svg"
import buttonActive from "../../images/like-button/likeActive.svg"

import { CatContext } from "../../Context/CatContext"
import { useContext } from "react"

const GridContent = ({ content, withBreeds, noHover}) => {
    const { FavoritesKey } = useContext(CatContext)
    const [favorite, setToFavorites] = FavoritesKey

    const slicedArray = []
    const breedsCopy = [...content]

    while (breedsCopy.length > 0) {
        slicedArray.push(breedsCopy.splice(0, 10))
    }
    const gridContent = slicedArray.map((item, index) => {
        return (
            <StyledGridWrapper key={index} >
                {
                    item.map((item, index) => {
                        if (withBreeds) {
                            return (
                                <StyledGridItem noHover={noHover} key={index} index={index}>
                                    <img src={item.image} alt="cat" />
                                    <div>
                                        <Link to={`/selected/${item.id}`}  >
                                            {item.name}
                                        </Link>
                                    </div>
                                </StyledGridItem>)
                        } else {
                            return (
                                <StyledGridItemWithFav 
                                    noHover={noHover} 
                                    key={index} 
                                    index={index}
                                >
                                        <img src={item.image} alt="cat" />
                                        <div>
                                            <ButtonWithFav
                                                favorite={favorite}
                                                setToFavorites={setToFavorites}
                                                item={item}
                                            />
                                        </div>
                                </StyledGridItemWithFav>)
                        }

                    })
                }
            </StyledGridWrapper>
        )

    })


    return (
        <>
            {gridContent}
        </>

    )
}
export default GridContent

const ButtonWithFav = ({ favorite, setToFavorites, item }) => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        if (favorite.find((subitem => subitem.id === item.id))) {
            setActive(true)
        } else {
            setActive(false)
        }

    }, [active, favorite])

    return (
        <>
            <Btn
                active={active}
                onClick={() => {
                    if (active) {
                        setActive(false)
                        setToFavorites(favorite => {
                            return favorite.filter((subitem) =>  item.id !== subitem.id)
                        })
                    } else {
                        setToFavorites(favorite => [...favorite, item])
                        setActive(true)
                    }

                }}
                defaultImg={buttonDefault} activeImg={buttonActive}
            />
        </>
    )
}
const Btn = styled.button`
    width: 40px;
    height: 40px;
    background: url(${props => props.active === true ? props.activeImg : props.defaultImg});
    background-repeat: no-repeat;
    background-position: center;
`

const StyledGridWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 140px);
  grid-gap: 20px;
  grid-template-areas: 
  "one two three"
  "one four four"
  "five four four"
  "six seven eight"
  "nine nine eight"
  "nine nine ten";
`

const StyledGridItem = styled.div`
    border-radius: 20px;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    z-index: 10;
    grid-area: ${(props) => props.index === 0 && "one"};
    grid-area: ${(props) => props.index === 1 && "two"};
    grid-area: ${(props) => props.index === 4 && "three"};
    grid-area: ${(props) => props.index === 2 && "four"};
    grid-area: ${(props) => props.index === 3 && "five"};

    grid-area: ${(props) => props.index === 5 && "six"};
    grid-area: ${(props) => props.index === 6 && "seven"};
    grid-area: ${(props) => props.index === 7 && "eight"};
    grid-area: ${(props) => props.index === 8 && "nine"};
    grid-area: ${(props) => props.index === 9 && "ten"};

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${props => props.noHover === true? null : "cursor: pointer;"}
    }
        
    div {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(255, 134, 142, 0.6);
        align-items: flex-end;
        justify-content: space-around;
        padding: 0 10px 10px 10px;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 34px;
            background: #fff;
            color: #FF868E;
            border-radius:10px;
        }
    
    }   
        
    &:hover {
        div {
            ${props => props.noHover === true ? null : "display: flex;"}    
            
        }
} 
`
const StyledGridItemWithFav = styled(StyledGridItem)`
div {
    align-items: center;
    
}
`
