import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@material-ui/core";
import styles from "./CashInModal.module.css";

const CashInModal = ({ open, close, submit }) => {
	return (
		<Dialog open={open}>
			<DialogTitle>Cash In</DialogTitle>
			<DialogContent>COntence</DialogContent>
			<DialogActions>
				<Button variant="outlined" color="primary" onClick={close}>
					Cancel
				</Button>
				<Button variant="contained" color="primary" onClick={submit}>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CashInModal;
