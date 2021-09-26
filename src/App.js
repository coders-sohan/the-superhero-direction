// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SuperHero from "./components/SuperHeros/SuperHero";

function App() {
	return (
		<div>
			<Header></Header>
			<SuperHero></SuperHero>
			<Footer></Footer>
		</div>
	);
}

export default App;
