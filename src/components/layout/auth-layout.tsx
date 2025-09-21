import { LuMoveLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import { AppLogo } from "../logo/AppLogo";
import { useNavigate } from "react-router";

export function AuthLayout({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate();

	const handleBack = () => {
		if (window.history.length > 1) {
			navigate(-1);
		} else {
			navigate("/", { replace: true }); // fallback to home
		}
	};

	return (
		<>
			<header>
				<div className="flex items-center px-4 py-3 sm:px-4 sm:py-8 gap-4">
					<Button variant={"ghost"} onClick={handleBack}>
						<LuMoveLeft size={22} />
					</Button>
					<AppLogo />
				</div>
			</header>
			{children}
		</>
	);
}
