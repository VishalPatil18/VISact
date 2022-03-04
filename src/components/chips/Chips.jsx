/**
 * Welcome to @VISact/Chips!
 *
 * The Chips component is used for tags for accessing a specific category of items
 *
 * NOTE: All the props are optional
 * @prop {string} variant - The variant of chip to use. e.g. basic,
 * dismissible.
 * @prop {string} theme - The theme of the chip to use. e.g.
 * primary, danger, success, warning, etc.
 * @prop {string} shape - The shape of the button. e.g. sharp,
 * square, rounded
 *
 * @see Docs - {coming soon...}
 * @see Source - https://github.com/VishalPatil18/VISact/tree/development/src/components/chips
 */

import { Icon } from "@iconify/react";
import { icons } from "../../utilities/icons";
import "./Chips.css";

const Chips = ({
  variant = "basic",
  theme = "basic",
  shape = "rounded",
  children,
}) => {
  return (
    <>
      <span className={`chip ch-${theme} ch-${shape}`}>
        {children}
        {variant === "dismissible" && (
          <Icon icon={icons.close} className="close-btn" />
        )}
      </span>
    </>
  );
};

export { Chips };
