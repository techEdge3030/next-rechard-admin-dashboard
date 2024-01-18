import { AudioWaveform } from "lucide-react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <AudioWaveform />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>22.777</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
