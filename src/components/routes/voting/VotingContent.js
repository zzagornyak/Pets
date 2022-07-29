import React from 'react'
import styled from 'styled-components'

import {useState, useEffect, useContext } from 'react'

import ActionButtonGroup from '../../shared-elements/action-button/ActionButtonGroup'
import ActionLog from './ActionLog'

import useCatServices from "../../services/CatServices"

import Loader from '../../shared-elements/loader/Loader'
import {CatContext} from "../../Context/CatContext.js"

const VotingContent = () => {



    const {LikedKey, DislikedKey, FavoritesKey, RandomKey, LogKey} = useContext(CatContext)
    
    const [liked, setToLiked] = LikedKey
    const [disliked, setToDisliked] = DislikedKey
    const [favorites, setToFavorites] = FavoritesKey
    const [currentRandomCat, setCurrRandomCat] = RandomKey
    const [log] = LogKey

   

    const {loading, request, error, clearError, getRandomCat, postVotes, getVotes} = useCatServices()
   

    
    useEffect(() => {
        getRandomCat().then(res => setCurrRandomCat(res[0]))
      }, [liked, disliked, favorites])


    return (
        <StyledRandomCatSection>

            <StyledDiv>
 
                <VotingBar 
                    cat={currentRandomCat}
                    loading={loading}/>

                
            </StyledDiv>
            
            <StyledActionsSection>
                
                {
                    log.map((action, index) => {
                        return <ActionLog key={index} {...action} />
                    })
                }
                
            </StyledActionsSection>
            

        </StyledRandomCatSection>

    )
}

export default VotingContent 


const StyledRandomCatSection = styled.section`
display: grid;
flex-grow: 0;
flex-direction: column;
width: 100%;
min-height: 500px;
margin-top: 20px;
border-radius: 20px;
overflow: hidden;

` 

const StyledDiv = styled.div`
position: relative;
height: 50vh;   
margin: auto;
display: flex;
@media (max-width: 500px) {
    height: 30vh;   
}

`

const StyledImg = styled.img`
width: 100%;
height: 50vh;
background-color: #fff;
border-radius: 20px;
margin:auto;
object-fit: cover;
@media (max-width: 500px) {
    height: 30vh;   
}

`

const StyledActionsSection = styled.section`
margin-top: 56px;
border-radius: 20px;
display: flex;
flex-direction: column;

`



const VotingBar = ({loading, cat}) => {
    return (
        <>
            {
                loading ? <Loader/> : <StyledImg src={cat.image} alt="random cat" />
            }
            <ActionButtonGroup 
                cat={cat}/>
        </>
    )
}






