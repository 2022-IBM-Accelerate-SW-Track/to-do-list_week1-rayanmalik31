import React, { Component } from 'react';
import "./About.css";
import profileImage from "../assets/RayanMalik.JPG";
  
export default class About extends Component {
  render() {
    return (
<div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profileImage}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rayan Malik</div>
            <div className="brief_description">
              I am an undegraduate student at Duke University double majoring in Computer Science and Economics. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}