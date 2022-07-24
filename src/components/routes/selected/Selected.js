import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// 
import { useState, useEffect, useContext } from "react";
// 
import SearchBar from "../../shared-elements/search-bar/search-bar"
// 
import styled from "styled-components"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"

import useCatServices from "../../services/CatServices"
import { BreedsContext } from "../../Context/BreedsContext"

// 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { EffectFade, Pagination} from "swiper"
import "swiper/scss/pagination"
import "swiper/scss/effect-fade"
// 
import Loader from "../../shared-elements/loader/Loader";


const Selected = () => {
    const id = window.location.pathname.trim().split("/")[2]
    
    const { getImagesById, getBreedById, loading } = useCatServices()


    const [currentCat, setCurrentCat] = useState({})
    const [catImages, setCatImages] = useState([])

    useEffect(() => {
 
        getBreedById(id)
            .then(res => setCurrentCat(res))
        getImagesById(10, 0, id)
            .then(res => setCatImages(res))
    }, [])
    return (
        <StyledFlexBox >

            <SearchBar />

            <StyledContentArea  >

                <StyledFlexBox
                    align="flex-start"
                    jc="flex-start"
                    fd="row"
                    minHeigth="40px">

                    <StyledButtonBack />
                    <StyledButton
                        noHover
                        textContent="BREEDS"
                    />
                    <StyledButton
                        noHover
                        isActive={true}
                        textContent={currentCat.id}
                    />
                </StyledFlexBox>
                
                {
                    loading ? <Loader/> : (
                        <>
                            <Slides catImages={catImages}/>
                            <CatInfo currentCat={currentCat} />
                        </>
                    ) 
                    
                }

                {/* {
                    loading ? <Loader/> : <CatInfo currentCat={currentCat} />
                    
                } */}

                
                

            </StyledContentArea>


        </StyledFlexBox>
    )
}

export default Selected

const CatInfo = ({ currentCat }) => {

    return (
        <StyledDescription>
            <h2>{currentCat.name}</h2>
            <span>{currentCat.description}</span>
            <StyledInfo>
                <StyledList>
                    <li>
                        Temperament: <br /> <span> {currentCat.temperament}</span>
                    </li>
                </StyledList>
                <StyledList>
                    <li>
                        Origin: <span>{currentCat.origin}</span>
                    </li>
                    <li>
                        Weight: <span>{currentCat.weight ? currentCat.weight.metric : null}</span>
                    </li>
                    <li>
                        Life span: <span>{currentCat.life_span}</span>
                    </li>
                </StyledList >
            </StyledInfo>
        </StyledDescription>
    )
}

const Slides = ({catImages}) => {
    
    const slides = catImages.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <img style={{width:"100%"}}  src={item.image} alt="cat" />
            </SwiperSlide>
        )
    })
    return (
        <StyledSwiperWrapper>
            
            <Swiper 
                modules={[Pagination, EffectFade]}
                effect
                speed={800}
                slidesPerView={"auto"}
                pagination={{clickable:true}}
            >
                {slides}
                <SwiperSlide style={{display: "none"}}/>
            </Swiper>
        </StyledSwiperWrapper>
    )
}


const StyledDescription = styled.div`
border: 2px solid #FBE0DC;
border-radius: 20px;
/* height: 204px; */
position: relative;
padding: 2rem 2rem;
display: flex;
flex-direction: column;
margin: auto;
margin-top: 50px;
align-items: center;
background-size: cover;
    h2 {
        white-space: nowrap;
        padding: 0 40px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
    } 
    span {
        color: #8C8C8C;

    }  
`
const StyledInfo = styled.div`
margin-top: 20px;
display: flex;
width: 100%;
    h4 {
        margin-right: 20px;
    }
`
const StyledList = styled.ul`
margin-right: 20px;
width: 50%;

span {
    color: #8C8C8C;
}
`
const StyledSwiperWrapper = styled.div`
margin-top: 20px;
width: 100%;
height: 55%;
border-radius: 20px;


.swiper {
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;


    .swiper-pagination {
        padding: 0 10px;
        width: auto;
        height: 30px;
        background-color: #fff;
        left: 50%;
        transform: translate(-50%);
        bottom: 1;
        border-radius: 20px;
        display: flex;
        align-items: center;
        .swiper-pagination-bullet {

        } 
        .swiper-pagination-bullet-active {

        }
    }
    .swiper-wrapper {
        
        max-height: 100%;
        height: 100%;
        display: flex;
        align-items: center;


        img {
            border-radius: 20px;

            object-fit: cover;
            height: 100%;
            overflow: hidden;

            }
        .slide {
            width: auto;
            flex-shrink: 0;
            display: block;
            height: 100%;
            max-height: 100%;

            
            
        }
    }
    
}

`

