import React from 'react'
import { UseProductById } from '../hooks/UseProductById'
import { useParams } from 'react-router-dom'
import ItemDetailContainerComponent from '../components/ItemDetailContainerComponent/ItemDetailContainerComponent';

const Item = () => {
  const {id} = useParams();
  const {product} = UseProductById(id);

  return <ItemDetailContainerComponent product={product}/>
}

export default Item