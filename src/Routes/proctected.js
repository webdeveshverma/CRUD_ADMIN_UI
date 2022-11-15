import { Navigate,Outlet } from "react-router-dom"
import AllRoutes from "./AllRoutes"
import { useSelector } from "react-redux"



const PrivateRoute=()=>{

    const {isAuthenticated}=useSelector((store)=>store.LogReducer);

    return(
        isAuthenticated ? <Outlet/> : <Navigate to ="/" />
    )
}

export default PrivateRoute;