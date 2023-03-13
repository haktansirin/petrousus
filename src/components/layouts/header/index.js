import Button from "@/components/forms/button";
import Logo from "../logo";
import Menu from "../menu";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <Button href="/buy-now" link>
        Buy Now
      </Button>
    </header>
  );
};
