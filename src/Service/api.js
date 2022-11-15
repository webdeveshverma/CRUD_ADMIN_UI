import axios from 'axios';


const BASE_URL = process.env.REACT_APP_API_URL;

export const getUsers = async (id) => {

    
    if(id=id){
        
        return await axios.get(`${BASE_URL}/${id}`);
    }
    else{
        return await axios.get(`${BASE_URL}/?limit=5`); 

    }
}


export const addUser = async (user) => {
  
   
    return await axios.post(`${BASE_URL}/add`, user);
  
}

export const deleteUser = async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${BASE_URL}/${id}`, user)
}


export const searchHandler = async (serach) => {
    return await axios.get(`${BASE_URL}/serach/${serach}`)
}

export const getAllUsers= async()=>{
    return await axios.get(`${BASE_URL}`)
}
