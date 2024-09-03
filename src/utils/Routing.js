import { createBrowserRouter } from "react-router-dom";
import VideoCardContainer from "../components/VideoCardContainer.jsx"
import App from "../App.js";
import Watch from "../components/Watch.jsx";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<VideoCardContainer/>
            },
            {
                path:"/watch",
                element:<Watch/>
            }
        ]
    }
])

export default router;