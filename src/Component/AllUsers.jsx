import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled, Box, TextField, Dialog, Pagination, } from '@mui/material'
import { getUsers, deleteUser, searchHandler } from '../Service/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DialogBox } from './DialogBox';
import NavBar from './NavBar';
const BASE_URL = process.env.REACT_APP_API_URL;



import("../App.css")

const StyledTable = styled(Table)`
    width: 95%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)` & > th {
        font-size: 20px;
        background: rgb(250,131,34);
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
  

    const [userData, setUserData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    const pageSize = searchedData.length > 0 ? Math.ceil(searchedData.length / 5) : Math.ceil(userData.length / 5);


    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")
    const [dialog, setDialog] = useState({
        flage: false,
        message: "",
        userName: "",
        ids: ""
    })

 

   

    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const paginationHandler = (e, value) => {
        //  default paginated data 
        if (value >= 1 && value <= pageSize) {
            if (searchedData.length > 0) {
                let res = paginate(searchedData, 5, value);
                console.log(res)
                setPaginatedData(res)
                setUsers(res)
               
            }
            else {
                let res = paginate(userData, 5, value);
                console.log(res)
                setPaginatedData(res)
                setUsers(res)
               
            }
        }
        console.log(value);
    }
    




    useEffect(() => {
        console.log("first useEffect")
        axios.get(`${BASE_URL}`).then((res) => {
            console.log(res)
            setUserData([...res.data])
            setPaginatedData(paginate(res.data, 1, 1))
        }).catch((err) => {
            console.log(err)
        });

    }, [])


 



   

    

   const getserachHandler= async()=>{

     let res=await searchHandler(search)
    setSearchedData(res.data)
    setUsers(res.data)
    console.log(res.data)
   }


    useEffect(() => {
        getAllUsers();
      

        
    }, [setSearch]);

    
    

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers([...response.data].reverse());
        
    
    }

    const getSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const handleDialog = (flage, message, userName, ids) => {
        setDialog({
            flage,
            message,
            userName,
            ids
        });
    };

    const suredelete = (res) => {
        deleteUser(dialog.ids)
         getAllUsers();
    }
    
    const areUsureDelete = () => {
        handleDialog("", false);
        getAllUsers();
    }


    return (
        <div>
            <NavBar/>
            <div className="container">
                <Box sx={{ width: "90%", height: "50px", margin: "auto", marginTop: "20px" }}>

                    <Box sx={{ width: "400px", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                        <TextField variant='outlined' label="Search by name,email or role" sx={{ width: "290px" }} onChange={getSearchInput} />
                        <Button variant='outlined' onClick={getserachHandler}>Search</Button>
                    </Box>
                </Box>

                <StyledTable>
                    <TableHead>
                        <THead>
                            <TableCell>U.ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>LastName</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Action</TableCell>

                        </THead>
                    </TableHead>
                    <TableBody>
                    {/* {[...users].reverse().map((user) => ( */}
                        
                        {users.map((user) => (
                            <TRow key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.lastname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>
                                    <Button color="success" variant="contained" style={{ marginRight: 5 }} component={Link} to={`/home/all/edit/${user._id}`}>Edit</Button>
                                    <Button color="error" variant="contained" onClick={() => handleDialog(true, "Are you want to sure delete this user", user.name, user._id)}>Delete</Button>
                                </TableCell>
                            </TRow>
                        ))}
                    </TableBody>
                </StyledTable>
                <Box sx={{  width:"400px", marginLeft: "75%", marginTop: "10px" }}>
                <Pagination count={pageSize} color="success" showFirstButton showLastButton onChange={paginationHandler} />
            </Box>
            </div>
            <div>
                {
                    dialog.flage && <DialogBox
                        onDialog={areUsureDelete}
                        ondelete={suredelete}
                        username={dialog.userName}
                    />
                }
            </div>

        </div>
    )
}

export default AllUsers;