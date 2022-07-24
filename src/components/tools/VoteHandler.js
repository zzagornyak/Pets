import { useContext } from "react"
import { CatContext } from "../Context/CatContext"


const  VoteHandler = () => {

    
    const {LikedKey, DislikedKey,FavoritesKey, LogKey} = useContext(CatContext) 
    const [liked, setToLiked] = LikedKey
    const [disliked, setToDisliked] = DislikedKey
    const [favorites, setToFavorites] = FavoritesKey
    const [log, setLog] = LogKey

    const time = getCurrentTime()
    const clickHandler = (action, randomCat) => {
        switch(action) {
            case "like":
                setToLiked(prev=>[...prev, randomCat ])
                setLog(prev => [{
                    id: randomCat.id,
                    message: "was added to Likes",
                    action: "like",
                    time: time,
                }, ...prev ])
                break
            case "dislike":
                setToDisliked(prev=>[...prev, randomCat,])
                setLog(prev => [{
                    id: randomCat.id,
                    message: "was added to Dislikes",
                    action: "dislike",
                    time: time,
                }, ...prev])
                break
            case "favorite":
                setToFavorites(prev => [...prev, randomCat ])
                setLog(prev => [{
                    id: randomCat.id,
                    message: "was added to Favorites",
                    action: "favorite",
                    time: time,
                }, ...prev, ])
                break
            case "delete":
                setToFavorites(prev => prev.filter((item) => {
                    return item.id !== randomCat.id
                }))
                setLog(prev => [{
                    id: randomCat.id,
                    message: "was removed from Favorites",
                    action: "delete",
                    time: time,
                }, ...prev])
        }
    }
    return {clickHandler}
}


const getCurrentTime = () => {
    const newDate = new Date()
  
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()
  
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
  
    const res = hours + ":" + minutes
    return res
  }


  export default VoteHandler