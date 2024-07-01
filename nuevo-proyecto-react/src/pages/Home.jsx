import React from 'react'
import ItemListComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { UseProducts } from '../hooks/UseProducts'
import LoderComponent from '../components/LoaderComponent/LoderComponent';

const Home = () => {
  const {products, loading} = UseProducts();

  return loading ? <LoderComponent/> : <ItemListComponent  products={products}/> 
}

export default Home