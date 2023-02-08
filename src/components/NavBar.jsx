import React from 'react'
import CartWidget from './CartWidget'



const NavBar = () => {
  return (
    <div><header>
        <a href="">
            <div className="logo">
                <img src="../../../img/jordan1.jpg" alt="" />
            </div>
        <CartWidget/>
        </a>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item__total">0</span>
        </div>
        </header>
    </div>
  )
}

export default NavBar