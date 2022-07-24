import styled from 'styled-components'
import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../style/Theme.js'
import { lightTheme } from '../style/Theme.js'
import SideNav from '../sideNav/SideNav'
import Breeds from '../routes/breeds/Breeds'
import Gallery from '../routes/gallery/Gallery'
import Voting from '../routes/voting/Voting'
import Favorites from '../routes/favorites/Favorites'
import Liked from '../routes/liked/Liked'
import Disliked from '../routes/disliked/Disliked'
import Home from '../routes/home/Home'
import Selected from '../routes/selected/Selected'
import Search from '../routes/search/Search'

import { BreedsProvider } from '../Context/BreedsContext'
import { GalleryProvider } from '../Context/GalleryContext'


function App() {
    const [theme, setTheme] = useState(darkTheme)

    return (
        <ThemeProvider theme={theme}>
            <StyledDiv>
                <StyledWrapper>
                    <StyledPart >
                        <SideNav
                            theme={theme}
                            setTheme={setTheme}
                        />
                    </StyledPart>
                    <StyledPart >
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/gallery" element={(
                                    <GalleryProvider>
                                        <Gallery/>
                                    </GalleryProvider>
                                )}/>
                            <Route path="/voting" element={<Voting/>}/>
                            <Route path="/search" element={<Search/>}/>
                            <Route path="/favorites" element={<Favorites/>}/>
                            <Route path="/liked" element={<Liked/>}/>
                            <Route path="/disliked" element={<Disliked/>}/>
                            <Route path="/breeds" element={(
                                    <BreedsProvider>
                                        <Breeds/>
                                    </BreedsProvider>)}
                            />
        
                            <Route path="selected/:id" element={<Selected/>}>
        
                            </Route>
        
                        </Routes>
                    </StyledPart>
                </StyledWrapper>
            </StyledDiv>
        </ThemeProvider>
    );
}

export default App

const StyledDiv = styled.div`
min-height: 100vh;
height: 10px;
overflow: hidden;
background-color: ${({theme}) => theme.grayBlack};
color: ${({theme})=>theme.textMain};

`
const StyledWrapper = styled.div`
min-height: 100%;
height: 1px;
padding: 30px 30px 30px 30px;
display: flex;
justify-content: space-around;
flex-flow: row;
margin: auto;
max-width: 1440px;
`
const StyledPart = styled.div`
width: 50%;
min-height: 100%;
`