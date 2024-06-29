import "./App.css";
import { RouterProvider } from "react-router-dom";

import router from "@/router";
import { ProductContextProvider } from "@/context/product";
function App() {
    return (
        <ProductContextProvider>
            <RouterProvider router={router} />
        </ProductContextProvider>
    );
}

export default App;