import { Grid } from "@material-ui/core";
import styles from "./BarGraph.module.css";
import { useState } from "react";

const BarGraph = ({ title, amount, percent, isHighest }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleAmountHover = () => {
		setIsHovered(true);
	};

	const handleAmountHoverOut = () => {
		setIsHovered(false);
	};

	const barGraphColor = isHighest ? "#7eb0b5" : "#ea755d";

	return (
		<Grid
			container
			direction="column"
			justifyContent="flex-end"
			alignItems="center"
			style={{ height: "160px" }}
		>
			{isHovered && (
				<Grid item>
					<div className={styles.amount}>${amount}</div>
				</Grid>
			)}
			<Grid item>
				<div
					className={styles.bar}
					style={{
						height: `${percent}px`,
						backgroundColor: barGraphColor,
					}}
					onMouseOver={handleAmountHover}
					onMouseOut={handleAmountHoverOut}
				/>
			</Grid>
			<Grid item>
				<div className={styles.title}>{title}</div>
			</Grid>
		</Grid>
	);
};

export default BarGraph;
