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
				<p className="titlename">Paul Xavier Perrine</p>
				{current === 0 ? (
					<p onClick={contactClick}>Contact</p>
				) : (
					<p onClick={cvClick}>CV</p>
				)}
				<p>Download</p>
			</div>
		</>
	);
}

export default Headbox;
