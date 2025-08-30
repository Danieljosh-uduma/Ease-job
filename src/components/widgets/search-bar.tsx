import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LuSearch } from "react-icons/lu";
import { Command, CommandGroup, CommandItem } from "../ui/command";

type SearchBarProps = React.ComponentProps<typeof Input> & {
	onSubmit: React.FormEventHandler<HTMLFormElement>;
	suggestions?: string[];
};

export function SearchBar(props: SearchBarProps) {
	const { onSubmit, suggestions, ...inputProps } = props;

	const [query, setQuery] = React.useState("");
	const [focused, setFocused] = React.useState(false);
	const filterSuggestions = suggestions?.filter((suggestion) =>
		suggestion.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<form
				onSubmit={onSubmit}
				className="relative w-full flex mt-10 items-center"
			>
				<Input
					type="search"
					value={query}
					onFocus={() => setFocused(true)}
					onChange={(e) => {
						setQuery(e.target.value);
						setFocused(true);
					}}
					onBlur={() => setFocused(false)}
					placeholder={inputProps.placeholder || "Search..."}
					className=" p-5 w-full  bg-background"
				/>
				<Button
					type="submit"
					className="absolute right-2 top-1/2 -translate-y-1/2"
				>
					<LuSearch className="font-bold" />
					<div className="max-lg:hidden p-0 m-0 border-none">Search</div>
				</Button>
			</form>
			<Command className="bg-transparent">
				<CommandGroup className="text-white">
					{focused &&
						filterSuggestions?.map((suggestion: string, index: number) => (
							<>
								{index === 0 && <p className="mt-2.5">POPULAR SEARCHES</p>}
								<CommandItem
									key={suggestion}
									value={suggestion}
									onMouseDown={(e) => {
										// capture data before the blur event
										e.preventDefault();
										setQuery(suggestion);
										setFocused(false);
									}}
									className="data-[selected=true]:bg-black/50 data-[selected=true]:text-white"
								>
									<LuSearch color="white" /> {suggestion}
								</CommandItem>
							</>
						))}
				</CommandGroup>
			</Command>
		</>
	);
}
