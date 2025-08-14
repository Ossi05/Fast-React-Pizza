import { createSlice } from "@reduxjs/toolkit";

export async function getAddress({ latitude, longitude }) {
	const res = await fetch(
		`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
	);
	if (!res.ok) throw Error("Failed getting address");

	const data = await res.json();
	return data;
}

const initialState = {
	username: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateName(state, action) {
			state.username = action.payload;
		},
	},
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
