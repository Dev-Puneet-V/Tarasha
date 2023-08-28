import React from 'react'
import Image from '../../components/Image';
import './style.css'

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
      <div className='flex flex-col gap-2 items-center p-8 w-100'>
        <p className='text-styled center pb-2'>About</p>
        <p className='center pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center p-8 w-100'>
        <p className='text-styled center text-break pb-4'>Work online with the finest interior designers</p>
        <p className='center pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='button button-dark mb-8'>
              Get started
          </button>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center p-8 w-100'>
        <p className='text-styled center pb-2'>Our Approach</p>
        <p className='center pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
        </Image>
      </div>
      <div className='flex flex-col gap-2 items-center p-8 w-100'>
        <p className='text-styled center pb-2'>Our Principles</p>
        <p className='center pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default Home;
