import React from 'react';
import styles from '../assets/css/about.module.css';

import { Helmet } from 'react-helmet';

export default function About() {
    return (
      <>
          <Helmet>
      <title>About</title>
    </Helmet>
         <div id={`${styles.about}` }className=" text-center  w-100  d-flex justify-content-center align-items-center flex-column ">
                <div className="container py-5 mx-auto text-center  w-100  ">
                  <h1>
                  ABOUT COMPONENT
                  </h1>
                  <div className={`d-flex justify-content-center align-items-center`}>
                     <div className={`${styles.line}`}></div>
                     <i class={`fa-solid fa-star ${styles.icon}`}></i>
                     <div className={`${styles.line}`}></div>
                  </div>
                  <div className="row gy-5">
                    <div className="col-md-6 col-12">
                      <p>
                      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                      </p>
                    </div>
                    <div className="col-md-6 col-12">
                      <p>
                      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.                      </p>
                    </div>
                  </div>
                </div>

         </div>
      </>
    );
  }