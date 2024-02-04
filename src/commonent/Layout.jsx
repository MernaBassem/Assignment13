import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function LayoutWithHeader() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <Header />
          <div style={{ marginTop: '135px' }}> 
            <Outlet />
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
