import { Grid } from "@material-ui/core";
import BarGraph from "./BarGraph";

const Chart = ({ data }) => {
	const tempData = data;
	const calculatePercent = (amount, maxAmount) => {
		const tempPercent = ((amount / maxAmount) * 100).toFixed(2);
		return isNaN(tempPercent) ? 0 : tempPercent;
	};

	const maxAmount = tempData.reduce(
		(max, item) => (item.amount > max ? item.amount : max),
		0
	);

	const percentArray = tempData.map((data) => ({
		day: data.day,
		amount: data.amount,
		percent: calculatePercent(data.amount, maxAmount),
		isHighest: data.amount >= maxAmount,
	}));

	return (
		<Grid
			spacing={2}
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-end"
		>
			{percentArray?.map((item) => {
				return (
					<Grid item xs key={item.day}>
						<BarGraph
							title={item.day}
							amount={item.amount}
							percent={item.percent}
							isHighest={item.isHighest}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Chart;
