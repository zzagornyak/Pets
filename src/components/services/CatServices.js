// TODO неиспользуемые данные в результате _transformBreeds
// TODO неиспользуемые данные в результате _transformImages
// TODO однообразная обработка результатов

import { useHttp } from "./http.hook";

const useCatServices = () => {
    const _baseApi = "https://api.thecatapi.com/v1/"
    
    const {loading, request, postRequest, error, clearError} = useHttp()

// RandomCat
    const getRandomCat = async () => {
        const res = await request(`${_baseApi}images/search`)
        return res.map((item) => {
            return {
                image: item.url,
                id: item.id
            }
        })
    }
// Breed
    const getAllBreeds = async (limit=null, offset=0) => {
        const res = await request(`${_baseApi}breeds`)
        return _transformBreeds(res)
    }
    
    
    const getBreedById = async (id) => {
        const res = await request(`${_baseApi}breeds/${id}`)
        return res
    } 
    
    const getSlicedBreeds = async (limit=10, page=0) => {
        const res = await request(`${_baseApi}breeds?limit=${limit}&page=${page}`)
        return _transformBreeds(res)
    }
    
// Images
    const getImagesById = async(limit=10, page=0, breedId) => {
        const res = await request(`${_baseApi}images/search?order=ASC&page=${page}&limit=${limit}&breed_ids=${breedId}&include_breeds=true`)
        return _transformImages(res)
    }
    
    const getDataToGallery = async(limit=10, page=0, order="RANDOM", itemsType="jpg,png",choosedBreed="beng") => {
        const res = await request(`https://api.thecatapi.com/v1/images/search?mime_types=${itemsType}&order=${order}&page=${page}&limit=${limit}&breed_ids=${choosedBreed}&include_breeds=true`)
            
        return res.map((item, index) => {
            return {
                id: item.id,
                image: item.url
            }
        })
    }

    
// 
    const _transformBreeds = (breeds) => {
        return breeds.map((breed, id) => {
            return {
                name: breed.name,
                description: breed.description,
                
                image:  breed.image ? breed.image["url"] : null,
                id: breed.id
                
            }
            
        })
    }
    const _transformImages = (items) => {
        return items.map((item, id) => {
            return {
                name: item.breeds[0].name,
                image:  item.url,
                id: item.breeds[0].id
                
            }
            
        })
    }



    return {loading, request, error, clearError, getRandomCat, getAllBreeds,getSlicedBreeds, getBreedById, getImagesById, getDataToGallery}

    
}
export default useCatServices;

