import { createSlice, configureStore } from '@reduxjs/toolkit'
import { setCookie, parseCookies } from 'nookies'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addProduct(state, action) {
        console.log('item->', action.payload)
        //@ts-ignore
        state.value.push(action.payload)
        setCookie(null, 'cart', JSON.stringify(state.value))
    },
    removeProduct(state:any, action) {
        const output:any = []
        let index = -1
        console.log('valores->', state.value)
        state.value.map((item:any)=>item.id === action.payload.id ? null: output.push(item))
        state.value = output
        setCookie(null, 'cart', JSON.stringify(output))
    },
    updateItem(state:any, action){
        const output: any[] = []
        console.log('esta sendo enviado->',action.payload)
        state.value.map((item:any)=>item.id === action.payload.id ? output.push(action.payload): output.push(item))
        setCookie(null, 'cart', JSON.stringify(output))
        state.value = output
    },
    removeAll(state:any, action) {
        state.value = []
        setCookie(null, 'cart', JSON.stringify([]))
    },
    updatePage(state:any,action){
      console.log('action aqui->',action.payload)
      state.value = action.payload
    }
  }
})

export const { addProduct, removeProduct, removeAll, updatePage, updateItem } = cartSlice.actions

const store:any = configureStore({
  reducer: {cart:cartSlice.reducer}
})

export default store