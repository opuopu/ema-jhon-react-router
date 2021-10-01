import React from 'react';

const ReviewItem = (props) => {
    const{category,price,name,key} = props.product || {}
    const{removeitem} = props
    return (
        <div>
            <h1>{name}</h1>
            <p>{category}</p>
            <h5>price : {price}</h5>
            <button onClick ={() => removeitem(key)}>remove item</button>
        </div>
    );
};

export default ReviewItem;