import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Mint from "./pages/Mint";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
        },
        {
            path: "/mint",
            element: <Mint />,
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Router
