//  TODO paged breeds ?
import styled from "styled-components"
import GridContent from "./GridContent.js"
import NotFound from "../not-found/NotFound"
const GridArea = ({ content, withBreeds, noHover}) => {
    return (
        <Wrapper>
            {
                content.length === 0 ? <NotFound/> : 
                <GridContent
                    content={content}
                    withBreeds={withBreeds}
                    noHover={noHover}
                />
            }
           
        </Wrapper>
    )
}

export default GridArea




const Wrapper = styled.div`
  border-radius: 20px;
  width: 100%;
  height: auto;
`





