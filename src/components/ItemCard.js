import React from 'react'

const ItemCard = (props) => {
    
    return(
        <div className="item-card">
            <h2>{"name"}</h2>
            <img className="item-image" src={"image_url"} alt={"name"}/>
            <p>{"description"}</p>
            <p>Price: ${"price"}</p>
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