import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Image from '../../components/Image';
import './style.css'
import Element from '../../components/Element';
import ChairImage from '../../assets/chair.png';
import Work from '../../components/Work';
import FAQ from '../../components/FAQ';
import CallConsultancy from '../../components/CallConsultancy';
import useScreenSize from '../../hooks/useMediaQuery';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const screenSize = useScreenSize();
  const navigate = useNavigate();

  return (
    <div id='home-container'>
      <div >
      
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696077777/TarashaWebsiteContent/Images/blogimages/banner/banner-test-3_qysaxp.jpg'} className='home-img first-image'>
          <div className={`text-image-background flex justify-between items-center absolute bottom  right left sizing-border  flex wrap ${screenSize === 'sm' ? 'gap-3 p-4' : 'gap-5 p-8'}`}>
          <div className='flex flex-col home-main-body-text'>
              <p className='text-styled pb-2'>Where functionality embraces beauty : your ideal space </p>
              <p className='bold text-white'>
                Our team of dedicated designers is here to transform your vision into reality.
                Whether you're looking to revamp a single room or undertake a complete home
                makeover, we have the expertise and innovation to exceed your expectations.
              </p>
            </div>
            <button className='button' onClick={ () => navigate("/services")}>
              Get started
            </button>
          </div>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100'>
        <p className={`text-styled center ${screenSize === 'sm' ? 'mt-4' : 'pb-2 mt-8'}`}>About</p>
        <p className={`center ${screenSize === 'sm' ? 'ml-4 mr-4 pb-2' : 'ml-8 mr-8 pb-4 mb-4'}`}>
          At Tarasha Interiors, we believe that every space has the potential to become a
          masterpiece. Our passion for creativity and our commitment to excellence drive
          us to craft interiors that not only reflect your unique style but also elevate your
          lifestyle.
          With an experience in bulk volume of project management we have
          successfully handed over both Residential as well as Commercial spaces.
          Over the years, we have expanded slowly but surely due to our credibility,
          speed and quality of work.
          We believe our passion for innovation keeps us motivated to produce the finest
          of works. 
        </p>
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696076668/TarashaWebsiteContent/Images/blogimages/banner/banner-layer-3_mtlowq.avif'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-full'>
        <p className={`text-styled center ${screenSize === 'sm' ? 'mt-4 mb-4' : 'pb-2 mt-8'}`}>Work online with the finest interior designers</p>
       <div className='flex gap-5 mb-8 wrap justify-center items-center max-w-800'>
        <Element src={ChairImage} text={'Discovery & Consultation'} />
        <Element src={ChairImage} text={'Conceptualization'} />
        <Element src={ChairImage} text={'Detail Design & Planning'} />
        <Element src={ChairImage} text={'Implementation & Execution'} />
        <Element src={ChairImage} text={'Post Design Support'} />
       </div>
       <button className='button button-dark mb-8' onClick={ () => navigate("/services")}>
              Get started
          </button>
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696079338/TarashaWebsiteContent/Images/blogimages/banner/banner-test-4_ypuv0r.jpg'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100'>
        <p className={`text-styled center ${screenSize === 'sm' ? 'mt-2' : 'pb-2 mt-8'}`}>Our Approach</p>
        <p className={`center ${screenSize === 'sm' ? 'ml-4 mr-4 pb-2' : 'ml-8 mr-8 pb-4 mb-4'}`}>
        We approach every project with a blend of creativity, expertise, and dedication.
Our commitment to crafting inspirational spaces is grounded in a well-defined
process that ensures each design is a true reflection of our clients vision &
lifestyle. Our approach is characterized by a blend of artistry and professionalism,
resulting in interiors that resonate with emotion and purpose.
Your journey is a partnership and our shared goal is to craft a space that is
uniquely and beautifully yours. 
        </p>
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696079715/TarashaWebsiteContent/Images/blogimages/banner/createvity-banner_fiqymc.jpg'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100'>
        <p className={`text-styled center ${screenSize === 'sm' ? 'mt-2' : 'pb-2 mt-8'}`}>Our Principles</p>
        <p className={`center ${screenSize === 'sm' ? 'ml-4 mr-4 pb-4' : 'ml-8 mr-8 pb-4 mb-8'}`}>
        Your experience with us matters just as much as the final design. We’re
committed to providing exceptional customer service, transparent
communication, and a seamless design journey. Our goal is not just to meet your
expectations but to exceed them, leaving you delighted and satisfied with the
entire process. 
        </p>
      </div>
      <div>
      <div id='client-perspective' className='flex justify-center items-center'>
        <div id='client-perspective-main-container'>
          <div id='up-inverted-comma'>“</div>
          <div id='down-inverted-comma'>“</div>
          <div>
            <p>
            Let us guide through a seamless journey where your vision meets our
creativity, resulting in a space that not only wows the eyes but also
warms the heart. Your space is a canvas and we’re here to help you
paint the masterpiece of your life upon it.
            </p>
            <div className='flex gap-2 items-center'>
              <img  className='mt-4 mb-2' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o8GvNHXndMoW1QhXq6o8kTb8fddzejVJ2g&usqp=CAU'}/>
              <div>
                <p className='text-bold mt-2'>Tarasha interiors</p>
                <p>client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-8'>
          <Work />
          <Link className='link' to={'/our-works'}>
                    <button className='button button-dark m-auto'>
                        More Projects
                    </button>
                </Link>
      </div>
      <div className='mb-8'>
        <p className='center ml-8 mr-8 text-styled'>
            Frequently Asked Questions
        </p>
        <FAQ />
      </div>
      <CallConsultancy />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
