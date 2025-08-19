import { Link } from "react-router";
import logo from "@/assets/logo.svg";
export function NavLogo() {
	return (
		<Link
			to="/"
			className="flex gap-2 items-center text-2xl font-bold text-primary transition-colors"
		>
			<img src={logo} alt="Logo" />
			Ease Job
		</Link>
	);
}
