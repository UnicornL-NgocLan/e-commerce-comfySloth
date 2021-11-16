import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import styled from 'styled-components'


const ProductList = () => {
  const {filtered_products:products,grid_view} = useFilterContext();

  if(products.length <1){
    return (
        <div>
          <img 
          style={{width:'250px', height:'250px'}}
          src='https://i.pinimg.com/originals/29/00/92/2900920e2ac0a0c8f16eba53c837315b.gif' alt=''/>
        </div>
    )
  }
  if(grid_view ===false){
    return <ListView products={products}/>
  }
  return <GridView products={products}></GridView>
}

export default ProductList
