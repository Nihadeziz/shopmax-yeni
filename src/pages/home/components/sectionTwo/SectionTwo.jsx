import React from 'react'
import style from './SectionTwo.module.css'
const SectionTwo = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.head}>
           <div className={style.text}>
                    <h1>Discover 
                        The Collections</h1>
            </div>
            </div> 
            <div className={style.bottom}>
                    <div className={style.women}>
                            <button className={style.btn}>Women <p>25 items</p></button>
                    </div>
                    <div className={style.mencontainer}>
                        <div className={style.men}>
                            <button className={style.btn}>Men <p>25 items</p></button>
                        </div>
                        <div className={style.shoes}>
                        <button className={style.btn}>Shoes <p>25 items</p></button>
                        </div>
                    </div>
        </div>
    </div>
    </>
  )
}

export default SectionTwo