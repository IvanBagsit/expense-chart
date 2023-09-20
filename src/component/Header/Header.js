import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";

const Header = () => {
	return (
		<div className={styles.background}>
			<div className={styles.balance}>
				<div>My balance</div>
				<div className={styles.amount}>$921.48</div>
			</div>
			<div className={styles.logo}>
				<Logo />
			</div>
		</div>
	);
};

export default Header;
