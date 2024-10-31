import { ProductForm } from "./components/ProductForm";


export const App = () => {


  return (
    <>
      <header className="mb-12">
        <h1 className="bg-green-900 text-white py-4 text-center text-3xl font-semibold">
          Gestion de inventario en tienda
        </h1>
      </header>


      <main className="container mx-auto grid grid-cols-1 gap-2  lg:grid-cols-3">
        <ProductForm />
        <div className="border p-4 col-span-1 lg:col-span-2">

        </div>
      </main>


    </>
  );
};
