import React from "react";

function Notification({ children }) {
  return (
    <div className="notification is-primary">
      <button className="delete"></button>
      {children}
    </div>
  );
}

export default Notification;
