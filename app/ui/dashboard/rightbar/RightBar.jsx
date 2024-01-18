import { ArrowRightToLine, Play } from "lucide-react";
import styles from "./rightbar.module.css";

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </p>
          <button className={styles.button}>
            <Play size={20} strokeWidth={1.75} />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </p>
          <button className={styles.button}>
            <ArrowRightToLine size={20} strokeWidth={1.75} />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
