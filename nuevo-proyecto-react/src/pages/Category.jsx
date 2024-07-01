import React from 'react'
import ItemListComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { useParams } from 'react-router-dom'
import { UseProductsByCategory } from '../hooks/UseProductsByCategory'
import LoderComponent from '../components/LoaderComponent/LoderComponent'

const Category = () => {
  const { id } = useParams();
  const { products, loading } = UseProductsByCategory(id);
  
  return loading ? <LoderComponent/> : <ItemListComponent products={products}/> 
}

export default Category