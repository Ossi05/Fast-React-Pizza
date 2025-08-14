import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="py-3 px-4">
			<h1 className="text-2xl text-red-500 mb-1">
				Something went wrong 😢
			</h1>
			<p className="font-bold">
				{error.status} {error.data || error.message}
			</p>
			<LinkButton to="-1">&larr; Go back</LinkButton>
		</div>
	);
}

export default Error;
