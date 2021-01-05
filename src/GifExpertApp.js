import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([ 'One Punch']);
    
    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Hunter x Hunter'] );
    //     setCategories( cats => [...cats, 'Hunter X Hunter']); 
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr/>
            <button> Agregar </button>
            {
                categories.map( category => 
                    <GifGrid
                        key= {category}
                        category={ category }
                    />
                 )
            }
        </>
    );
}