// * Componentes
// import Navigation from "./components/navigation";

// * Componentes
import Root from "./components/root";
import VentasForm from "./components/ventas-form";
import VentasList from "./components/list/ventas-list";
import ErrorPage from "./components/error-page";

// * Enrutamiento
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "lista",
        element: <VentasList />,
      },
      {
        path: "venta",
        element: <VentasForm />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
