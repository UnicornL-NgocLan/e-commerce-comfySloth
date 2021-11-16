import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {id,color,amount,product} = action.payload;
      const tempItem = state.cart.find(c => c.id === id+color);
      if(tempItem) {
        const tempCart = state.cart.map(cartItem => {
          if(cartItem.id ===id+color){
            let newAmount = cartItem.amount+amount;
            if(newAmount>cartItem.max){
              newAmount = cartItem.max
            }
            return {...cartItem, amount: newAmount}
          }else{
            return cartItem
          }
        })
      }else{
        const newItem = {
          id:id+color,
          name:product.name,
          color,
          amount,
          image:product.images[0].url,
          price:product.price,
          max:product.stock,
        }
        return {...state,cart:[...state.cart,newItem]}
      }
    case CLEAR_CART:
      return {...state,cart:[]}
    case REMOVE_CART_ITEM:
      const tempCart = [...state.cart]
      const remainingCart = tempCart.filter(product => product.id!==action.payload)
      return {...state,cart:remainingCart}
    case TOGGLE_CART_ITEM_AMOUNT:
      const {key,value} = action.payload
      const tempCartAmount = state.cart.map(product =>{
        if(product.id ===key){
          if(value==='inc'){
            if(product.amount >= product.max) return product
            return {...product,amount:product.amount+1}
          }else{
            if(product.amount<=1) return product;
            return {...product,amount:product.amount-1}
          }
        }else{
          return product;
        }
      })
      return {...state,cart:tempCartAmount}
    case COUNT_CART_TOTALS:
      const {amountTotal,priceTotal} = state.cart.reduce((total,product) =>{
        total.amountTotal += product.amount;
        total.priceTotal += +(product.amount*product.price)
        return total
      },{amountTotal:0,priceTotal:0})
      return {...state,total_amount:priceTotal,total_items:amountTotal}
    default:
      return state
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
