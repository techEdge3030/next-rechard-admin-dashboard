import styles from "@/app/ui/login/login.module.css";
import { KeyRound, Mail, Zap } from "lucide-react";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.wrapper}>
        <div className={styles.header}>
          <Zap size={50} color="#6d6d6d" strokeWidth={1.3} />
        </div>
        <div className={styles.box}>
          <input type="text" placeholder="Email" required />
          <span>
            <Mail color="#6d6d6d" strokeWidth={1.3} />
          </span>
        </div>
        <div className={styles.box}>
          <input type="password" placeholder="Password" required />
          <span>
            <KeyRound color="#6d6d6d" strokeWidth={1.3} />
          </span>
        </div>

        <div className={styles.remember}>
          <div>
            <input type="checkbox" />
            <span>Remember me!</span>
          </div>
          <a href="#\">Forgot password?</a>
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
