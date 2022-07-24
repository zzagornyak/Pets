import React from 'react'
import GridArea from '../../shared-elements/grid-area/GridArea'
import GalleryContext from "../../Context/GalleryContext"
import {useContext, useEffect } from "react"
import Loader from '../../shared-elements/loader/Loader'
import useCatServices from "../../services/CatServices"
import FilterBar from './FilterBar'
import StyledPagesButton from '../../shared-elements/buttons-prev-next/buttonsPrevNext'
const GalleryContent = () => {
    const { loading, getDataToGallery } = useCatServices()

    const { Limit, Page, Order, ItemsType, BreedsNames, ChoosedBreed, Refresh, LastPage, Content } = useContext(GalleryContext)

    const [limit] = Limit
    const [page, setPage] = Page
    const [order] = Order
    const [itemsType] = ItemsType
    const [choosedBreed] = ChoosedBreed
    const [refresh] = Refresh
    const [lastPage, setLastPage] = LastPage
    const [content, setContent] = Content

    useEffect(() => {
        getDataToGallery(limit, page, order, itemsType, choosedBreed)
            .then(res => setContent(res))
            

    }, [refresh, page])

    return (
        <>
            <FilterBar/>

            {
                (loading && <Loader/>) ||    
                <>
                    <GridArea
                        content={content}
                    />
                   { content.length > 0 && <StyledPagesButton
                                            page={page}
                                            setPage={setPage}
                                            paggedArray={content}
                                            lastPage={lastPage}
                                            setLastPage={setLastPage}
                                            />}
                </>
                    

            }
            
        </>
    )
}

export default GalleryContent



