import React from 'react';
import styles from '../assets/css/footer.module.css';


export default function Footer() {
  return (
    <>
   
          <div id={`${styles.info}`}>
            <div className='container mx-auto'>
              <div className='row gy-4'>
                <div className='col-lg-4 col-md-6 col-12'>
                  <h3>
                    LOCATION
                  </h3>
                  <p>
                    2215 John Daniel Drive
                  </p>
                  <p>
                    Clark, MO 65243
                  </p>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                  <h3>
                    AROUND THE WEB
                  </h3>
                  <div className={`d-flex justify-content-center align-items-center ${styles.icons}`}>
                    <div>
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div>
                      <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div>
                      <i class="fa-solid fa-globe"></i>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 col-12'>
                  <h3>
                    ABOUT FREELANCER
                  </h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created by Route
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className={` ${styles.footer} d-flex justify-content-center  align-items-center`}>
                <p>Copyright © Your Website 2021</p>
          </div>
    
    </>
  );
}
