import "./App.css";
import { ModeToggle } from "@/components/widgets";
import { Navbar } from "@/components/common";
import { HomePage } from "./pages";
import { ThemeProvider } from "@/contexts/theme-provider";
import { TargetCustomerSection } from "@/components/common/target-customers";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Navbar />
			<HomePage />
			<ModeToggle />
      <TargetCustomerSection/>
		</ThemeProvider>
	);
}

export default App;
