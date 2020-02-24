import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    const {items, handleAddToCart} = props
    return(
        <div>
            <h1>Store Items</h1>
            <div className="e-commerce-container">
            {
                items.map(item => <ItemCard 
                    key={item.id} 
                    item={item}
                    handleAddToCart={handleAddToCart}
                />)
            }
            </div>
        </div>
    )
}

export default ItemsContainer