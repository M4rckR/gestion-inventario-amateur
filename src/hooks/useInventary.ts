import { useState } from 'react'
import { Product, NewProduct } from '../types'
// import { MySwal } from "../helper/sweetAlert";

export const useInventary = () => {
  const [productos, setProductos] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  

  const addProduct = (item:NewProduct) => {
    const productoIngresado:Product = {...item, id:Date.now()}
    setProductos( prev => [...prev,productoIngresado])       
    setTotal(prev => prev + productoIngresado.total)
  }

  const removeProduct = (id:number) => {
    const producto = productos.find(producto => producto.id === id)
    if(producto){
      setTotal(prev => prev - producto.total)
      setProductos(prev => prev.filter(producto => producto.id !== id))
    }
  }
  

  return {
    addProduct,
    productos,
    total,
    removeProduct
  }
}
