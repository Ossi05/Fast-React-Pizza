import { createSlice } from "@reduxjs/toolkit";

// {
// 	pizzaId: 12,
// 	name: "Mediterranean",
// 	quantity: 2,
// 	unitPrice: 16,
// 	totalPrice: 32,
// },

const initialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			// payload = item
			state.cart.push(action.payload);
		},
		removeItem(state, action) {
			// payload = id
			state.cart = state.cart.filter(
				(item) => item.pizzaId !== action.payload
			);
		},
		increaseItemQuantity(state, action) {
			// payload = id
			const item = state.cart.find(
				(item) => item.pizzaId === action.payload
			);
			item.quantity++;
			item.totalPrice = item.unitPrice * item.quantity;
		},
		decreaseItemQuantity(state, action) {
			// payload = id
			const item = state.cart.find(
				(item) => item.pizzaId === action.payload
			);
			item.quantity--;
			item.totalPrice = item.unitPrice * item.quantity;
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});

export const {
	addItem,
	removeItem,
	decreaseItemQuantity,
	increaseItemQuantity,
	clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getCartTotalQuantity = (state) =>
	state.cart.cart.reduce((total, item) => (total += item.quantity), 0);
export const getCartTotalPrice = (state) =>
	state.cart.cart.reduce((total, item) => (total += item.totalPrice), 0);

export default cartSlice.reducer;
