import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@material-ui/core";
import styles from "./DetailsModal.module.css";

const DetailsModal = ({
	title,
	primaryBtnLabel,
	secondaryBtnLabel,
	open,
	close,
	submit,
	content,
}) => {
	return (
		<Dialog open={open} maxWidth={"xs"} fullWidth>
			<DialogTitle className={styles.title}>{title}</DialogTitle>
			<DialogContent className={styles.content}>{content}</DialogContent>
			<DialogActions className={styles.footer}>
				<Button variant="outlined" color="primary" onClick={close}>
					{secondaryBtnLabel}
				</Button>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					onClick={submit}
				>
					{primaryBtnLabel}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DetailsModal;
