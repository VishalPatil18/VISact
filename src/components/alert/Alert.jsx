/**
 * Welcome to @VISact/Alert!
 *
 * The Alert component is for all your alerts in your application. Each Alert
 * consists of a body which is displayed inside it.
 *
 * NOTE: All the props are optional
 * @prop {string} variant - The variant of alert to use.
 *                          e.g. basic, with-icon i.e. `wicon`
 * @prop {string} action - The action you're performing with the alert for icons.
 *                         e.g. info, danger, success, warning
 * @prop {string} position - The position of alert to be displayed on window.
 *                           e.g. top-left, top-right, bottom-left, bottom-right, etc
 * @prop {} children - The inner children to be displayed in the alert.
 * @prop {} rest - All other props which can include theme, closeHandler function, etc.
 *
 * TODO: All alert incoming and outgoing animation
 *
 * @see Docs - {coming soon...}
 * @see Source - https://github.com/VishalPatil18/VISact/tree/development/src/components/alert
 */

import { Icon } from "@iconify/react";
import { icons } from "../../utilities/icons";
import "./Alert.css";

const Alert = ({
  variant = "wicon",
  action = "info",
  position = "top-left",
  children,
  ...rest
}) => {
  return (
    <div className={`alert al-${variant} al-${rest.theme} ${position}`}>
      {variant === "wicon" && (
        <Icon icon={icons[action]} className="left-icon" />
      )}
      {children}
      {variant === "wicon" && (
        <Icon
          icon={icons.close}
          className="close-icon"
          onClick={rest.closeHandler}
        />
      )}
    </div>
  );
};

export { Alert };
