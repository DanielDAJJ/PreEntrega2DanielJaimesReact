import { collection, doc, getDocs, getFirestore, snapshotEqual } from 'firebase/firestore'
import React from 'react'

export const UseCategory = () => {
    const [categories, setCategories] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(()=>{
        const db = getFirestore();
        const categoryCollection = collection(db, 'category');
        getDocs(categoryCollection)
        .then((snapshot)=>{
            setCategories(
                snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            )
        })
        .catch((err)=>{console.log(err)})
        .finally(()=>setLoading(false))
    })
    return {categories, loading}
}

