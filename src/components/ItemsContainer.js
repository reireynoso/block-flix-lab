import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    return(
        <div className="e-commerce-container">
            {
                props.items.map(item => <ItemCard key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ItemsContainer