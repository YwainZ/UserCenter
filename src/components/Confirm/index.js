import React from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import s from "./index.css";

class Confirm extends React.Component {
  static propsTypes = {
    title: PropsTypes.string,
    confirmText: PropsTypes.string,
    tips: PropsTypes.string.isRequired
  };

  render() {
    const { title, confirmText, cancelText, tips } = this.props;
    return (
      <div className={s.container}>
        <div className={s.dialog}>
          {title && <p>{title}</p>}
          <p>{tips}</p>
          <div className={s.operation}>
            <Link to="/setkey">
              <div>{confirmText || "确认"}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
