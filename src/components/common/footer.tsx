import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Logo from "@/assets/logo.svg?react"
export function Footer() {
	return (
		<div className="bg-accent">
			<div className="flex mx-auto gap-10 p-20 mt-20 max-w-7xl">
				<div className="my-auto max-w-7xl w-[50%]">
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
								<MoveRight />
							</Button>
						</div>
					</form>
				</div>
				<div className="grid gap-5 text-muted-foreground h-fit whitespace-nowrap">
					<p className="mb-5 font-semibold text-2xl text-muted-foreground/50">
						COMPANY
					</p>
					<p>About</p>
					<p>Resources</p>
					<p>Career</p>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
				</div>
				<div className="grid gap-5 text-muted-foreground h-fit whitespace-nowrap">
					<p className="mb-5 font-semibold text-2xl text-muted-foreground/50">
						SOLUTIONS
					</p>
					<p>Find a Job</p>
					<p>Post a Job</p>
					<p>How it works</p>
				</div>
				<div className="grid gap-5 text-muted-foreground h-fit whitespace-nowrap">
					<p className="mb-5 font-semibold text-2xl text-muted-foreground/50">
						CONTACT US
					</p>
					<p>EaseJob@gmail.com</p>
					<p>+2348144556678</p>
				</div>
			</div>
			<div className="flex bg-accent p-20 gap-5 items-end max-w-7xl whitespace-nowrap ">
				<Logo width={36} height={36}/>
				<p className="text-primary text-2xl font-bold">Ease Job</p>
				<p className="text-center h-full leading-relaxed text-muted-foreground">
					 &copy; 2025 Ease Job. All rights reserved
				</p>
			</div>
		</div>
	);
}
