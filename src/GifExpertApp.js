import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Braking Bad'])


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories}/>
            <hr></hr>

        <ol>

            {
                categories.map( category =>( 
                    
                <GifGrid key={category} category={category} />
                
                ))
            }
            
        </ol>

        </>
    )
}
