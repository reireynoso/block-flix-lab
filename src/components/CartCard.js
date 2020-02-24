import React from 'react';

const CartCard = (props) => {

  return (
    <div className="item-card-simplified">
      <div>
        <img alt={"name"} className="item-card-simplified-image" src={"image_url"}/>
        <p>{"name"}</p>
      </div>
      <button className="item-card-simplified-button">Remove from Cart</button>
    </div>
  )
}

export default CartCard
