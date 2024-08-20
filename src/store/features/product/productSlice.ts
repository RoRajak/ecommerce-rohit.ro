import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../../types";

export interface ProductState{
    product:ProductType[]
    isLoading:boolean;
    error:string | null
}

const initialState:ProductState={
    product:[],
    isLoading:false,
    error:null
}

export const fetchData = createAsyncThunk("fetchData", async () => {
    try {
      const mensProductResponse = await fetch("https://dummyjson.com/products/category/mens-shirts/?limit=0&skip=0");
      const menProductData = await mensProductResponse.json();
      
      const womenProductResponse = await fetch("https://dummyjson.com/products/category/womens-dresses/?limit=0&skip=0");
      const womenProductData = await womenProductResponse.json();
      
      // Combine the products arrays from both responses
      const combinedProducts = [...menProductData.products, ...womenProductData.products];
      
      console.log(combinedProducts);
      
      return combinedProducts;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
      } else {
        throw new Error('Failed to fetch data');
      }
    }
  });

const productSlice=createSlice({
    name:"data",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading=true
        }),
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.product=action.payload
        }),
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.error=action.error.message||"failed to fetch the data"
        })
    }
})

export default productSlice.reducer