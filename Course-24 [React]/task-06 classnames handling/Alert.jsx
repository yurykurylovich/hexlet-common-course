/* Alerts.jsx
Write an Alert React component that has some text and changes according to its type (one of these: primary, secondary, success, danger, warning, info, light, dark).
Type is changed by adding proper class: class="alert alert-warning", "alert alert-light" and so on.
*/

import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

class Alert extends React.Component {
  render() {
    const { type, text } = this.props;
    const classList = cn("alert", `alert-${type}`)
    return (
      <div className={classList} role="alert">
        {text}
      </div>
    )
  }
}

ReactDOM.render(<Alert type="danger" text="What is love?"/>,
  document.getElementById("container"))
