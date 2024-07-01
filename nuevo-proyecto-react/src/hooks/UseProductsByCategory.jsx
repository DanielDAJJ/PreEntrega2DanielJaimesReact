import React from 'react'
import { getProductsByCategory } from '../services/products';

export const UseProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        getProductsByCategory(category)
        .then((res)=>{
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.error(err)
        }).finally(()=>{
            setLoading(false)
        })
    },[category])
  return {products, loading}
}
