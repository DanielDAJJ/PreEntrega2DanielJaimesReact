import React from 'react'
import ItemListComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { useParams } from 'react-router-dom'
import { UseProductsByCategory } from '../hooks/UseProductsByCategory'

const Category = () => {
  const { id } = useParams();
  const { products } = UseProductsByCategory(id);
  
  return <ItemListComponent products={products}/> 
}

export default Category