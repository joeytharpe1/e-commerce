import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({

    name: 'cartItem',
    initialState: {
        cart: 0
    },

    reducers: {
        add: (state) => {
            if(state.cart < 0){
                state.cart += 2
            }else if(state.cart === 0){
                state.cart += 1
            } 
            else{
                state.cart += 1
            } 
            
        },

        decrement: (state) => {
            if(state.cart < 0){
                state.cart += 1 
            } else {
                state.cart -= 1
            }
        }
    },
})

export const { add, decrement } = cartSlice.actions;

export default cartSlice.reducer;