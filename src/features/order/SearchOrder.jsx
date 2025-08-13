import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Search");
		if (!query) return;
		navigate(`/order/${query}`);
		setQuery("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="rounded-full bg-yellow-100 px-4 py-2 placeholder:text-stone-400 
				text-sm w-28 sm:w-64 sm:focus:w-72 transition-all duration-300
				focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
				placeholder="Search order #"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</form>
	);
}
