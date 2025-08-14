import { Link } from "react-router-dom";

export default function Button({
	children,
	type,
	to,
	className = "",
	...props
}) {
	const baseStyles = `inline-block rounded-full bg-yellow-400 font-semibold tracking-wide focus:ring-offset-2 text-stone-800 uppercase focus:bg-yellow-300 transition-colors duration-300 hover:cursor-pointer focus:ring-yellow-300 focus:ring hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed ${className} `;

	const styles = {
		primary: baseStyles + "px-4 py-3 md:px-6 md:py-4",
		small: baseStyles + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
		secondary: `inline-block rounded-full border-2 border-stone-300 font-semibold tracking-wide focus:ring-offset-2 text-stone-400 uppercase focus:bg-stone-300 transition-colors duration-300  hover:text-stone-800 hover:cursor-pointer focus:ring-stone-200  
		focus:ring focus:text-stone-800 hover:bg-stone-300 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 ${className} `,
	};

	if (to) {
		return (
			<Link className={styles[type]} to={to} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={styles[type]} {...props}>
			{children}
		</button>
	);
}
