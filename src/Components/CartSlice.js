import {createSlice} from "@reduxjs/toolkit"

const initialState = { 
   items : JSON.parse(localStorage.getItem("cart-items")) || [],
   totalPrice : JSON.parse(localStorage.getItem("cart-totalprice")) || 0,
   totalQuantity : JSON.parse(localStorage.getItem("cart-quantities")) || 0
}


const Slice = createSlice({
    name : "cart",
    initialState,
    reducers : {
    addToCart : (state , action) => {
    const product = action.payload
    const existingproduct = state.items.find(p=> p.id === product.id)
    if(existingproduct) {
    existingproduct.quantity += 1
    existingproduct.priceOfProduct += Number(product.price)
    }else{
    state.items.push({
    ...product,
    quantity : 1,
    priceOfProduct : Number(product.price)
    })
    state.totalQuantity += 1
    }
    state.totalPrice += Number(product.price)
    localStorage.setItem("cart-items" , JSON.stringify(state.items))
    localStorage.setItem("cart-totalprice" , JSON.stringify(state.totalPrice))
    localStorage.setItem("cart-quantities" , JSON.stringify(state.totalQuantity))
    },
    removeFromCart : (state , action) => {
    const productToRemove = action.payload
    state.items = state.items.filter(p=>{
    return p.id !== productToRemove.id
    })
    state.totalPrice -= productToRemove.priceOfProduct
    state.totalQuantity -= 1
    localStorage.setItem("cart-items" , JSON.stringify(state.items))
    localStorage.setItem("cart-totalprice" , JSON.stringify(state.totalPrice))
    localStorage.setItem("cart-quantities" , JSON.stringify(state.totalQuantity))
    },
    increase : (state , action) => {
    const productToIncrease = action.payload
    const product = state.items.find(p=> p.id === productToIncrease.id)
    product.quantity += 1
    product.priceOfProduct += Number(product.price)
    state.totalPrice += Number(product.price)
    
    localStorage.setItem("cart-items" , JSON.stringify(state.items))
    localStorage.setItem("cart-totalprice" , JSON.stringify(state.totalPrice))
    localStorage.setItem("cart-quantities" , JSON.stringify(state.totalQuantity))
    },
    decrease : (state , action) => {
    const productToDecrease = action.payload
    const product = state.items.find(p=> p.id === productToDecrease.id)
    if(product.quantity <= 1){
    state.totalQuantity -= 1
    state.totalPrice -= product.price
    state.items = state.items.filter(p=> p.id !== productToDecrease.id)
    }else{
    product.quantity -= 1
    product.priceOfProduct -= Number(product.price)
    state.totalPrice -= Number(product.price)
    }
    localStorage.setItem("cart-items" , JSON.stringify(state.items))
    localStorage.setItem("cart-totalprice" , JSON.stringify(state.totalPrice))
    localStorage.setItem("cart-quantities" , JSON.stringify(state.totalQuantity))
    }
    }
})

export const {addToCart , removeFromCart , increase , decrease} = Slice.actions
export default Slice.reducer