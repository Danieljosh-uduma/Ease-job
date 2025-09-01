import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link } from "react-router";

type isMobileProp = {
	isMobile?: boolean;
};

export function MenuItems({ isMobile = false }: isMobileProp) {
	return (
		<>
			{isMobile ? (
				<NavigationMenu orientation="vertical" viewport={false}>
					<NavigationMenuList className="flex-col">
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
							<NavigationMenuContent className="h-fit z-50">
								<div className="relative grid w-[200px] gap-4">
									<NavigationMenuLink asChild>
										<Link to="#">Post a Job</Link>
									</NavigationMenuLink>
								</div>
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
			) : (
				<NavigationMenu viewport={false} className={"max-lg:hidden"}>
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
								<div className="relative grid w-[200px] gap-4 z-[1000]">
									<NavigationMenuLink asChild>
										<Link to="#">Post a Job</Link>
									</NavigationMenuLink>
								</div>
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
			)}
		</>
	);
}
