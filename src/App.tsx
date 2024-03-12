import CVpage from "./components/CVpage";
import Headbox from "./components/Headbox";
import Footbox from "./components/Footbox";

import "./App.css";

function App() {
	return (
		<>
			<Headbox />
			<div className="contentholder">
				<CVpage />
			</div>
			<Footbox />
		</>
	);
}

export default App;
