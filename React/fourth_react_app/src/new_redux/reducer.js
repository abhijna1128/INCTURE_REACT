import { ADD_TO_CART, REMOVE_FROM_CART } from "./action";

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;

      const existingProductIndex = state.cart.findIndex(item => item.id === product.id);

      if (existingProductIndex >= 0) {
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingProductIndex) {
            return {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : 2
            };
          }
          return item;
        });

        return {
          ...state,
          cart: updatedCart
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }]
        };
      }

    case REMOVE_FROM_CART:
      const productId = action.payload;
      const index = state.cart.findIndex(item => item.id === productId);

      if (index === -1) return state;

      const Remove = state.cart[index];

      if (Remove.quantity > 1) {
        const updatedCart = state.cart.map((item, idx) => {
          if (idx === index) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = state.cart.filter(item => item.id !== productId);
        return { ...state, cart: updatedCart };
      }

    default:
      return state;
  }
};

export default cartReducer;
