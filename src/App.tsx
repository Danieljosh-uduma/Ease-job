/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import AppRouter from "./router";
import { AnimatePresence } from "motion/react";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<AnimatePresence>
				<AppRouter />
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default App;
