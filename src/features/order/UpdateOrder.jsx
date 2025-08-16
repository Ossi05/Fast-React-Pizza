import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { getOrder, updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder({ order }) {
	const fetcher = useFetcher();
	const isSettingPriority = fetcher.state === "submitting";

	const handleClick = () => {};
	return (
		<fetcher.Form method="PATCH" className="text-right">
			<Button
				type="primary"
				onClick={handleClick}
				disabled={isSettingPriority}
			>
				{isSettingPriority ? "Setting priority..." : "Make priority"}
			</Button>
		</fetcher.Form>
	);
}

export async function action({ request, params }) {
	const data = { priority: true };
	await updateOrder(params.orderId, data);
}
