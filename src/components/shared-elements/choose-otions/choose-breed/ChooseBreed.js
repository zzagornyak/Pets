import styled from "styled-components"

const ChooseBreed = ({choosedItem, setChoosedItem, chooseList, width, setPage, setLastPage}) => {

    
    const options = chooseList.map((item, index) => {  
        return <StyledOption key={index} value={item.id}>{item.name}</StyledOption>
    })
    return (
        <StyledSelect 
            value={choosedItem} 
            onChange={(event) => {
                setLastPage(false)
                setPage(0)
                setChoosedItem(event.target.value)
            }} >
            <StyledOption key={"all breeds"} value={"all"} >All breeds</StyledOption>
            {options}
        </StyledSelect>
    )
}
export default ChooseBreed


const StyledSelect = styled.select`
background: ${({theme}) => theme.grayLightBlack};
border-radius: 10px;
max-width: 200px;
width: 100%;
height: 40px;
border: 2px solid transparent;
color: ${({theme}) => theme.textSec};
@media (max-width: 656px) {
    max-width: 100%;
}

    &:hover {
            border: 2px solid #FBE0DC;
            border-radius: 10px;
        }

`
const StyledOption = styled.option`
option {
    
}
select{
}

`
