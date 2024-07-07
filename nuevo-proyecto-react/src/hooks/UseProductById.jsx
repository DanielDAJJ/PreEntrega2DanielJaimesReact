import React from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const UseProductById = (id) => {
  const [product, setProduct] = React.useState({})
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    const db = getFirestore();
    const productRef = doc(db, "products", id)
    getDoc(productRef)
      .then((snapshot)=>{
        setProduct({id: snapshot.id, ...snapshot.data()})
      })
      .catch((error)=>{console.log(error)})
      .finally(()=>setLoading(false))
  }, [id])
  return { product, loading }
}

