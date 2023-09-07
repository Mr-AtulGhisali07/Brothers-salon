import clasess from "./Appointment.module.css";
import {FaUser,FaPhone,FaMailBulk,FaCity,FaTransgender,FaCut,FaClock,FaCalendarAlt} from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Appointment = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return (
    <section id={clasess.main_appointment} >
      <div id={clasess.container_parent}>
        <div className="container bg-light"   id={clasess.container}>   
          <h3 className="text-center" data-aos="fade-zoom" >Let's not wait for the "Perfect Look"</h3>
          <p id={clasess.plas} className="text-center" >Book An Appointment Now!</p>
              <form  className={clasess.form_container}  action="https://formspree.io/f/mbjvrdwq" method="POST">	
            <div className="row"  data-aos="fade-up">
              <div className="col-sm-6" >
                <ul className={clasess.form1} >
                  <li><FaUser className={clasess.icons} /><input type="text"  className="form-control"  id="user"  required   name="UserName"  placeholder="Name*"  autoComplete='off'/></li>
                  <li><FaPhone className={clasess.icons}/><input type="text"  className="form-control"  id="phone"  required   name="contact"  placeholder="Contact*" autoComplete='off'  maxLength="10"/></li>
                  <li><FaMailBulk className={clasess.icons}/><input type="email" className="form-control"  id="email"   required  name="Email"    placeholder="Email Id"   autoComplete='off'/></li>
                  <li><FaCity className={clasess.icons}/><input type="text"  className="form-control"  id="location" required  name="City"    placeholder="City"   autoComplete='off' /></li>
                </ul>
              </div>  
              <div className="col-sm-6">
                <ul className={clasess.form2} >
                  <li> <FaTransgender className={clasess.icons}/>
                   <select className='form-control'type="gender" name="Gender"  required  autoComplete='off' id="s1">
                      <option>Gender*</option>
                      <option value="Ladies">Ladies</option>
                      <option value="Gents">Gents</option>
                   </select>
                  </li> 
                  <li ><FaCut  className={clasess.icons}/>
                  <input type='text' name='Service'  className='form-control' placeholder='Service Type' autoComplete='off'/>
                  </li>
                  <li><FaCalendarAlt className={clasess.icons}/>
                  <input type="date" name="Date"   className="hasDatepicker form-control" required  paceholder="Preferred Date*" id="datepicker" autoComplete='off'/>
                  </li>             
                  <li className={clasess.form_date}>
                  <FaClock  className={clasess.icons}/>
                    <input type="time"  name="Time"  className="form-control" placeholder="Preferred Time*" required autoComplete='off'/>
                    <select className='form-control' name="Time-Type" style={{width:"auto", backgroundPosition:"100% 21% ", paddingRight:"20px" ,borderBottomLeftRadius:"0"}}>
                     <option value="AM">AM</option>
                     <option value="PM">PM</option>
                    </select>
                  </li>	
                </ul>
              </div>
            </div>
            <p id={clasess.achor1} className="text-center"> <button className={clasess.btn} type="submit"  data-aos="fade-up">Book Appointment</button></p>
            <p id={clasess.achor2} className="text-center"> <span className={clasess.or_span}><b>OR</b></span>  <span className={clasess.call_us_span}>Call us @ </span>  <a href="tel:+91-9876543210">+91-9876543210</a></p>
          </form>	  
        </div>
      </div>
    </section>
  );
};
export default Appointment;