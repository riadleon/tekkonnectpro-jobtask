import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BulkVerfication from "../Pages/BulkVerfication/BulkVerfication";
import Home from "../Pages/Home/Home";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>,


            },
            {
                path: '/bulk',
                element: <BulkVerfication></BulkVerfication>,


            },

        ]
    }
])
export default router;