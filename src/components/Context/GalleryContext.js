import { createContext, useState, useEffect } from "react";
import styled from "styled-components";
import useCatServices from "../services/CatServices";

export const GalleryContext = createContext()

export const GalleryProvider = ({ children }) => {
    const { getAllBreeds } = useCatServices()
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const [order, setOrder] = useState("RANDOM")
    const [itemsType, setItemsType] = useState("jpg,png")
    const [breedsNames, setBreedsNames] = useState([])
    const [choosedBreed, setChoosedBreed] = useState("")
    const [refresh, setRefresh] = useState(true)
    const [lastPage, setLastPage] = useState(false)
    const [content, setContent] = useState([])

    useEffect(() => {
        getAllBreeds().then(res => {
            setBreedsNames(res.map((item) => ({ name: item.name, id: item.id })))
        })
    }, [])

    


    return (
        <GalleryContext.Provider
            value={{
                Limit: [limit, setLimit],
                Page: [page, setPage],
                Order: [order, setOrder],
                ItemsType: [itemsType, setItemsType],
                BreedsNames: [breedsNames, setBreedsNames],
                ChoosedBreed: [choosedBreed, setChoosedBreed],
                Refresh: [refresh, setRefresh],
                LastPage: [lastPage, setLastPage],
                Content: [content, setContent]
            }}

        >
            {children}
        </GalleryContext.Provider>
    )
}

export default GalleryContext