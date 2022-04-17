import React from 'react';
import "../css/header.css";
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
function Header({photoURL}) {
  return (
    <div class='header'>
    <div class='header_logo'>
        <img src='https://kstatic.googleusercontent.com/files/f4b4fbcc6119576da7ab3f68270196009fc1b16f1927910842d793c385115593b6dd5fbe9a1e21fe64f3cbbc509c3a02c95ebc9635f76c355282482986f1fe7d'/>
        <span> Clone Drive</span>
    </div>
    <div class='header_search'>
      <SearchIcon/>
      <input type="text" placeholder='Search in Clone Drive'/>
      <FormatAlignCenterIcon/>
      <NotificationsNoneOutlinedIcon/>
    </div>
    <div class='header_icons'>
    <span><HelpOutlineIcon/></span>
    <span><SettingsOutlinedIcon/></span>
    <span><AppsIcon/></span>
    <span><AccountCircleOutlinedIcon src={photoURL}/></span>
      
    </div>
    </div>
  )
}

export default Header