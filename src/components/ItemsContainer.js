import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    return(
        <div>
            <h1>Store Items</h1>
            <div className="e-commerce-container">
                <ItemCard />
            </div>
        </div>
    )
}

export default ItemsContainer