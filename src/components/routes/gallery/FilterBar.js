import GalleryContext from "../../Context/GalleryContext"
import { useState, useContext, useEffect } from "react"

import styled from "styled-components"
import SvgButton from "../../shared-elements/svg-button/SvgButton"
import defaultImg from "../../images/apply-button/button-default.svg"
import hoverImg from "../../images/apply-button/button-hover.svg"
import useCatServices from "../../services/CatServices"

const FilterBar = () => {

    const { getDataToGallery } = useCatServices()

    const { Limit, Page, Order, ItemsType, BreedsNames, ChoosedBreed, Refresh } = useContext(GalleryContext)

    const [limit, setLimit] = Limit
    const [page, setPage] = Page
    const [order, setOrder] = Order
    const [itemsType, setItemsType] = ItemsType
    const [breedsNames, setBreedsNames] = BreedsNames
    const [choosedBreed, setChoosedBreed] = ChoosedBreed
    const [refresh, setRefresh] = Refresh

    


    return (
        <StyledFilterBar>
            <div>
                <span>ORDER</span>
                <select
                    onChange={(event) => setOrder(event.target.value)}
                    value={order}
                >
                    <option key={1} value="RANDOM">Random</option>
                    <option key={2} value="DESC">Desc</option>
                    <option key={3} value="ASC">Asc</option>
                </select>
            </div>
            <div>
                <span>TYPE</span>
                <select
                    onChange={(event) => setItemsType(event.target.value)}
                    value={itemsType}
                >
                    <option key={1} value="jpg,png,gif">All</option>
                    <option key={2} value="jpg,png">Static</option>
                    <option key={3} value="gif">Animated</option>
                </select>

            </div>
            <div>
                <span>BREED</span>
                <select
                    onChange={(event) => setChoosedBreed(event.target.value)}
                    value={choosedBreed}
                >
                    <option value="">None</option>
                    {breedsNames.map((item, index) => {
                        return <option key={index} value={item.id}>{item.name}</option>
                    })}
                </select>



            </div>
            <div>
                <span>LIMIT</span>
                <select
                    style={{ width: "75%", }}
                    onChange={(event) => setLimit(event.target.value)}
                    value={limit}
                >
                    <option key={1} value={5}>5 items per page</option>
                    <option key={2} value={10}>10 items per page</option>
                    <option key={3} value={15}>15 items per page</option>
                    <option key={4} value={20}>20 items per page</option>

                </select>
                <SvgButton
                    onClick={() => {
                        setRefresh(refresh => !refresh)
                    }}
                    pos={"absolute"}
                    r="20px"
                    b="20px"
                    defaultImg={defaultImg}
                    hoverImg={hoverImg}
                    w="40px"
                    h="40px"
                    bg="red"
                    themeStyle="whiteBlack"
                />
            </div>
        </StyledFilterBar>

    )
}

export default FilterBar





const StyledFilterBar = styled.div`
padding: 20px 20px;
background: ${({theme}) => theme.grayLightBlack};
border-radius: 20px;
width: 100%;
height: 156px;
margin-top: 20px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
column-gap: 20px;
position: relative;
color: #1D1D1D;   

    div {
        display: flex;
        flex-direction: column;

        select {
            
            border-radius: 10px;
            height: 40px;
            font-size: 16px;
            line-height: 24px;
            cursor: pointer;
            background: ${({theme}) => theme.whiteBlack};
            color: ${({theme}) => theme.textMain};  
            padding-left: 10px; 

        }
        span {
            font-size: 10px;
            line-height: 18px;
            color: #8C8C8C;
        }
        
    }
`