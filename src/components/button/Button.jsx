/**
 * Welcome to @VISact/Button!
 *
 * The Button component is used for initiating an action on the
 * application.
 *
 * NOTE: All the props are optional
 * @prop {string} variant - The of button to be used. e.g. basic,
 * link, action, etc.
 * @prop {string} theme - The theme of the button to use. e.g.
 * primary, danger, success, warning, etc.
 * @prop {string} size - The size of the button. e.g. sm, md, lg
 * @prop {string} shape - The shape of the button. e.g. sharp, square,
 * rounded
 *
 * @see Docs - {coming soon...}
 * @see Source - https://github.com/VishalPatil18/VISact/tree/development/src/components/button
 */

import "./Button.css";

const Button = ({
  variant = "basic",
  theme = "",
  size = "md",
  shape = "square",
  children,
}) => {
  return (
    <>
      <button
        className={`button btn-${variant} btn-${theme} btn-${size} btn-${shape}`}
      >
        {children}
      </button>
    </>
  );
};

export { Button };
