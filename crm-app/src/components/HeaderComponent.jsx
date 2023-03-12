import React from "react";
import "../styles/HeaderComponent.scss";
import menu from "../img/menu.svg";
import search from "../img/search.svg";
import notification from "../img/notifications.svg";
import settings from "../img/settings.svg";
import messages from "../img/messages.svg";
import user from "../img/user.png";

function HeaderComponent() {
  return (
    <div className="header">
      <div className="header_menu">
        <img src={menu} className="header_menu_img" />
      </div>
      <div className="header_search">
        <img src={search} className="header_search_img" alt="search" />
        <input className="header_search_input" placeholder="Search..."></input>
      </div>
      <div className="header_buttons">
        <img src={settings} className="header_buttons_button" alt="settings" />
        <img
          src={notification}
          className="header_buttons_button"
          alt="notifiacetion"
        />
        <img src={messages} className="header_buttons_button" alt="messages" />
      </div>
      <div className="header_logout-container">
        <button className="header_logout-container_button">LogOut</button>
      </div>
      <div className="header_profile">
        <img src={user} className="header_profile_img" alt="user-photo" />
        <div className="header_profile_about">
          <p className="header_profile_about_name">Thomas Fleming</p>
          <p className="header_profile_about_email">emai@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
