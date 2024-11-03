import { ProductForm } from "./components/ProductForm";
import { ProductLists } from "./components/ProductLists" 
import { useInventary } from "./hooks/useInventary";

export const App = () => {
  const {addProduct, productos, total, removeProduct} = useInventary()

  return (
    <>
      <header className="mb-12">
        <h1 className="bg-green-900 text-white py-4 text-center text-3xl font-semibold">
          Gestion de inventario en tienda
        </h1>
      </header>


      <main className="container px-4 mx-auto md:px-0 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ProductForm 
          addProduct={addProduct}
          productos={productos}
          />
        <ProductLists 
          productos={productos}
          total={total}
          removeProduct={removeProduct}
        />
      </main>


    </>
  );
};
