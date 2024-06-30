import React from 'react'
import { getProductById } from '../services/products'

export const UseProductById = (id) => {
  const [product, setProduct] = React.useState({})
  React.useEffect(()=>{
    getProductById(id)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
  }, [id])
  return { product }
}

