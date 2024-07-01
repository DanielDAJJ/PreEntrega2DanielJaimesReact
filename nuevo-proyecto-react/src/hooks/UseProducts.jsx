import React from 'react'
import { getAllProducts} from '../services/products'

export const UseProducts = () => {
    const [products, setProducts] = React.useState([]);
    React.useEffect (()=>{
        getAllProducts()
            .then((res)=>{
                setProducts(res.data.products);
            }).catch((err)=>{
                console.log(err)
            });
    }, [])
    return {products}
}
