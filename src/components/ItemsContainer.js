import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    return(
        <div>
            <h1>Store Items</h1>
            <div className="e-commerce-container">
            {
                props.items.map(item => <ItemCard 
                    key={item.id} 
                    item={item}
                    handleAddToCart={props.handleAddToCart}
                />)
            }
            </div>
        </div>
    )
}

export default ItemsContainer