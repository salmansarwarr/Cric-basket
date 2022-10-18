import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseBill, decreaseCartItems, increaseBill, increaseCartItems, selectedProduct } from '../Redux/productsSlice'
import { Link } from 'react-router-dom'

function ProductComponent() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.products)
    const { products, cartItems } = state
    
    const renderList = products.map((item) => {
        return (
            <div className="col-md-4" key={item.id}>
                <div className="productComponent">
                    <div className='top'>
                        <span className="badge badge-success">${item.marketPrice}</span>
                        <p className='cart-icon'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="badge ">{item.count}</span>
                        </p>
                    </div>
                    <div className='image'>
                        <img src={item.image} alt=""/>
                    </div>
                    <div className='name'>
                        <h3> {item.name} </h3>
                    </div>
                    <div className='description'>
                        <p> {item.description} </p>
                    </div>
                    <div className='bottom'>
                        <Link to={`/${item.id}`}>
                            <button 
                                type="button" 
                                className="btn btn-link"
                                onClick={() => {
                                    dispatch(selectedProduct(item))
                                }}
                            >
                                More details
                            </button>
                        </Link>
                        <button className='plus' onClick={() => {
                            dispatch(increaseBill(item.marketPrice))
                            dispatch(increaseCartItems(item.id))
                        }
                        }> 
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                        <button 
                            className='minus' 
                            onClick={() => {
                                dispatch(decreaseBill(item.marketPrice))
                                dispatch(decreaseCartItems(item.id))
                            }}
                            disabled={cartItems === 0}
                        > - </button>
                    </div>
                </div>
            </div>
        )
    })


    return (
        products.length === 0 ? <div>Loading...</div> : renderList
    )
}

export default ProductComponent