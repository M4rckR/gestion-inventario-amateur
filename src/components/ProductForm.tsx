import { useState } from "react";
import { Product, NewProduct } from "../types";

type ProductFormProps = {
    addProduct: (item:NewProduct) => void
    productos: Product[]
}

import { MySwal } from "../helper/sweetAlert";

export const ProductForm = ({addProduct, productos}:ProductFormProps) => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    // const [productoIngresado, setProductoIngresado] = useState(null)



    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (nombre.trim() === '' || precio === 0 || cantidad === 0) {
            MySwal.fire({
          title: 'Error',
          text: 'Todos los campos son obligatorios',
          icon: 'error'
            });
        } else if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
            MySwal.fire({
          title: 'Error',
          text: 'El precio y la cantidad deben ser números válidos y mayores a 0',
          icon: 'error'
            });
        } 
        else if(precio > 2000){
            MySwal.fire({
                title: 'Error',
                text: 'El precio no puede ser mayor a 2000',
                icon: 'error'
                  });
        }
        else if(cantidad > 20){
            MySwal.fire({
                title: 'Error',
                text: 'La cantidad no puede ser mayor a 20',
                icon: 'error'
                  });
        }

        else{
          if(productos.some(producto => producto.name.toLocaleLowerCase() === nombre.toLocaleLowerCase())){
            MySwal.fire({
                title: 'Error',
                text: 'No puede haber dos productos con el mismo nombre',
                icon: 'error'
                  });
            return
          }
          addProduct({name:nombre,price:precio,quantity:cantidad,total:precio*cantidad})
        }

    }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="border p-4 col-span-full md:col-span-1">
        <h2 className="text-center text-2xl mb-4 bg-slate-700 text-white p-2 font-bold">
          Agregar producto
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <label className="w-24" htmlFor="">
            Nombre
          </label>
          <input onChange={(e) => setNombre(e.target.value)} id="nombre-producto" className="input-form" type="text" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <label className="w-24" htmlFor="">
            Precio
          </label>
          <input onChange={(e) => setPrecio(Number(e.target.value))} id="precio-producto" className="input-form" type="text" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <label className="w-24" htmlFor="">
            Cantidad
          </label>
          <input onChange={(e) => setCantidad(Number(e.target.value))} id="cantidad-producto" className="input-form" type="text" />
        </div>

        <button
          type="submit"
          className="bg-emerald-700 text-white p-2 block mt-4 ml-auto"
        >
          Agregar producto
        </button>
      </form>
    </>
  );
};
