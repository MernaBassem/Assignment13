import React from 'react';
import styles from '../assets/css/home.module.css';
import boyImage from '../assets/images/avataaars.svg';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
   
          <div className={`${styles.home} d-flex flex-column  justify-content-center align-items-center py-5 w-100 `}>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={boyImage} alt='boy' />
              </div>
              <div className='pt-4'>
                <h1 className={`text-light ${styles.text}`}>
                  START FRAMEWORK
                </h1>
                <div className={`d-flex justify-content-center align-items-center`}>
                  <div className={`${styles.line}`}></div>
                  <i class={`fa-solid fa-star ${styles.icon}`}></i>
                  <div className={`${styles.line}`}></div>
                </div>
                <div className={`d-flex justify-content-center align-items-center mt-2`}>
                <p className='fs-5 text-light'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
                
              </div>
            </div>
          </div>
 
    </>
  );
}
