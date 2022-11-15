import AddUser from "../Component/AddUser";
import AllUsers from "../Component/AllUsers";
import EditUser from "../Component/EditUser";
import Login from "../Component/Login";
import TheWebpatriot from "../Component/TheWebpatriot";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./proctected";




const AllRoutes = () => {


    return (
        <>
            <BrowserRouter>


                <Routes   >
                    <Route element={<PrivateRoute/>}>
                        <Route path="/home/all" element={<AllUsers />} />
                        <Route path="/home/add" element={<AddUser />} />
                        <Route path="/home/all/edit/:id" element={<EditUser />} />
                        <Route path="/home" element={<TheWebpatriot />} />

                    </Route>

                    <Route path="/" element={<Login />} />
                </Routes>

             
            </BrowserRouter>
        </>
    )
}

export default AllRoutes;