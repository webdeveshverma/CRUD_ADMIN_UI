
import { AppBar, Toolbar, styled,Button } from '@mui/material';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import {AiOutlineLogout,AiOutlineUser} from 'react-icons/ai';
import{ImUserPlus} from 'react-icons/im';

const Header = styled(AppBar)`
    background: rgb(250,131,34);
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-left: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {

    const { user}= useSelector((store)=>store.LogReducer)
  
    return (
        <Header position="static">
            <Toolbar className='navbar_tool'>
              <div className='admin_div'>
                <Tabs to="/home" exact>{user.username}</Tabs>
                <Tabs to="/home/all" exact>All Users</Tabs>
                <Tabs to="/home/add" exact>Add User</Tabs>
              </div>
                <Tabs className='logouttab' to="/" ><Button variant="outlined" style={{color:"white",fontWeight:"bold"}} >LogOut<AiOutlineLogout style={{fontSize:"20px",color:"white"}} /></Button></Tabs>
            </Toolbar>
            
        </Header>
    )
}

export default NavBar;