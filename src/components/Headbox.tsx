import "./Headbox.css";

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
				<p
					onClick={cvClick}
					className={current === 0 ? "currentpage" : ""}
				>
					CV
				</p>
				<p
					onClick={contactClick}
					className={current === 1 ? "currentpage" : ""}
				>
					Contact
				</p>
				<p>Download</p>
			</div>
		</>
	);
}

export default Headbox;
