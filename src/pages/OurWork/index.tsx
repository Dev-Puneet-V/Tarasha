import React from 'react'
import Image from '../../components/Image';
import Work from '../../components/Work';
import CallConsultancy from '../../components/CallConsultancy';
import './style.css';

const OurWork: React.FC = () => {
  return (
    <div id='home-container'>
        <div>
            <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
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
