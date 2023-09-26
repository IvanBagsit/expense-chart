import styles from "./Dashboard.module.css";
import Chart from "../Chart";
import { Button, Dialog } from "@mui/material";
import { BiMoneyWithdraw } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import DetailsModal from "../Modal/DetailsModal";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const Dashboard = ({ data }) => {
	const initialInputValues = [
		{ day: "Monday", amount: "" },
		{ day: "Tuesday", amount: "" },
		{ day: "Wednesday", amount: "" },
		{ day: "Thursday", amount: "" },
		{ day: "Friday", amount: "" },
		{ day: "Saturday", amount: "" },
		{ day: "Sunday", amount: "" },
	];

	const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
	const [inputValues, setInputValues] = useState(initialInputValues);
	const [initialData, setInitialData] = useState(data);

	const amountChecker = (value) => {
		const parsedNumber = parseFloat(value);
		if (!isNaN(parsedNumber)) {
			return parsedNumber;
		} else {
			return 0;
		}
	};

	const handleInputChange = (index, value) => {
		setInputValues((prevValues) => {
			const updatedValues = [...prevValues];
			updatedValues[index].amount = value;
			return updatedValues;
		});
	};

	const handleExpenseSubmit = () => {
		const updatedValues = inputValues.map((item) => ({
			...item,
			amount: amountChecker(item.amount),
		}));
		setInitialData(updatedValues);
		setIsExpenseModalOpen(false);
	};

	const totalAmount = initialData.reduce((accumulator, item) => {
		return accumulator + item.amount;
	}, 0);

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
							${totalAmount.toFixed(2)}
						</div>
					</div>
				</div>
			</div>
			{isExpenseModalOpen && (
				<DetailsModal
					open={isExpenseModalOpen}
					close={() => {
						setIsExpenseModalOpen(false);
						setInputValues(initialInputValues);
					}}
					title={"Weekly Expense"}
					primaryBtnLabel={"Submit"}
					secondaryBtnLabel={"Cancel"}
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
		</div>
	);
};

export default Dashboard;
