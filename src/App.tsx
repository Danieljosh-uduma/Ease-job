/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import AppRouter from "./router";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<AppRouter />
		</ThemeProvider>
	);
}

export default App;
