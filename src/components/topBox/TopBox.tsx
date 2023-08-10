import React from "react";
import "./topbox.scss";
import { topDealUsers } from "../../data.ts";

function TopBox() {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((e) => (
          <div className="listitem" key={e.id}>
            <div className="user">
              <img src={e.img} alt="" />
              <div className="usertexts">
                <span className="username">{e.username}</span>
                <span className="email">{e.email}</span>
              </div>
            </div>
            <span className="amount">${e.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
