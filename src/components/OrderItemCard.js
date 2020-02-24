import React from 'react';

const OrderItemCard = (props) => {

    return (
      <div className="item-card-simplified">
          <div>
            <img className="item-card-simplified-image" src={"image_url"} alt={"name"}/>
            <p>{"name"}</p>
          </div>
      </div>
    )
}

export default OrderItemCard