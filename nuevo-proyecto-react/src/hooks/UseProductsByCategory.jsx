import React from 'react'
import { getProductsByCategory } from '../services/products';

export const UseProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    React.useEffect(()=>{
        getProductsByCategory(category)
        .then((res)=>{
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[category])
  return {products}
}
