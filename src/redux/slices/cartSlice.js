import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //function to add item to cart
        addToCart:(state,action)=>{
            state.push(action.payload)            
        },
                    //function to remove an invidual item cart
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        deleteCart:(state)=>{

                    // function to remove all the elemnts from cart
                return state = []
        }

    }
})

export const {addToCart,removeFromCart,deleteCart} =cartSlice.actions
export default cartSlice.reducer