import styled from "styled-components"

const ChooseBreed = ({choosedItem, setChoosedItem, chooseList, width, setPage, setLastPage}) => {

    
    const options = chooseList.map((item, index) => {  
        return <StyledOption key={index} value={item.id}>{item.name}</StyledOption>
    })
    return (
        <StyledSelect 
            width={width}
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
${props => props.width ? `max-width: ${props.width}`: null};
width: auto;
height: 40px;
margin-left: 10px;
border: 2px solid transparent;
color: ${({theme}) => theme.textSec};

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
