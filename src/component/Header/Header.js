import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Button } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import DetailsModal from "../Modal/DetailsModal";

const Header = () => {
	const [isCashInModalShown, setIsCashInModalShown] = useState(false);
	return (
		<div>
			<div className={styles.background}>
				<div className={styles.balance}>
					<div>
						<div>My balance</div>
						<div className={styles.amount}>$921.48</div>
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
					close={() => setIsCashInModalShown(false)}
					content={<div>HI</div>}
				/>
			)}
		</div>
	);
};

export default Header;
