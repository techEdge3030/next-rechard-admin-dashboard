import styles from "@/app/ui/homepage.module.css";
import Link from "next/link";
import { LogIn, Zap } from "lucide-react";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Zap size={50} color="#ffffff" strokeWidth={1.3} />
          <span>Admin Dashboard</span>
        </div>
        <Link href="/login" type="submit" className={styles.button}>
          <span>Login Page</span>
          <LogIn />
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
