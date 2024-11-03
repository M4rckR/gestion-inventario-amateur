import { Product } from "../types";
import { MdDelete } from "react-icons/md";

type ProductListsProps = {
  productos: Product[]
  total:Product['total']
  removeProduct: (id:number) => void
}

export const ProductLists = ({productos,total,removeProduct}:ProductListsProps) => {
  return (
    <div className="border p-4 col-span-2">
      <h2 className="text-center text-2xl mb-4 bg-slate-700 text-white p-2 font-bold">Lista de Productos</h2>
      <div>
        {productos.length === 0 ? (
          <h2 className="text-center font-bold text-2xl py-24 animate-bounce">La lista de productos esta vacia</h2>
        ): (
          <>
            <div className="border">
                <div className="flex  items-center border-b p-2 bg-green-800 text-white font-semibold">
                  <p className="flex-1 text-left">Nombre</p>
                  <p className="flex-1 text-left">Precio</p>
                  <p className="flex-1 text-left">Cantidad</p>
                  <p className="flex-1 text-left">Total</p>
                  <p className="flex-1 text-left">Acciones</p>
                </div>
                {productos.map(producto => (
                  <div key={producto.id} className="flex items-center border-b p-2">
                    <p className="flex-1 text-left">{producto.name}</p>
                    <p className="flex-1 text-left">{producto.price}</p>
                    <p className="flex-1 text-left">{producto.quantity}</p>
                    <p className="flex-1 text-left">{producto.total}</p>
                    <div className="flex flex-1">
                      <button className="text-red-600 text-2xl">
                        <MdDelete
                          onClick={() => removeProduct(producto.id)}
                        />
                      </button>
                    </div>

                    
                  </div>
                ))}
            </div>
            <div className="flex mt-4 p-2 justify-between">
              <p className="text-2xl font-semibold">Precio Total:
                <span className="font-normal"> S/{total}</span>
                </p> 
              <button className="bg-emerald-700 text-white block p-2 font-semibold">Proceder con el Pago</button>
            </div>
            
          </>
        )}
      </div>

      
    </div>
  )
}
