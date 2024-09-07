import { createBrowserRouter } from "react-router-dom";
import VideoCardContainer from "../components/VideoCardContainer.jsx"
import App from "../App.js";
import Watch from "../components/Watch.jsx";
import Search from "../components/Search.jsx";
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
                path:"/watch/:videoId",
                element:<Watch/>
            },
            {
                path:"/search/:search",
                element:<Search/>
            },
        ]
        
    }
])

export default router;