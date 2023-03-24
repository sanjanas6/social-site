import React from 'react'
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom';
import { useContext } from "react";

import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

function Navbar() {

  const {toggle, darkMode} = useContext(DarkModeContext)
  const {currentUser} = true;

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration: "none"}}>
            <span>Social</span>
        </Link>
        <AddHomeOutlinedIcon />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle}/>}
        <GridViewOutlinedIcon />
        <div className='search'>
          <SearchOutlinedIcon />
          <input type="text" placeholder='search' />
        </div>
      </div>
      <div className='right'>
        <Person2OutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className='user'>
        <img src="" alt="" />
        <span>Sanjana Singh</span>
      </div>
      </div>
    </div>
  )
}

export default Navbar;