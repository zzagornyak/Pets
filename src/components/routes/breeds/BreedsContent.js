import useCatServices from "../../services/CatServices"
import { BreedsContext } from "../../Context/BreedsContext"
import { CatContext } from "../../Context/CatContext"
import { useState, useEffect, useContext } from "react"
import Loader from "../../shared-elements/loader/Loader.js"
import GridArea from "../../shared-elements/grid-area/GridArea.js"
import StyledPagesButton from "../../shared-elements/buttons-prev-next/buttonsPrevNext"
const BreedsContent = () => {
    // Cat service
    const { getSlicedBreeds, getAllBreeds, getImagesById, loading } = useCatServices()
    // Cat Context
    const { BreedsNamesKey } = useContext(CatContext)
    const [breedsNames, setBreedNames] = BreedsNamesKey
    // Breed Context
    const { ChoosedBreedKey, BreedsLimitKey, PageKey, SlicedBreedsKey, SortReversedKey, LastPageKey } = useContext(BreedsContext)

    const [slicedBreeds, setSlicedBreeds] = SlicedBreedsKey
    const [choosedBreed, setChoosedBreed] = ChoosedBreedKey
    const [breedsLimit, setBreedsLimit] = BreedsLimitKey
    const [page, setPage] = PageKey
    const [isSortReversed, setSortReversed] = SortReversedKey
    const [lastPage, setLastPage] = LastPageKey
    



    useEffect(() => {


        const getMethod = choosedBreed !== "all" ? getImagesById : getSlicedBreeds

        
        getMethod(breedsLimit, page, choosedBreed)
            .then(res => isSortReversed ? setSlicedBreeds(res.reverse()) : setSlicedBreeds(res))
            
        

    }, [breedsLimit, page, isSortReversed, choosedBreed])
    return (
        <>
            {
                loading ? <Loader /> : 
                <>
                    <GridArea
                        content={slicedBreeds}
                        withBreeds
                    />
                    <StyledPagesButton
                        page={page}
                        setPage={setPage}
                        paggedArray={slicedBreeds}
                        lastPage={lastPage}
                        setLastPage={setLastPage}
                    />
                </>
                
            }
            
        </>
    )
}

export default BreedsContent