/**
 * Welcome to @VISact/Badge!
 *
 * The Badge component is used for user specifiying users current activity or minimal
 * information like no. of notifications or items in cart, etc.
 *
 * NOTE: All the props are optional
 * @prop {string} variant - The variant of badge to use. e.g. numeric, solid, outline
 * @prop {string} value - For the numberic variant the value to be displayed in the badge.
 * @prop {string} themeColor - For the numeric and solid variant the background
 *                                      color to be used and for the outline variant the
 *                                      color of border. eg. warning, danger, dark, etc
 * @prop {string} size - The size of the badge component. e.g. sm, md, lg
 *
 * TODO: Add animations to badges on hover
 *
 * @see Docs - {coming soon...}
 * @see Source - https://github.com/VishalPatil18/VISact/tree/development/src/components/badge
 */

import "./Badge.css";

const Badge = ({
  variant = "solid",
  value = "99",
  themeColor = "primary",
  size = "md",
}) => {
  return (
    <>
      {variant === "solid" ? (
        /******* SOLID *******/
        <span
          className={`badge bdg-${size} bdg-${themeColor} bdg-solid`}
        ></span>
      ) : variant === "numeric" ? (
        /******* NUMERIC *******/
        <span className={`badge bdg-${size} bdg-${themeColor} bdg-numeric`}>
          {value}
        </span>
      ) : (
        /******* OUTLINE *******/
        <span
          className={`badge bdg-${size} bdg-outline bdg-outline-${themeColor}`}
        ></span>
      )}
    </>
  );
};

export { Badge };
