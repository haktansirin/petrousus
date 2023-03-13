import Link from "next/link";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ children, type, link, href, outline, white }) => {
  return (
    <>
      {link ? (
        <Link
          href={href}
          className={classNames(`${styles.button}`, {
            [styles.buttonOutline]: outline,
            [styles.buttonWhite]: white,
          })}
        >
          {children}
        </Link>
      ) : (
        <button type={type} className={styles.button}>
          {children}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
