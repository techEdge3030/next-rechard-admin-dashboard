import {
  BadgeDollarSign,
  Component,
  HelpingHand,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingBasket,
  UsersRound,
} from "lucide-react";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <UsersRound />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBasket />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <BadgeDollarSign />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <ShoppingBag />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <LibraryBig />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Component />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Settings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <HelpingHand />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Jane Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <LogOut />
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
