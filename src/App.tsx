import {useState} from "react";

import CVpage from "./components/CVpage";
import Headbox from "./components/Headbox";
import Footbox from "./components/Footbox";
import Contact from "./components/Contact";

import "./App.css";

function App() {
	const [current, setCurrent] = useState(0);

	function changeCurrent(newCurrent: number) {
		setCurrent(newCurrent);
	}

	return (
		<>
			<Headbox current={current} changeCurrent={changeCurrent} />
			<div className="contentholder">
				{current === 0 ? <CVpage /> : <Contact />}
			</div>
			<Footbox />
		</>
	);
}

export default App;
