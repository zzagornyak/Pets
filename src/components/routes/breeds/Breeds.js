

// Shared Elements
import SearchBar from "../../shared-elements/search-bar/search-bar"

import BreedsContent from "./BreedsContent"

import SortButtons from "../../shared-elements/sort-buttons/SortButtons"
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
import ChooseBreed from "../../shared-elements/choose-otions/choose-breed/ChooseBreed"
import ChooseLimit from "../../shared-elements/choose-otions/choose-limit/ChooseLimit"

// Cat service
import useCatServices from "../../services/CatServices"


import { useContext} from "react"
import { CatContext } from "../../Context/CatContext"
import { BreedsContext } from "../../Context/BreedsContext"
import styled from "styled-components"



const Breads = () => {
// Cat service
    const {getAllBreeds, getImagesById, loading} = useCatServices()
// Cat Context
    const {BreedsNamesKey} = useContext(CatContext)
    const [breedsNames, setBreedNames] = BreedsNamesKey
// Breed Context
    const {ChoosedBreedKey, BreedsLimitKey, SortReversedKey, LastPageKey, PageKey} = useContext(BreedsContext)

    const [page, setPage] = PageKey
    const [lastPage, setLastPage] = LastPageKey
    const [choosedBreed, setChoosedBreed] = ChoosedBreedKey
    const [breedsLimit, setBreedsLimit] = BreedsLimitKey
    const [isSortReversed, setSortReversed] = SortReversedKey

    
    
    return (
        <StyledFlexBox >

            <SearchBar/>

            <StyledContentArea  >

                <StyledWraper 
                    align="flex-start"
                    jc="flex-start" 
                    fd="row"
                    minHeigth="40px">

                    <StyledButtonBack/>
                    <StyledButton 
                        noHover 
                        isActive={true} 
                        textContent="BREEDS"  
                    />
                    
                    
                    <ChooseBreed 
                        choosedItem={choosedBreed} 
                        setChoosedItem={setChoosedBreed} 
                        chooseList={breedsNames} 
                        setPage={setPage}
                        setLastPage={setLastPage}
                    />
                    <ChooseLimit 
                        limit={breedsLimit} 
                        setLimit={setBreedsLimit} 
                        setPage={setPage}
                        setLastPage={setLastPage}
                    />
                    <SortButtons
                        
                        isSortReversed={isSortReversed}
                        setSortReversed={setSortReversed}
                    />

                </StyledWraper> 

                <BreedsContent/>
                
                

            </StyledContentArea>

        </StyledFlexBox>
        
    
        
    )
}

export default Breads

export const StyledWraper = styled(StyledFlexBox)`
height: auto;
gap: 20px;
select:nth-of-type(2) {
    @media (max-width: 656px) {
        width: 75%;
    }
    @media (max-width: 500px) {
        width: 60%;
    }
} 
@media (max-width: 656px) {
    flex-wrap: wrap;
    gap: 10px;
     
}




`


