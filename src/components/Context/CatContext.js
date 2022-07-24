// TODO нужен ли breads

import {useState, createContext, useEffect} from "react";
import useCatServices from "../services/CatServices";

export const CatContext = createContext()


export const CatProvider = ({children}) => {
// Cat Service
    const {getAllBreeds} = useCatServices()
// State
    const [breeds, setBreeds] = useState([])
    const [breedsNames, setBreedNames] = useState([])
    const [liked, setToLiked] = useState([])
    const [disliked, setToDisliked] = useState([])
    const [favorites, setToFavorites] = useState([])
// Action Log
    const [log, setLog] = useState([])
// Random Cat
    const [currentRandomCat, setCurrRandomCat] = useState({
    })
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        getAllBreeds().then(res => {
            setBreeds(res)
            setBreedNames(res.map((item) => ({name: item.name, id: item.id, image: item.image})))
        })
    }, [])
    
    

    
   

    return (
        <CatContext.Provider
            value={{
                LikedKey: [liked, setToLiked],
                DislikedKey: [disliked, setToDisliked],
                FavoritesKey: [favorites, setToFavorites],
                RandomKey: [currentRandomCat, setCurrRandomCat],
                LogKey: [log, setLog],
                BreedsKey : [breeds, setBreeds],
                BreedsNamesKey: [breedsNames, setBreedNames],
                SearchKey:[searchTerm, setSearchTerm]
            }} 
        >
            {children}
        </CatContext.Provider> 
    )
}

