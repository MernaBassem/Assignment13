import React from 'react';
import styles from '../assets/css/contact.module.css';
import { Helmet } from 'react-helmet';
export default function Contact() {
    return (
      <>
       <Helmet>
      <title>Contact</title>
    </Helmet>
               <div id={`${styles.contact}`}>
                <div className="container py-3 mx-auto text-center  w-100  d-flex justify-content-center align-items-center flex-column ">
                  <h1>
                   CONATCT SECTION
                   </h1>
                   <div className={`d-flex justify-content-center align-items-center`}>
                     <div className={`${styles.line}`}></div>
                     <i class={`fa-solid fa-star ${styles.icon}`}></i>
                     <div className={`${styles.line}`}></div>
                    </div>
              <div className={`${styles.inputs} w-100 my-5  `}>
                <div>
                  <input type="text" placeholder=" " id="UserName"/>
                  <label for="UserName">UserName</label>
                </div>
                <div>
                  <input type="text" placeholder=" " id='UserAge'/>
                  <label for="UserAge">UserAge</label>
                </div>
                <div>
                  <input type="email" placeholder=" " id='UserEmail' />
                  <label for="UserEmail">UserEmail</label>
                </div>
                <div>
                  <input type="password" placeholder=" " id='UserPassword' />
                  <label  for="UserPassword">UserPassword</label>
                </div>
                <div className={`d-flex justify-content-start ${styles.button}`}>
                <button className='text-start' >Send Message</button>

                </div>

                </div>
         
                </div>
            
            
               </div>
      </>
    );
  }