import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'

import Like from "./images/like.svg"
import Favorite from "./images/favorite.svg"
import Dislike from "./images/dislike.svg"
import SearchButton from "./images/search-button.png"

// import "./search-bar.sass"
import { CatContext } from '../../Context/CatContext'

// 

const SearchBar = () => {

    const {SearchKey} = useContext(CatContext)
    const [searchTerm, setSearchTerm] = SearchKey
    const [searchError, setSearchError] = useState("")
    const navigate = useNavigate()

    return (
        <Div>
            <div className="search">
                <div className="search__input">
                    <input
                        value={searchTerm}
                        onKeyDown={(event) => {
                            if(event.keyCode == 13) {
                                if(event.target.value.length < 3) {
                                    // setSearchError("Minimum 3 letters")
                                    alert("Minimum 3 letters")
                                } else if (event.target.value.length>25) {
                                    // setSearchError("Maximun 25 letters")
                                    alert("Maximun 25 letters")
                                } else if (
                                    !/^[a-zA-Z\s]+$/i.test(event.target.value)
                                ) {
                                    // setSearchError("Only letters")
                                    alert("Only letters")
                                } else {
                                    navigate("../search", { replace: true });
                                }
            
                            }
                        }}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        placeholder='Search for breeds by name'
                        type="text"
                        className="search__input-bar"
                    />
                    <div className="search__input-button">
                        <NavLink to="/search"><img className='search__input-img' src={SearchButton} alt="search" /></NavLink>
                    </div>
                </div>
                <nav className="search__nav">
                    <div className='search__nav-item'>
                        <NavLink to="/liked" className={({ isActive }) =>
                            isActive ? "search__button search__button_active" : "search__button"
                        } >
                            <img className='search__button-image' src={Like} alt="like" />
                        </NavLink  >
                    </div>
                    <div className='search__nav-item'>
                        <NavLink to="/favorites" className={({ isActive }) =>
                            isActive ? "search__button search__button_active" : "search__button"
                        }>
                            <img className='search__button-image' src={Favorite} alt="favorite" />
                        </NavLink  >
                    </div>
                    <div className='search__nav-item'>
                        <NavLink to="/disliked" className={({ isActive }) =>
                            isActive ? "search__button search__button_active" : "search__button"
                        }>
                            <img className='search__button-image' src={Dislike} alt="dislike" />
                        </NavLink>
                    </div>
                </nav>
            </div>
        </Div>
    )
}

export default SearchBar


const Div = styled.div`
/* display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: auto; */
.search {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* grid-template-rows: repeat(1, 60px); */
    &__input {
        text-align: center;
        position: relative;

    }
        
    &__input-bar {
    
        width: 100%;
        height: 60px;
        border-radius: 20px;
        padding-right: 15%;
        padding-left: 10px;
        border: 2px inherit;
        background-color: ${({theme}) => theme.whiteLightBlack};

        &:hover {
            border: 2px solid #FBE0DC;
            
        }
            
        &:focus {
            border: 2px solid #FF868E;

        }
            
        &:focus::placeholder {
            color: transparent;
        }
        
    }
        
    
    &__input-button {
        background-color: ${({theme}) => theme.pinkDarkPink};
        width: 40px;
        height: 40px;
        position: absolute;
        right: 10px;
        top: 10px;
        overflow: hidden;
        border-radius: 10px;
        padding: 10px;
        &:hover {
            background: #FF868E;
            img {
                filter: grayscale(1) brightness(1000%);
            }
                
        }
    }
    &__nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
        
    &__nav-item {
        background-color: ${({theme}) => theme.whiteLightBlack};
        border-radius: 20px;
        width: 60px;
        height: 60px;
    }
        
    &__button {
        border-radius: 20px;
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
        &:hover {
            background: #FBE0DC
        }
    }
    &__button_active {
        pointer-events: none;
        background: #FF868E;
        img {
            filter: grayscale(1) brightness(1000%);
        }
    }
    &__button-image {
        transform: translateY(50%);
        margin: auto;
    }

}


`