import React from 'react'
import { getAllProducts} from '../services/products'

export const UseProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true)

    React.useEffect (()=>{
        getAllProducts()
            .then((res)=>{
                setProducts(res.data.products);
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                setLoading(false)}
            );
    }, [])
    return {products, loading}
}
