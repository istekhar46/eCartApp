

export const initialState = {
     cart: [],
     products: [],
}


export const cartReducer = (state, action) => {
     switch (action.type) {
          case 'setProducts':
               return { ...state, products: action.payload };
          case 'addProduct':
               return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
          case 'removeProduct':
               return { ...state, cart: state.cart.filter(product => product.id !== action.payload.id) };
          case 'incProduct':
               return { ...state, cart: state.cart.map(product => product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product) };
          case 'decProduct':
               if (action.payload.qty < 2 ) {
                    return { ...state, cart: state.cart.filter(product => product.id !== action.payload.id) };
               } else {
                    return { ...state, cart: state.cart.map(product => product.id === action.payload.id ? { ...product, qty: product.qty - 1 } : product) };
               }



          default:
               return state;
     }
}