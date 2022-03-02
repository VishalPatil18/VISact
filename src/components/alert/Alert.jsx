import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { close, info, success, danger, warning } from "../../utilities/icons";
import "./Alert.css";

console.log(close);

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
        <FontAwesomeIcon className="left-icon" icon={success} size="lg" />
      )}
      {children}
      {variant === "wicon" && (
        <FontAwesomeIcon
          className="close-icon"
          icon={close}
          size="lg"
          onClick={rest.closeHandler}
        />
      )}
    </div>
  );
};

export { Alert };
