import React, { useState } from "react";
import { ReactComponent as CloseButton } from "../../assets/CloseButton.svg";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Notification.scss";

function Notification({ children }) {
  const [notification, setNotification] = useState(false);

  const closeNotification = () => setNotification(!notification);
  return (
    <div
      className={classNames("notification", {
        "notification-closed": notification,
      })}
    >
      <button className="notification__button" onClick={closeNotification}>
        <CloseButton className="notification__button-icon" />
      </button>
      {children}
    </div>
  );
}

Notification.propTypes = {
  children: PropTypes.string,
};

export default Notification;
