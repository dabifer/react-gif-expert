import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {

        // Agregamos la categoría nueva solamente si no existe
        if(categories.includes(newCategory)) return;

        return setCategories([newCategory, ...categories]);
    }



  return (
    <>
        {/* TÍTULO*/}
        <h1>GifExpertApp</h1>


        { /* INPUT */ }
        <AddCategory
           onNewCategory = { value => onAddCategory(value)} // Recibe el evento (value) y llama a la función "onAddCategory" que lo recibe como "newCategory"
        />



        { /* LISTADO DE GIFs */}
            {
                categories.map(category => (
                        <GifGrid
                            key={category}
                            category={ category }
                        />
                    )
                )
            }
        

            { /* GIF Item*/}
    </>
  )
}
