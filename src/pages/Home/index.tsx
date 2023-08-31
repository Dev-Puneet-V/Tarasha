import React from 'react';
import Image from '../../components/Image';
import './style.css'
import Element from '../../components/Element';
import ChairImage from '../../assets/chair.png';
import Work from '../../components/Work';
import FAQ from '../../components/FAQ';
import CallConsultancy from '../../components/CallConsultancy';

const Home: React.FC = () => {
  return (
    <div id='home-container'>
      <div>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
          <div className='text-image-background flex justify-between items-center absolute bottom p-8 right left sizing-border'>
            <div className='flex flex-col home-main-body-text'>
              <p className='text-styled'>Get a designer space you'll love</p>
              <p className='bold text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <button className='button'>
              Get started
            </button>
          </div>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100'>
        <p className='text-styled center pb-2 mt-8'>About</p>
        <p className='center ml-8 mr-8 pb-8 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100'>
        <p className='text-styled center text-break mt-8 pb-4'>Work online with the finest interior designers</p>
       <div className='flex gap-5 mb-8 wrap justify-center items-center max-w-800'>
        <Element src={ChairImage} text={'One-On-One Consultation'} />
        <Element src={ChairImage} text={'One-On-One Consultation'} />
        <Element src={ChairImage} text={'One-On-One Consultation'} />
        <Element src={ChairImage} text={'One-On-One Consultation'} />
        <Element src={ChairImage} text={'One-On-One Consultation'} />
        <Element src={ChairImage} text={'One-On-One Consultation'} />
       </div>
       <button className='button button-dark mb-8'>
              Get started
          </button>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100'>
        <p className='text-styled center pb-2 m-8'>Our Approach</p>
        <p className='center pb-8 m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center w-100 ml-8 mr-8'>
        <p className='text-styled center pb-2 mt-8'>Our Principles</p>
        <p className='center pb-8 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div>
      <div id='client-perspective' className='flex justify-center items-center'>
        <div id='client-perspective-main-container'>
          <div id='up-inverted-comma'>“</div>
          <div id='down-inverted-comma'>“</div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim seghj veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea eth hje commodo consequat.</p>
            <div className='flex gap-2 items-center'>
              <img className='mt-4 mb-2' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_o8GvNHXndMoW1QhXq6o8kTb8fddzejVJ2g&usqp=CAU'}/>
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
      </div>
      <div className='mb-8'>
        <p className='center ml-8 mr-8 mb-8 pb-8 text-styled'>
            Frequently Asked Questions
        </p>
        <FAQ />
      </div>
      <CallConsultancy />
      </div>
    </div>
  )
}

export default Home;
