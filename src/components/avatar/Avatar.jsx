/**
 * Welcome to @VISact/Avatar!
 *
 * The Avatar component is used for user profile images. It comes in two major
 * variants of image and text.
 *
 * NOTE: All the props are optional
 * @prop {string} variant - The variant of avatar to use. e.g. image, text
 * @prop {string} source - The source of image to be used in avatar.
 * @prop {string} text - For the text variant the text to be displayed in the avatar.
 * @prop {string} shape - Shape of Avatar. e.g. Circle, square, rounded, etc.
 * @prop {hex-code-string} background - For the text variant the background color to be used
 * @prop {hex-code-string} color - For the text variant the font color to be used
 * @prop {string} size - The size of the avatar component. e.g. xs, sm, md, lg, xl
 *
 * TODO: All animation to avatars on hover
 *
 * @see Docs - {coming soon...}
 * @see Source - https://github.com/VishalPatil18/VISact/tree/development/src/components/avatar
 */

import "./Avatar.css";

const Avatar = ({
  variant = "text",
  source = "https://picsum.photos/200",
  text = "aa",
  shape = "circle",
  background = "#23a6f0",
  color = "white",
  size = "md",
}) => {
  return (
    <>
      {variant === "img" ? (
        <img
          className={`avatar av-${shape} av-${size}`}
          src={source}
          alt="avatar"
        />
      ) : (
        <span
          className={`avatar av-text av-${shape} av-${size}`}
          style={{ backgroundColor: background, color: color }}
        >
          {text.substring(0, 2)}
        </span>
      )}
    </>
  );
};

export { Avatar };
