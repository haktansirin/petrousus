import Link from "next/link";
import menuList from "@/data/menuList";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      {menuList.map((menu) => (
        <Link href={menu.path} key={menu.id} className={styles.menuItem}>
          {menu.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
