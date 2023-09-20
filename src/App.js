import "./App.css";
import Header from "./component/Header/Header";
import Dashboard from "./component/Dashboard/Dashboard";
import { Grid } from "@material-ui/core";
import data from "./data.json";

function App() {
	return (
		<Grid direction="column" container className="App">
			<Grid item>
				<Header />
			</Grid>
			<Grid item>
				<Dashboard data={data} />
			</Grid>
		</Grid>
	);
}

export default App;
