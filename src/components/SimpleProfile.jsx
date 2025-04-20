import React from 'react';
import webIcon from '../assets/images/web_icon.jpg';
import './SimpleProfile.css';

export default function SimpleProfile() {
  return (
    <div className="profile-container">
      {/* ตัดส่วน header ออกชั่วคราว */}
      
      {/* ส่วนเนื้อหาหลัก */}
      <main className="profile-main">
        <div className="main-content">
          <h1 className="web-title">Profile</h1>
          
          <p className="profile-title">Software Developer</p>
          
          <div className="web-icon-container">
            <img src={webIcon} alt="Web Icon" className="web-icon" />
            <p>My Web Portfolio</p>
          </div>
          
          <div className="profile-links">
            <a href="#" className="btn btn-primary">GitHub</a>
            <a href="#" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </main>
    </div>
  );
}