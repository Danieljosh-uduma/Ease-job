import { LuMoveRight } from "react-icons/lu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Logo from "@/assets/logo.svg?react";
import {
	SiInstagram,
	SiFacebook,
	SiLinkedin,
	SiTelegram,
} from "react-icons/si";
import { Link } from "react-router";
export function Footer() {
	return (
		<div className="bg-accent p-20 max-lg:p-10 space-y-20">
			<div className="flex mx-auto gap-10 mt-20 max-w-7xl max-lg:flex-col">
				<div className="my-auto max-w-7xl w-[50%] max-lg:w-full">
					<form className="grid py-10 items-center gap-3 w-fit">
						<p className="mb-5 text-muted-foreground font-semibold text-lg">
							Subscribe to our Newsletter
						</p>
						<Label htmlFor="email" className="font-semibold">
							Email
						</Label>
						<div className="flex">
							<Input
								type="email"
								id="email"
								placeholder="Your email here"
								className="rounded-r-none bg-background"
							/>
							<Button size={"icon"} type="submit" className="rounded-l-none">
								<LuMoveRight />
							</Button>
						</div>
					</form>
				</div>
				<div className="grid gap-5 text-muted-foreground text-[14px] h-fit whitespace-nowrap">
					<p className="mb-5 font-semibold text-muted-foreground/50">
						COMPANY
					</p>
					<p>About</p>
					<p>Resources</p>
					<p>Career</p>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
				<div className="grid gap-5 text-muted-foreground text-[14px] h-fit whitespace-nowrap">
					<p className="mb-5 font-semibold text-muted-foreground/50">
						SOLUTIONS
					</p>
					<p>Find a Job</p>
					<p>Post a Job</p>
					<p>How it works</p>
				</div>
				<div className="grid gap-5 text-muted-foreground text-[14px] h-fit whitespace-nowrap">
					<p className="mb-5 font-semibold text-muted-foreground/50">
						CONTACT US
					</p>
					<p>EaseJob@gmail.com</p>
					<p>+2348144556678</p>
				</div>
			</div>
			<div className="flex bg-accent gap-3 max-w-7xl whitespace-nowrap max-lg:flex-col items-center max-lg:items-start">
				<Link to={"/"} className="flex gap-2 items-center">
					<Logo width={36} height={36} />
					<p className="text-primary text-2xl font-semibold">Ease Job</p>
				</Link>

				<p className="max-lg:w-full text-end text-muted-foreground text-xs max-lg:text-left">
					&copy; 2025 Ease Job. All rights reserved
				</p>

				<div className="flex gap-4 ml-auto max-lg:ml-0 text-primary ">
					<Link to={"#"}>
						<SiFacebook />
					</Link>
					<Link to={"#"}>
						<SiInstagram />
					</Link>
					<Link to={"#"}>
						<SiLinkedin />
					</Link>
					<Link to={"#"}>
						<SiTelegram />
					</Link>
				</div>
			</div>
		</div>
	);
}
