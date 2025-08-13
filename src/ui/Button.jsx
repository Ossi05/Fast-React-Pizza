export default function Button({ children, className = "", ...props }) {
	return (
		<button
			className={`inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide focus:ring-offset-2 text-stone-800 uppercase focus:bg-yellow-300 transition-colors duration-300 hover:cursor-pointer focus:ring-yellow-300 focus:ring hover:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
