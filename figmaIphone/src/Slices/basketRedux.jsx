import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.value.push(action.payload)
        }
    }
})
export const { addToBasket } = BasketSlice.actions;
export default BasketSlice.reducer;