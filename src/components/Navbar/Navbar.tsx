import React from "react";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/public/logo.svg" alt="" />
        <span>MaxDashboard</span>
      </div>
      <div className="icons">
        <img src="/public/search.svg" alt="" />
        <img src="/public/app.svg" alt="" />
        <img src="/public/expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://yt3.googleusercontent.com/ytc/AOPolaToAOoB7zZaRe9kVmXGi6QWBBPrESpK8pcaWnBL=s176-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <span>lama</span>
        </div>
        <img src="/public/settings.svg" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
