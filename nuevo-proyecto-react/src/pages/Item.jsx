import React from 'react'
import { UseProductById } from '../hooks/UseProductById'
import { useParams } from 'react-router-dom'
import ItemDetailContainerComponent from '../components/ItemDetailContainerComponent/ItemDetailContainerComponent';
import LoderComponent from '../components/LoaderComponent/LoderComponent';

const Item = () => {
  const {id} = useParams();
  const {product, loading} = UseProductById(id);

  return loading ? <LoderComponent /> : <ItemDetailContainerComponent product={product}/>
}

export default Item