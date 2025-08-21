import { Link } from "react-router";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
	NavigationMenuTrigger,
	NavigationMenuContent,
} from "../ui/navigation-menu";
import { NavLogo } from "../widgets";
import { Button } from "../ui/button";

export function Navbar() {
	return (
		<div className="relative flex justify-around w-full p-3 z-[100000]">
			<NavLogo />
			<NavigationMenu viewport={false}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="#">Home</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="#">Find a Job</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Hire a Talent</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[200px] gap-4">
								<li>
									<NavigationMenuLink asChild>
										<Link to="#">Item 1</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link to="#">Item 2</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link to="#">Item 3</Link>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link to="#">Contact Us</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className="flex gap-2">
				<Button asChild>
					<Link to="/login">Sign Up</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link to="/login">Login</Link>
				</Button>
			</div>
		</div>
	);
}
