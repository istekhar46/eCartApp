

export const initialState =  {
     cart: [],
     products: [],
   }


export const cartReducer = (state, action)=>{
     switch (action.type) {
          case 'setProducts':
               return {...state, products: action.payload};
          case 'addProduct':
               return {...state, cart: [...state.cart, {...action.payload, qty:1}]};     
          case 'removeProduct':
               return {...state, cart: state.cart.filter(product=> product.id !== action.payload.id)};     

        
     
        default:
            return state;
     }
}