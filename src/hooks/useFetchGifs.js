import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }
 
  // Hook // Hacemos la petición http por una sola vez al inicio
  useEffect( () => {
    getImages();    
  }, [])

  return {
    //images: images,  --> Es igual a la siguiente línea
    images,
    isLoading //Pudo ser "isLoading: isLoading"
  }
}
