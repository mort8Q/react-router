import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Shop() {

    const [items, setItems] = useState([]);
    
    const fetchItems = async() => { 
        const data = await fetch('https://world.openfoodfacts.org/category/pizzas.json');
        const items = await data.json();

        console.log(items.products);
        setItems(items.products);
    }


    useEffect(() => {
        fetchItems();
    }, []);
    
    return (
        <div>
            {items.map(item => (
                <h1 key={item.code}>
                    <Link to={`/shop/${item.code}`}>{item.product_name}</Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop