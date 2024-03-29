import {createGlobalStyle} from "styled-components";

export const  GlobalStyle = createGlobalStyle`
ol,
ul {
  list-style: none;
}

html {
    background-color: #F8F8F7;
  }
  
  html, body {
    max-width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    height: 1px;

    

}

* {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    border-color: transparent;


    

}

h1, h2, h3, h4, h5, p, div, span, a {
    font-family: 'Jost', sans-serif;
}

p {
  font-size: 400;
}

h1 {
    font-size: 44px;
    font-weight: 500; 
}

h2 {
    font-size: 36px;
    font-weight: 500; 
}

h3 {
    font-size: 20px;
    font-weight: 500; 
}
:active, :hover, :focus {
  
  outline: 0;
  outline-offset: 0;
}

a {
  display: block;
  height: 100%;
  width: 100%;
}
img {
  display: block
}
;
`

