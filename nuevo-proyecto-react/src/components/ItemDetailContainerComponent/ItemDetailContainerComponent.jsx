import React from 'react'
import './ItemDetailContainerComponent.css'
import { CartContext } from '../../context/CartContext'

const ItemDetailContainerComponent = ({product}) => {
    const {addToCart, removeFromCart} = React.useContext(CartContext);
    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
        addToCart(product, 1);
    };
    const handleRemove = () => {
        setQuantity(quantity - 1);
        removeFromCart(product, 1);
    };
    return (
        <div className='detailItem'>
            <div className='detailItemImg'>
                {
                    product.images ? (product.images.map((image, index) => {return <img key={index} src={image} alt=''/>})) : (<img src={product.thumbnail} alt={product.title}/>)
                }
            </div>
            <div className='detailItemText'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
            <div className='detailItemButtom'>
                <button onClick={handleRemove}>-</button>
                <span>{quantity}</span>
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemDetailContainerComponent