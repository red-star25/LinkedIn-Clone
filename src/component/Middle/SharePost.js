import React from 'react'
import "./SharePost.css"
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';

function SharePost() {
    return (
        <div className="sharePost">
            <div className="sharePost__write">
                <button className="sharePost__button">
                    <img src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/edit_modify_write_pen-512.png" alt=""/>
                    <p>Start a post</p>
                </button>
            </div>
            <div style={{height:"5px",borderBottom:"1px solid #D3D3D3"}}></div>
            <div className="sharePost__icons">
                <div className="camera">
                <CameraAltOutlinedIcon style={{color:"rgb(0, 148, 187)"}} fontSize="14px"/>
                <p>Photo</p>
                </div>
                <div className="video">
                <VideocamOutlinedIcon style={{color:"#9896f2"}} fontSize="14px"/>
                <p>Video</p>
                </div>
                <div className="article">
                <DescriptionOutlinedIcon style={{color:"#EF7E37"}} fontSize="14px"/>
                <p>Write</p>
                </div>
                <div className="note">
                <NoteOutlinedIcon style={{color:"#17AFB8"}} fontSize="14px"/>
                <p>Document</p>
                </div>
            </div>
        </div>
    )
}

export default SharePost
