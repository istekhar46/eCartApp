

export const initialState =  {
     cart: [],
     products: [],
   }


export const cartReducer = (state, action)=>{
     switch (action.type) {
          case 'setProducts':
               return {...state, products: action.payload}
        
     
        default:
            return state;
     }
}