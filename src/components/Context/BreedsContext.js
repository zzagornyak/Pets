import { createContext, useState, useEffect } from "react";
import useCatServices from "../services/CatServices";

export const BreedsContext = createContext()

export const BreedsProvider = ({ children }) => {
    // Cat service
    const { getAllBreeds, getImagesById, getSlicedBreeds } = useCatServices()
    // State
    const [choosedBreed, setChoosedBreed] = useState("all")
    const [breedsLimit, setBreedsLimit] = useState(10)
    const [page, setPage] = useState(0)
    const [pagedBreeds, setPagedBreeds] = useState([])
    const [slicedBreeds, setSlicedBreeds] = useState([])
    const [isSortReversed, setSortReversed] = useState(false)
    const [lastPage, setLastPage] = useState(false)

    
        

    useEffect(() => {
        const getMethod = choosedBreed !== "all" ? getImagesById : getSlicedBreeds
        getMethod(breedsLimit, page+1, choosedBreed)
            .then(res => {
                if (res.length < 5) {
                    setLastPage(true)
                } else {
                    return
                }
            })

    }, [breedsLimit, choosedBreed, page])

    return (
        <BreedsContext.Provider
            value={{
                ChoosedBreedKey: [choosedBreed, setChoosedBreed],
                BreedsLimitKey: [breedsLimit, setBreedsLimit],
                PageKey: [page, setPage],
                PagedBreedsKey: [pagedBreeds, setPagedBreeds],
                SlicedBreedsKey: [slicedBreeds, setSlicedBreeds],
                SortReversedKey: [isSortReversed, setSortReversed],
                LastPageKey: [lastPage, setLastPage]
            }}
        >
            {children}
        </BreedsContext.Provider>
    )
}