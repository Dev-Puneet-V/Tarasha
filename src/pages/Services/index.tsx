import React from 'react';
import Image from '../../components/Image';
import CallConsultancy from '../../components/CallConsultancy';
import FAQ from '../../components/FAQ';
import Element from '../../components/Element';
import Chair from '../../assets/chair.png';
import './style.css';
import Service from '../../components/Service';

const Services: React.FC = () => {
  return (
    <div id='home-container'>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
                <div className='text-image-background flex justify-between items-center absolute bottom p-8 right left sizing-border'>
                    <div className='flex flex-col home-main-body-text'>
                        <p className='text-styled'>Our Services</p>
                    </div>
                </div>
        </Image>
        <div id='elements-container' className='mb-8 pb-8'>
            <div className='flex flex-col gap-3 pt-8 pb-8 elements items-center mb-4'>
                <p className='text-styled mb-4'>Elements</p>
                <div className='flex flex-row gap-5 wrap justify-center'>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((curr: number) => <Element key={curr} src={Chair} text={'Design Principles'} />)
                    }
                </div>
                <button className='button button-dark mt-8'>Get Started</button>
            </div>
            <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
            </Image>
        </div>
        <div id='services-container' className='mb-8 flex flex-col items-center'>
            <div className='flex flex-col gap-3 items-center justify-center mb-4'>
                <p className='text-styled mb-4'>Services</p>
                <div className='flex flex-row gap-3 wrap justify-center'>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((curr: number) => <Service key={curr} src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} text={'Floor plan and furniture lay out'} />)
                    }
                </div>
            </div>
        </div>
        <div className='m-8'>
            <p className='center ml-8 mr-8 mb-8 pb-8 text-styled'>
                Frequently Asked Questions
            </p>
            <FAQ />
        </div>
        <CallConsultancy />
    </div>
  )
}

export default Services;
