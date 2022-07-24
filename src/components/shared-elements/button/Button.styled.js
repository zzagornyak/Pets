import styled, {css} from "styled-components";

const StyledButton = (props) => {
    return (
        <Btn {...props}>
            {props.textContent}
        </Btn>
    )
}

const Btn = styled.button`

padding: 0 30px;
min-height: 36px;
height: 40px;
width: auto ;
border-radius: 10px;
margin-right: 10px;
letter-spacing: 2px;
color: #FFFFFF;
${props => props.isActive ? "background-color: #FF868E;": css`
background-color: #FBE0DC;
color: #FF868E;
`};

${props => props.noHover ? null : `
&:hover {
    background-color: #FF868E;
    color: #fff;
}
`}

`


export default StyledButton