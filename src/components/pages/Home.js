import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/images.png';
function Home() {
  return (
    <div>
      <Slider />

      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='main-heading '><u>Our Company</u> </h3>
              <div className=' '>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
                <Link to="/about" className='btn btn-warning shadow'>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VMC />


      <section className='section border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-5 text-center'>
              <h3 className='main-heading '>Our Serveices </h3>
              <div className='underline mx-auto'>
              </div>

              
                  <div  className="d-flex flex-row bd-highlight mb-3">
                  <div className='col-md-4 '>
                <div className='card shadow'>
                  <img src={Service1} className='w-100 border-bottom ' alt='services' />
                  <div className='card-body'>
                  
                    <h6>Service 1</h6>
                    <div className='underline mx-auto'></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                    </p>
                    <Link to="/services" className='btn btn-link '>Read More</Link>
                  </div>
                </div>
              </div>

              <div className='col-md-4 '>
                <div className='card shadow'>
                  <img src={Service1} className='w-100 border-bottom ' alt='services' />
                  <div className='card-body'>
                  
                    <h6>Service 1</h6>
                    <div className='underline mx-auto'></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                    </p>
                    <Link to="/services" className='btn btn-link '>Read More</Link>
                  </div>
                </div>
              </div>

              <div className='col-md-4 '>
                <div className='card shadow'>
                  <img src={Service1} className='w-100 border-bottom ' alt='services' />
                  <div className='card-body'>
                  
                    <h6>Service 1</h6>
                    <div className='underline mx-auto'></div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                    </p>
                    <Link to="/services" className='btn btn-link '>Read More</Link>
                  </div>
                </div>
              </div>
                  </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
