import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map(p => p.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products:[...action.payload],
        filtered_products:[...action.payload],
        filters:{ 
           ...state.filters,max_price:maxPrice,price:maxPrice
        }
      }
    case SET_LISTVIEW:
      return {...state,grid_view:false}
    case SET_GRIDVIEW:
      return {...state,grid_view:true}
    case UPDATE_SORT:
      return {...state,sort:action.payload}
    case SORT_PRODUCTS:
      const {filtered_products,sort} = state;
      let products = [...filtered_products]
      switch (sort) { 
        case 'price-highest':
          const highestList = products.sort((a,b)=> b.price-a.price)
          return {...state,filtered_products:highestList,sort:action.payload}
        case 'price-lowest':
          const lowestList = products.sort((a,b)=> a.price-b.price)
          return {...state,filtered_products:lowestList,sort:action.payload}
        case 'name-a':
          const AZList = products.sort((a,b)=> a.name.localeCompare(b.name))
          return {...state,filtered_products:AZList,sort:action.payload}
        case 'name-z':
          const ZAList = products.sort((a,b)=> b.name.localeCompare(a.name))
          return {...state,filtered_products:ZAList,sort:action.payload}
      }
    case UPDATE_FILTERS:
      if(action.payload){
        const {name,value} = action.payload
        return {...state,filters:{...state.filters,[name]:value}}
      }else{
        return {...state}
      }
    case FILTER_PRODUCTS:
      const {all_products} = state;
      const {text,category,company,color,price,shipping} = state.filters;
      let tempProducts = [...all_products]
      if(text){
        tempProducts = tempProducts.filter(item => item.name.toLowerCase().startsWith(text))
      }
      if(category!=='all'){
        tempProducts = tempProducts.filter(item => item.category ===category)
      }
      if(company!=='all'){
        tempProducts = tempProducts.filter(item => item.company ===company)
      }
      if(color!=='all'){
        tempProducts = tempProducts.filter(item => item.colors.find(item => item===color))
      }
      if(shipping){
        tempProducts = tempProducts.filter(item => item.shipping===true)
      }
      if(price){
        tempProducts = tempProducts.filter(item => item.price<=price)
      }

      return {...state,filtered_products:tempProducts}
    case CLEAR_FILTERS:
      return {
        ...state,
        filters:{
        ...state.filters,
        text:'',
        company:'all',
        category:'all',
        color:'all',
        price:state.filters.max_price,
        shipping:false,
      }
      }
  }
  return state
}

export default filter_reducer
