import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";
import RightBar from "../ui/dashboard/rightbar/RightBar";
import Transaction from "../ui/dashboard/transactions/Transaction";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default DashboardPage;
