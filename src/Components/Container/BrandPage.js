import React from 'react'
import clasess from "./BrandPage.module.css"

const BrandPage = () => {
  return (
    <section className={clasess.brand}>
        <h4 className={clasess.title}>Our Partner Brands</h4>
        <div className={clasess.brand_grid}>

        <div  className={clasess.grid_brand_box}>
        <img  src="/Images/brand_Loreal.webp" alt="brand_Loreal"/>
        </div>

        <div  className={clasess.grid_brand_box} >
        <img  src="/Images/brand_Kerastase.webp" alt="brand_Kerastase"/>
        </div>

        <div className={clasess.grid_brand_box}>
        <img  src="/Images/brand_main-brasil.webp" alt="brand_main_brasil"/>
        </div>

        <div  className={clasess.grid_brand_box}>
        <img  src="/Images/brand_olaplex.webp" alt="brand_olaplex"/>
        </div>

        <div i className={clasess.grid_brand_box}>
        <img  src="/Images/brand_Swati.webp" alt="brand_Swati"/>
        </div>

        <div  className={clasess.grid_brand_box}>
        <img  src="/Images/brand-clipart-balmain.webp" alt="balmain"/>
        </div>
       </div>
     
    </section>
  )
}

export default BrandPage