export const cartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
        const check = shoppingCart.find(product=> product.id === action.id);
        if (check) {
            return state;
        } else {
            product = action.product
        }
  }
};
