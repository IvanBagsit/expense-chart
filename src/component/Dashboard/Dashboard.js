import styles from "./Dashboard.module.css";
import Chart from "../Chart";
import { Button } from "@mui/material";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import DetailsModal from "../Modal/DetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance, updateTotalExpense } from "../redux/redux";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const Dashboard = () => {
	const initialDataValue = [
		{ day: "Monday", amount: 0 },
		{ day: "Tuesday", amount: 0 },
		{ day: "Wednesday", amount: 0 },
		{ day: "Thursday", amount: 0 },
		{ day: "Friday", amount: 0 },
		{ day: "Saturday", amount: 0 },
		{ day: "Sunday", amount: 0 },
	];

	const initialInputValues = [
		{ day: "Monday", amount: "" },
		{ day: "Tuesday", amount: "" },
		{ day: "Wednesday", amount: "" },
		{ day: "Thursday", amount: "" },
		{ day: "Friday", amount: "" },
		{ day: "Saturday", amount: "" },
		{ day: "Sunday", amount: "" },
	];

	const [isFullPageLoaderShown, setIsFullPageLoaderShown] = useState(false);
	const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
	const [inputValues, setInputValues] = useState(initialInputValues);
	const [initialData, setInitialData] = useState(initialDataValue);

	const dispatch = useDispatch();
	const totalExpense = useSelector(
		(state) => state.expenseSlice.totalExpense
	);
	const balance = useSelector((state) => state.expenseSlice.balance);

	const handleInputChange = (index, value) => {
		setInputValues((prevValues) => {
			const updatedValues = [...prevValues];
			updatedValues[index].amount = value.replace(/[^0-9]/g, "");
			return updatedValues;
		});
	};

	const totalAmount = initialData.reduce((accumulator, item) => {
		return accumulator + (item.amount || 0);
	}, 0);

	const handleExpenseSubmit = () => {
		const updatedValues = inputValues.map((item) => ({
			...item,
			amount: parseFloat(isNaN(item.amount) ? 0 : item.amount),
		}));
		setInitialData(updatedValues);
		setIsExpenseModalOpen(false);
	};

	useEffect(() => {
		setIsFullPageLoaderShown(true);
		setTimeout(() => {
			dispatch(updateTotalExpense(totalAmount));
			dispatch(updateBalance(balance - totalAmount));
			setIsFullPageLoaderShown(false);
		}, 3000);
	}, [totalAmount, initialData]);

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
					<Chart data={initialData} />
				</div>
				<div container className={styles.footer}>
					<div>
						<div className={styles.totalTitle}>Total this week</div>
						<div className={styles.totalAmount}>
							${totalExpense.toFixed(2)}
						</div>
					</div>
				</div>
			</div>
			{isExpenseModalOpen && (
				<DetailsModal
					open={isExpenseModalOpen}
					close={() => {
						setIsExpenseModalOpen(false);
					}}
					title={"Weekly Expense"}
					primaryBtnLabel={"Submit"}
					secondaryBtnLabel={"Cancel"}
					hint={"* accepts valid numbers only"}
					content={inputValues?.map((item, index) => {
						return (
							<TextField
								name={item.day}
								key={index}
								fullWidth
								label={item.day}
								variant="outlined"
								size="small"
								style={{ marginBottom: "3%" }}
								value={item.amount}
								onChange={(e) =>
									handleInputChange(index, e.target.value)
								}
							/>
						);
					})}
					submit={handleExpenseSubmit}
				/>
			)}
			{isFullPageLoaderShown && (
				<FullPageLoader open={isFullPageLoaderShown} />
			)}
		</div>
	);
};

export default Dashboard;
