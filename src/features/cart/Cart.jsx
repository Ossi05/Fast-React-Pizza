import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";

function Cart() {
	const cart = useSelector((state) => state.cart.cart);
	const username = useSelector((state) => state.user.username);

	return (
		<div className="py-3 px-4">
			<LinkButton to="/menu">&larr; Back to menu</LinkButton>

			<h2 className="mt-7 text-xl font-semibold">
				Your cart, {username}
			</h2>

			<ul className="divide-y divide-stone-200 border-b border-stone-200 mt-3">
				{cart.map((item) => (
					<CartItem key={item.pizzaId} item={item} />
				))}
			</ul>

			<div className="mt-6 space-x-2">
				<Button to="/order/new" type="primary">
					Order pizzas
				</Button>
				<Button type="secondary">Clear cart</Button>
			</div>
		</div>
	);
}

export default Cart;
