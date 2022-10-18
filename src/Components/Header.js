import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const {cartItems} = useSelector(state => state.products)

    return(
        <div className='navbar navbar-light bg-light fixed'>
            <h1>Cric Basket</h1>
            <div className='link'>
                <Link to="/basket" className='link'>
                    <p className='cart-icon'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="badge ">{cartItems}</span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header