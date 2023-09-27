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
	disablePrimaryButton = false,
	hint,
	content,
}) => {
	return (
		<Dialog open={open} maxWidth={"xs"} fullWidth>
			<DialogTitle className={styles.title}>{title}</DialogTitle>
			<DialogContent className={styles.content}>
				<div>{content}</div>
				<div className={styles.hint}>{hint}</div>
			</DialogContent>
			<DialogActions className={styles.footer}>
				<Button variant="outlined" color="primary" onClick={close}>
					{secondaryBtnLabel}
				</Button>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					onClick={submit}
					disabled={disablePrimaryButton}
				>
					{primaryBtnLabel}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DetailsModal;
