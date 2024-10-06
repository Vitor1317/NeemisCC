import { About } from "./pages/About.jsx";
import { Footer } from "./pages/Footer.jsx";
import { Hero } from "./pages/Hero.jsx";
import { Members } from "./pages/Members.jsx";
import { Navbar } from "./pages/Navbar.jsx";

export function App() {
	return (
		<main className="max-w-7x1 mx-auto relative">
			<Navbar />
			<Hero />
			<About />
			<Members />
			<Footer />
		</main>
	);
}
