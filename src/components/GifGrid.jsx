import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category); // Le mandamos la categoría al custom hook. Lo que devuelve lo desestructuramos {images, isLoading}


  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
          {
            images.map((image) => (
                <GifItem
                  key={image.id}
                  {...image} // Manda desestructurado lo que contiene "image" en la posición actual
                />
            ))
          }          
        </div>
        
    </>
  )
}
