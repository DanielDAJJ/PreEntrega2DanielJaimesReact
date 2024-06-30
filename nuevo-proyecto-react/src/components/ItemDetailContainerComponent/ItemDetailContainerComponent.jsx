import React from 'react'
import './ItemDetailContainerComponent.css'

const ItemDetailContainerComponent = ({product}) => {
    return (
        <div className='detailItem'>
            <div>
                {
                    product.images ? (product.images.map((image, index) => {return <img key={index} src={image} alt=''/>})) : (<img src={product.thumbnail} alt={product.title}/>)
                }
            </div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ItemDetailContainerComponent