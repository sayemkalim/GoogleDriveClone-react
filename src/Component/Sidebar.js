import React from "react";
import "../css/sidebar.css";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_btn">
        <button>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxCXbF9mYt8rgZPWF0ONGMF_9-DVlrCgc8w&usqp=CAU" />
          <span>New</span>
        </button>
      </div>
      <div className="sidebar_options">
        <div className="sidebar_option">
          <MobileScreenShareIcon />
          <span>My Drives</span>
        </div>
        <div className="sidebar_option">
          <DevicesIcon />
          <span>Computer</span>
        </div>
        <div className="sidebar_option">
          <PeopleAltOutlinedIcon />
          <span>Shared with me</span>
        </div>
        <div className="sidebar_option">
          <QueryBuilderOutlinedIcon />
          <span>Recent</span>
        </div>
        <div className="sidebar_option">
          <DeleteOutlineOutlinedIcon />
          <span>Trash</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
