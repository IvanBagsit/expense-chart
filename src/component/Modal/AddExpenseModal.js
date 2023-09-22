import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@material-ui/core";
import styles from "./AddExpenseModal.module.css";

const AddExpenseModal = ({ open, close, submit }) => {
	return (
		<Dialog open={open}>
			<DialogTitle>Weekly Expense</DialogTitle>
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

export default AddExpenseModal;
