import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find((item) => product.name === item.name);
      if (!existingProduct) {
        product.quantity = 1;
        state.items.push(product);
      } else {
        product.quantity ++;
      };
    
    },
    removeItem: (state, action) => {
      const product = action.payload;
      state.items = state.items.filter((item) => product !== item.name);
    },
    updateQuantity: (state, action) => {
      const product = action.payload;
      const productToUpdate = state.items.find((item) => item.name === product.name);
      if (productToUpdate) {
      productToUpdate.quantity = product.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
