import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {ProductType} from '../../../types'

export interface CartState{
    items: ProductType[];
}

export const initialState:CartState={
    items:[],
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItems:(state,action:PayloadAction<ProductType>)=>{
            const existingItem=state.items.find((item)=>item.id===action.payload.id);
            if (existingItem) {
                existingItem.quantites+=1
            }else{
                state.items.push({...action.payload,quantites:1})
            }
        },
        removeItems:(state,action)=>{
            state.items=state.items.filter((item)=>item.id!==action.payload)
        },
        addQuantity:(state,action:PayloadAction<number>)=>{
            const item=state.items.find((item)=>item.id===action.payload)
            if (item) {
                item.quantites+=1;
            }
        },
        removeQuantity:(state,action:PayloadAction<number>)=>{
            const item=state.items.find((item)=>item.id===action.payload)
            if (item&&item.quantites>1) {
                item.quantites-=1;
            }
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addItems,addQuantity,removeItems,removeQuantity,clearCart}=cartSlice.actions

export default cartSlice.reducer