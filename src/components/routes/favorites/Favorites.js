import { useContext } from "react"
import { CatContext } from "../../Context/CatContext"
import GridArea from "../../shared-elements/grid-area/GridArea"

import SearchBar from "../../shared-elements/search-bar/search-bar"

// Styled Components
import StyledContentArea from "../../shared-elements/content-area/ContentArea.styled"
import StyledFlexBox from "../../shared-elements/flex-box/FlexBox.styled"
import StyledButtonBack from "../../shared-elements/button-back/ButtonBack.styled"
import StyledButton from "../../shared-elements/button/Button.styled"
// 




const Favorites = () => {
    const { FavoritesKey } = useContext(CatContext)
    const [favorites, setFavorites] = FavoritesKey
    return (
        <StyledFlexBox>
            <SearchBar />
            <StyledContentArea>
                <StyledFlexBox
                    align="flex-start"
                    jc="flex-start"
                    fd="row"
                    minHeigth="40px">

                    <StyledButtonBack />
                    <StyledButton
                        noHover
                        isActive={true}
                        textContent="FAVORITES" />
                </StyledFlexBox>

                <GridArea 
                    content={favorites}
                />

            </StyledContentArea>
        </StyledFlexBox>
    )
}

export default Favorites