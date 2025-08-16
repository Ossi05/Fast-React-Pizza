import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
	const totalCartQuantity = useSelector(getCartTotalQuantity);
	const totalPrice = useSelector(getCartTotalPrice);
	const location = useLocation();
	const isCartPage = location.pathname === "/cart";

	if (!totalCartQuantity) return null;

	return (
		<div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
			<p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
				<span>{totalCartQuantity} pizzas</span>
				<span>{formatCurrency(totalPrice)}</span>
			</p>
			{isCartPage ? (
				<Link to="/order/new">Order &rarr;</Link>
			) : (
				<Link to="/cart">Open cart &rarr;</Link>
			)}
		</div>
	);
}

export default CartOverview;
