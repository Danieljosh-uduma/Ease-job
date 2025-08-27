import { Sheet, SheetContent } from "../ui/sheet";
import type { navMenuProps } from "./nav-logo";
import { MenuItems } from "./menu-Items";
import { Button } from "../ui/button";
import { Link } from "react-router";

export function MobileMenu(props: navMenuProps) {
	const { isOpen, onClickMenu } = props;

	return (
		<Sheet open={isOpen} onOpenChange={onClickMenu}>
			<SheetContent
				side="top"
				className="mt-14 [&>button]:hidden items-center w-full p-2"
			>
				<MenuItems isMobile />
				<div className="flex flex-col gap-2 w-full">
					<Button variant="ghost" className="w-full">
						<Link to="/login">Login</Link>
					</Button>
					<Button className="w-full" asChild>
						<Link to="/login">Sign Up</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
