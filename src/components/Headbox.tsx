import "./Headbox.css";
import cv from "../assets/paul_xavier_perrine_cv.pdf";

interface HeadboxProps {
	current: number;
	changeCurrent: (newCurrent: number) => void;
}

function Headbox({current, changeCurrent}: HeadboxProps) {
	function contactClick() {
		changeCurrent(1);
	}
	function cvClick() {
		changeCurrent(0);
	}

	return (
		<>
			<div className="headbox boxes">
				<p className="titlename" onClick={cvClick}>
					Paul Xavier Perrine
				</p>
				<a
					onClick={cvClick}
					className={current === 0 ? "currentpage" : ""}
					href="#"
				>
					CV
				</a>
				<a href={cv} download>
					PDF
				</a>
				<a
					onClick={contactClick}
					className={current === 1 ? "currentpage" : ""}
					href="#"
				>
					Contact
				</a>
			</div>
		</>
	);
}

export default Headbox;
