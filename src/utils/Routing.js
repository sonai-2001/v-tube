import { createBrowserRouter } from "react-router-dom";
import VideoCardContainer from "../components/VideoCardContainer.jsx"
import App from "../App.js";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<VideoCardContainer/>
            }
        ]
    }
])

export default router;