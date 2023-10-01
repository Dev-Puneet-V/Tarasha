import React from 'react'
import Image from '../../components/Image';
import Work from '../../components/Work';
import CallConsultancy from '../../components/CallConsultancy';
import './style.css';

const OurWork: React.FC = () => {
  return (
    <div id='home-container'>
        <div>
            <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696077777/TarashaWebsiteContent/Images/blogimages/banner/banner-test-3_qysaxp.jpg'} className='home-img first-image'>
                <div className='text-image-background flex justify-between items-center absolute bottom p-8 right left sizing-border'>
                    <div className='flex flex-col home-main-body-text'>
                        <p className='text-styled'>Our Works</p>
                    </div>
                </div>
            </Image>
            <div className='mb-8'>
                <Work />
            </div>
            <CallConsultancy />
      </div>
    </div>
  )
}

export default OurWork;
