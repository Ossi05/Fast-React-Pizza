import { Link } from "react-router-dom";

export default function Button({ children, to, className = "", ...props }) {
	const classes = `inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide focus:ring-offset-2 text-stone-800 uppercase focus:bg-yellow-300 transition-colors duration-300 hover:cursor-pointer focus:ring-yellow-300 focus:ring hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4 ${className}`;

	if (to) {
		return (
			<Link className={classes} to={to} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}
