import React from 'react'
import { getProductById } from '../services/products'

export const UseProductById = (id) => {
  const [product, setProduct] = React.useState({})
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    getProductById(id)
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        }).finally(()=>{
          setLoading(false)
        })
  }, [id])
  return { product, loading }
}

