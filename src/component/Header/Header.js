import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
	return (
		<div className={styles.background}>
			<div className={styles.balance}>
				<div >
					<div>My balance</div>
					<div className={styles.amount}>$921.48</div>
				</div>
				<div className={styles.cashInButton}>
					<Button
						color="primary"
						variant="contained" 
						startIcon={<AiOutlinePlus/>}
					>
						Cash In
					</Button>
				</div>
			</div>
			<div>
				<Logo />
			</div>
		</div>
	);
};

export default Header;
