import {createSlice} from "@reduxjs/toolkit"
import ProductsData from "../Data/ProductsData"

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [...ProductsData],
        cartItems: 0,
        product: {},
        totalBill: 0
    },
    reducers: {
        increaseCartItems(state, action) {  //id
            ++state.cartItems;
            state.products.forEach((prod) => {
                if(prod.id === action.payload) {
                    ++prod.count 
                }
            });
            ++state.product.count;
        },
        decreaseCartItems(state, action) { //id
            --state.cartItems;
            state.products.forEach((prod) => {
                if(prod.id === action.payload) {
                    --prod.count 
                }
            });
            --state.product.count;
        },

        emptyCart(state, action) {
            state.cartItems = state.cartItems - action.payload.count
            state.totalBill = state.totalBill - action.payload.marketPrice
            state.products.forEach((prod) => {
                if(prod.id === action.payload) {
                    prod.count = 0
                }
            });
            state.product.count = 0
        },

        increaseBill(state, action) {
            state.totalBill += action.payload
        },

        decreaseBill(state, action) {
            state.totalBill -= action.payload
        },

        reset(state, action) {
            state.cartItems = 0
            state.totalBill = 0
            state.products.forEach((prod) => {
                prod.count = 0
            })
        },

        selectedProduct(state, action) {
            state.product = action.payload
        }
    }
})

export const {increaseCartItems, decreaseCartItems, emptyCart, reset, selectedProduct, increaseBill, decreaseBill} = productsSlice.actions
export default productsSlice.reducer