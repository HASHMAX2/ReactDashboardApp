import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

function Menu() {
  return (
    <>
      <div className="menu">
        {menu.map((e) => (
          <div className="item" key={e.id}>
            <span className="title">{e.title}</span>
            {e.listItems.map((listItem) => (
              <Link to="/" className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
