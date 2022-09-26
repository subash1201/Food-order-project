import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    orderedItems: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      if (!existingCartItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price
        });
        state.totalAmount = state.items.reduce((result, item) => {
          return result + item.price;
        }, 0);
        state.totalQuantity++;
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      state.totalQuantity -= 1;
      state.totalAmount = state.items.reduce((result, item) => {
        return result + item.totalPrice;
      }, 0);
    },
    modifyQuantity(state, action) {
      const inputItem = action.payload;
      const index = state.items.findIndex((item) => item.id === inputItem.id);
      state.items[index].totalPrice = state.items[index].price * inputItem.data;
      state.items[index].quantity = inputItem.data;
      state.totalAmount = state.items.reduce((result, item) => {
        return result + item.totalPrice;
      }, 0);
    },
    placeOrder(state, action) {
      const orderItems = action.payload;
      state.orderedItems.push(orderItems);
      state.items = [];
      state.totalQuantity = 0;
    },
    deleteMenuFromOrderedCart(state, action) {
      const deleteTableNumber = action.payload;
      state.orderedItems = state.orderedItems.filter(
        (item) => item.tableNumber !== deleteTableNumber
      );
    }
  }
});

export const actions = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer
});

export default store;
