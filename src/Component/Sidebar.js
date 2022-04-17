import React, { useState } from "react";
import "../css/sidebar.css";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { Modal } from "@mui/material";
import { storage,db } from "../firebase";
import firebase from "firebase";


function Sidebar() {
  const [open,setOpen] =useState(false);  
  const [uploading, setUploading] =useState (false);
  const [file,setFile] =useState (null);
  const handleClose=()=>{
    setOpen(false);
  } 
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleChange=(e)=>{
     if(e.target.files[0])
     {

    setFile(e.target.files[0])
     }
  }
  const handleUpload=(event)=>{
     event.preventDefault()  // (submit  prevent refresh)
      setUploading (true);

      storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
        storage.ref ("files").child(file.name).getDownloadURL().then(url=>{
          db.collection('myfiles').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            filename:file.name,
            fileURL:url,
            size:snapshot._delegate.bytesTransferred
          })
          setUploading(false);
          setFile(null)
          setOpen(false);
        })
      })
    }

  return (
    <>
    <Modal open={open} onclose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className=" ">
              <h3>Select File to Upload</h3>
            </div>
            <div className="modalBody">
            {
              uploading ? (<p className="uploading">Uploading...</p>) : (
                 <>
                 <input type="file" onChange={handleChange}/>
              <input type="submit" className="post_submit" onClick={handleUpload}/>
              </>
              )
            }
              
            </div>
          </form>
        </div>
    </Modal>
    <div className="sidebar">
      <div className="sidebar_btn">
        <button onClick={handleOpen}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxCXbF9mYt8rgZPWF0ONGMF_9-DVlrCgc8w&usqp=CAU" />
          <span> New</span>
        </button>
      </div>
      <div className="sidebar_options ">
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
          <StarBorderOutlinedIcon />
          <span>Starred</span>
        </div>
        <div className="sidebar_option">
          <DeleteOutlineOutlinedIcon />
          <span>Trash</span>
        </div>
      </div>
      <hr/>
      <div className="sidebar_option">
          <CloudOutlinedIcon/>
          <span>Storage</span>
        </div>
        <div className="progress_bar">
          <progress size='tiny' value='50' max='100'/>
          <span>6.53 GB of 15 GB used</span>
        </div>
    </div>
    </>
  );
}

export default Sidebar;
