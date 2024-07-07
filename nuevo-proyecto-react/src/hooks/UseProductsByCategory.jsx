import { collection, doc, getDocs, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import React from 'react'


export const UseProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        const productsQuery = query(productsCollection, where('category', '==', category));
        getDocs(productsQuery)
        .then((snapShot)=>{
            setProducts(snapShot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{setLoading(false)})
    },[category])
  return {products, loading}
}
