import styled from "styled-components"

const ChooseLimit = ({limit, setLimit, setPage, setLastPage}) => {

    return (
        <StyledSelect 
            value={limit} 
            onChange={(event) => {
                setPage(0)
                setLastPage(false)
                setLimit(event.target.value)
            }} >
            <StyledOption key={1} value={5}>Limit: 5</StyledOption>
            <StyledOption key={2} value={10}>Limit: 10</StyledOption>
            <StyledOption key={3} value={15}>Limit: 15</StyledOption>
            <StyledOption key={4} value={20}>Limit: 20</StyledOption>
        </StyledSelect>
    )
}

export default ChooseLimit

const StyledSelect = styled.select`
background: ${({theme}) => theme.grayLightBlack};
border-radius: 10px;
${props => props.width ? `width: ${props.width}`: null};
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
    
background-color: red;
}
select{
}
`
