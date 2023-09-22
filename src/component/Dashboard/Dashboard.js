import styles from "./Dashboard.module.css";
import Chart from "../Chart";
import { Button, Dialog } from "@mui/material";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useState } from "react";
import { DialogTitle } from "@material-ui/core";
import AddExpenseModal from "../Modal/AddExpenseModal";

const Dashboard = (data) => {
	const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

	return (
		<div>
			<div className={styles.background}>
				<div className={styles.header}>
					<div className={styles.title}>Spending - Last 7 days</div>
					<div>
						<Button
							color="warning"
							variant="contained"
							startIcon={<BiMoneyWithdraw />}
							onClick={() => {
								setIsExpenseModalOpen(true);
							}}
						>
							Add Expense
						</Button>
					</div>
				</div>
				<div className={styles.chart}>
					<Chart data={data} />
				</div>
				<div container className={styles.footer}>
					<div className={styles.amountContainer}>
						<div className={styles.totalTitle}>Total this week</div>
						<div className={styles.totalAmount}>$478.33</div>
					</div>
					<div className={styles.percentContainer}>
						<div className={styles.percent}>+2.4%</div>
						<div className={styles.percentDetails}>
							from last week
						</div>
					</div>
				</div>
			</div>
			{isExpenseModalOpen && (
				<AddExpenseModal
					open={isExpenseModalOpen}
					close={() => setIsExpenseModalOpen(false)}
				/>
			)}
		</div>
	);
};

export default Dashboard;
