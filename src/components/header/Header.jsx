import React from 'react'
import style from './Header.module.css'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
const Header = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.logo}>
            <p>S H O P M A X</p>
        </div>
        <div className={style.navbar}>
                <nav>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">SHOP</a></li>
                        <li><a href="">CATALOGUE</a></li>
                        <li><a href="">NEW ARRIVALS</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </nav>
              
        </div>  
        <div className={style.iconbox}>
                    <i><FaSearch /></i>
                    <i><FaRegHeart /></i>
                    <i className={style.basket}><FaShoppingBasket />
                    <span>2</span></i>
                </div>
    </div>
    
    </>
  )
}

export default Header