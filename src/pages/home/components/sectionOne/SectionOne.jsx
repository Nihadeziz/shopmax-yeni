import React from 'react'
import style from './SectionOne.module.css'
const SectionOne = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.img}>
        <img src="https://preview.colorlib.com/theme/shopmax/images/model_3.png" alt="" />
        </div>
        <div className={style.text}>
            <p>#New Summer Collection 2019</p>
            <h1>Arrivals Sales</h1>
            <button>Shop Now</button>
        </div>
    </div>
    </>
  )
}

export default SectionOne