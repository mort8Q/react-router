import React, { useState, useEffect } from 'react'

function ItemDetail({ match }) {

    const [item, setItem] = useState({});
    
    console.log(match);

    const fetchItem = async() => {
        const fetchItem = await fetch(`https://world.openfoodfacts.org/api/v0/product/${match.params.id}.json`)
        const item = await fetchItem.json();
        setItem(item.product);
        console.log(item.product);
    }

    useEffect(() => {
        fetchItem()
    }, []);

    return (
        <div>
            <h1>{item.product_name}</h1>
            <img alt={item.product_name} src={item.image_url} />
        </div>
    )
}

export default ItemDetail

