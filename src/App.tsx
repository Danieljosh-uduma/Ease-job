import "./App.css";
import { ModeToggle } from "@/components/widgets";
import { Navbar } from "@/components/common";
import { HomePage } from "./pages";
import { ThemeProvider } from "@/contexts/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Navbar />
			<HomePage />
			<ModeToggle />
		</ThemeProvider>
	);
}

export default App;
