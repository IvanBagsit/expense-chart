import styles from "./Dashboard.module.css";
import Chart from "../Chart";
import { Grid } from "@material-ui/core";

const Dashboard = (data) => {
	return (
		<div className={styles.background}>
			<div className={styles.title}>Spending - Last 7 days</div>
			<div className={styles.chart}>
				<Chart data={data} />
			</div>
			<div container className={styles.footer}>
				<div className={styles.amountContainer}>
					<div className={styles.totalTitle}>Total this month</div>
					<div className={styles.totalAmount}>$478.33</div>
				</div>
				<div className={styles.percentContainer}>
					<div className={styles.percent}>+2.4%</div>
					<div className={styles.percentDetails}>from last month</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
