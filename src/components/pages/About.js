import React from 'react';
import VMC from './inc/Vmc';

function Aboutus() {
  return (
     <div>
        <section className='py-4 bg-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 my-auto'>
                 <h4>About Us</h4>
              </div>
              <div className='col-md-4 my-auto'>
                <h6 className='float-end'>
                     Home / About Us
                </h6>
              </div>
            </div>
          </div>
        </section>

        <section className='section  border0-bottom'>
          <div className='container'>
            <h5 className='main-heading'>Our Company</h5>
            <div className='underline'></div>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
            alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
          </div>
        </section>

        <VMC />
     </div>
  );
}

export default Aboutus;
