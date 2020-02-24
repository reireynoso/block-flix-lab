import React from 'react'

const ItemCard = (props) => {
    const {cart, item, item: {name, image_url, description, price}, handleAddToCart} = props
    return(
        <div className="item-card">
            <h2>{name}</h2>
            <img className="item-image" src={image_url} alt={name}/>
            <p>{description}</p>
            <p>Price: ${price}</p>
            {
                cart.includes(item) ? 
                <div>
                    <button disabled className="item-button">
                        <div>
                            <i className="material-icons">
                                shopping_cart
                            </i>
                        </div>      
                        <div>
                            Already in Cart
                        </div>
                    </button> 
                </div>
                : 
                <div>
                     <button onClick={() => handleAddToCart(props.item)} className="item-button">
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
            }    
        </div>
    )
}

export default ItemCard