import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const UseProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true)

    React.useEffect (()=>{
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        getDocs(productsCollection)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return {products, loading}
}
