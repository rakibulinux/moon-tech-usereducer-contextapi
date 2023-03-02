import { RouterProvider } from "react-router-dom";
import ProductProvider from "./contexts/ProductProvider";
import routes from "./routes/routes";

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={routes} />
    </ProductProvider>
  );
}

export default App;
