import React from 'react'
import ItemListComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { UseProducts } from '../hooks/UseProducts'

const Home = () => {
  const {products} = UseProducts();

  return <ItemListComponent products={products}/>
}

export default Home