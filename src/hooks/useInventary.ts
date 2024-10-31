import { useState } from 'react'
import { Product, NewProduct } from '../types'

export const useInventary = () => {
  const [productos, setProductos] = useState<Product[]>([])

  const addProduct = ({name,price,quantity}:NewProduct) => {
    const newProduct = {name,price,quantity,id:Date.now()}
    setProductos( prev => [...prev,newProduct])    

    setTimeout(() => {
      console.log('Productos:',productos)
    }, 1000)
  }

  return {
    addProduct,
  }
}
