import { Link } from "react-router";
import Logo from "@/assets/logo.svg?react";
import { LuMenu, LuX } from "react-icons/lu";
import { MobileMenu } from "./mobile-menu-items";

export type navMenuProps = {
	isOpen?: boolean;
	onClickMenu?: () => void;
};
export function NavLogo(props: navMenuProps) {
	const { isOpen, onClickMenu } = props;

	return (
		<div className="flex items-center gap-2 my-auto h-full">
			<div className="p-1 hover:cursor-pointer" onClick={onClickMenu}>
				{isOpen ? (
					<LuX className="max-lg:block hidden" />
				) : (
					<LuMenu className="hidden max-lg:block" />
				)}
			</div>
			<MobileMenu isOpen={isOpen} onClickMenu={onClickMenu} />

			<Link
				to="/"
				className="flex gap-2 items-center text-2xl font-bold text-primary max-lg:text-foreground transition-all duration-500"
			>
				<Logo className="max-lg:hidden" />
				<p className="whitespace-nowrap">Ease Job</p>
			</Link>
		</div>
	);
}
