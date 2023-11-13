import React from 'react'
import { FaInstagram } from "react-icons/fa";
import BrandPage from './BrandPage';


const SocialPage = () => {
  return (
    <div className='container'>
        <h3><FaInstagram/> FOLLOW US @Brother's_Salon</h3>
        <marquee behavior="alternate" direction="right" >
       
        <img height="300px" width="260px"  src="/Images/social-1.jpg" alt="social-1"/>
        <img height="300px" width="260px" src="/Images/social-2.jpg" alt="social-2"/>
        <img height="300px" width="260px" src="/Images/social-7.jpg" alt="social-7"/>
        <img height="300px" width="260px" src="/Images/social-3.jpg" alt="social-3"/>
        <img height="300px" width="260px" src="/Images/social-4.jpg" alt="social-4"/>
        <img height="300px" src="/Images/social-19.jpg" alt="social-19"/>
        <img height="300px" width="260px" src="/Images/social-5.jpg" alt="social-5"/>
        <img height="300px" width="260px" src="/Images/social-6.jpg" alt="social-6"/>
        <img height="300px" width="260px" src="/Images/social-8.jpg" alt="social-8"/>
        <img height="300px" width="260px" src="/Images/social-9.jpg" alt="social-9"/>
        <img height="300px" src="/Images/social-20.jpg" alt="social-20"/>
        <img height="300px" width="260px" src="/Images/social-10.jpg" alt="social-10"/>
        <img height="300px" width="260px" src="/Images/social-11.jpg" alt="social-11"/>
        <img height="300px" width="260px" src="/Images/social-13.jpg" alt="social-11"/>
        <img height="300px" src="/Images/social-17.jpg" alt="social-17"/>
        <img height="300px" width="260px" src="/Images/social-12.jpg" alt="social-12"/>
        <img height="300px" width="260px" src="/Images/social-14.jpg" alt="social-14"/>
        <img height="300px" width="260px" src="/Images/social-15.jpg" alt="social-15"/>
        <img height="300px" width="260px" src="/Images/social-16.jpg" alt="social-16"/>
        <img height="300px" width="260px" src="/Images/social-18.jpg" alt="social-18"/>  
        </marquee>

        <div style={{paddingTop:"4rem"}}>
       <h4> Explore the Realm of Beauty with Brother's Salon</h4>
       <p> With over 162 branches nationally and internationally, Looks salon is a premium beauty salon for men and women who desire to look the best every day. Getting a makeover not only changes the appearance of a person but also brings back the lost confidence and Brother's Salon would take pride in being a part of it. From beauty to grooming services,
         we provide a tremendous range of facilities that touches every dimension of beauty and hair treatments. Our repertoire of professional experts makes sure that all your beauty and hair questions are answered, and you leave the salon with a big smile on your face.</p>

       <p> With over 6000 employees engaged in transforming your look, we make sure that all the services provided at our salons meet the international standards. Through our advice and solutions from the expertise in this array, we aim at giving the best services through our state-of-art facilities. Our professional stylists and beauty experts are constantly updated with the latest trends and fashion advices that help them to work efficiently and deliver outstanding results!</p>

       <p> Give us an opportunity to serve you once, we are sure you'll love to come back to us again and be our esteemed customer forever. Fill the form or call us to book an appointment now! </p>
        </div>
        <BrandPage/>
    </div>
  )
}

export default SocialPage