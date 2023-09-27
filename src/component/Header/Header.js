import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Button, InputAdornment, TextField } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import DetailsModal from "../Modal/DetailsModal";
import Flag from "../../images/flag.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "../redux/redux";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const Header = () => {
	const [isFullPageLoaderShown, setIsFullPageLoaderShown] = useState(false);
	const [isCashInModalShown, setIsCashInModalShown] = useState(false);
	const [cashInAmount, setCashInAmount] = useState();
	const [cashInValue, setCashInValue] = useState();
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const balance = useSelector((state) => state.expenseSlice.balance);
	const dispatch = useDispatch();

	const handleSubmit = () => {
		setIsFullPageLoaderShown(true);
		setIsCashInModalShown(false);
		setTimeout(() => {
			dispatch(addBalance(cashInAmount));
			handleCancelButton();
			setIsFullPageLoaderShown(false);
		}, 2000);
	};

	const handleOnBlur = () => {
		if (!isNaN(cashInValue)) {
			const parsedValue = parseFloat(cashInValue);
			setCashInAmount(parsedValue);
			setHasError(false);
			setErrorMessage(null);
		} else {
			setHasError(true);
			setErrorMessage("Please enter valid amount");
		}
	};

	const handleOnChange = (value) => {
		setCashInValue(value);
	};

	const handleCancelButton = () => {
		setCashInValue();
		setCashInAmount();
		setHasError(false);
		setErrorMessage(null);
		setIsCashInModalShown(false);
	};

	return (
		<div>
			<div className={styles.background}>
				<div className={styles.balance}>
					<div>
						<div>My balance</div>
						<div className={styles.amount}>
							${balance.toFixed(2)}
						</div>
					</div>
					<div className={styles.cashInButton}>
						<Button
							color="primary"
							variant="contained"
							startIcon={<AiOutlinePlus />}
							onClick={() => setIsCashInModalShown(true)}
						>
							Cash In
						</Button>
					</div>
				</div>
				<div>
					<Logo />
				</div>
			</div>
			{isCashInModalShown && (
				<DetailsModal
					title={"Cash In"}
					primaryBtnLabel={"Submit"}
					secondaryBtnLabel={"Cancel"}
					open={isCashInModalShown}
					close={handleCancelButton}
					submit={handleSubmit}
					disablePrimaryButton={hasError}
					content={
						<div className={styles.content}>
							<img src={Flag} alt="Flag" />
							<div className={styles.contentTitle}>
								Enter amount
							</div>
							<TextField
								name="cashin"
								variant="standard"
								placeholder="0.00"
								size="small"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<b style={{ color: "black" }}>
												PHP
											</b>
										</InputAdornment>
									),
								}}
								value={cashInValue}
								onChange={(e) => handleOnChange(e.target.value)}
								onBlur={handleOnBlur}
								error={hasError}
								helperText={errorMessage}
							/>
							<div className={styles.contentMessage}>
								Please check the amount before you proceed.
							</div>
						</div>
					}
				/>
			)}
			{isFullPageLoaderShown && (
				<FullPageLoader open={isFullPageLoaderShown} />
			)}
		</div>
	);
};

export default Header;
