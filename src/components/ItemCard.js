import React from 'react'

const ItemCard = (props) => {
    return(
        <div className="item-card">
            <h2>{props.item.name}</h2>
            <img className="item-image" src={props.item.image_url}/>
            <p>{props.item.description}</p>
            <p>Price: ${props.item.price}</p>
            <button className="item-button">
                <div>
                    <i className="material-icons">
                        shopping_cart
                    </i>
                </div>
                
                <div>
                    Add to Cart
                </div>
            </button>
        </div>
    )
}

export default ItemCard