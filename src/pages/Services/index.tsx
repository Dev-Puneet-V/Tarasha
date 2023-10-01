import React from 'react';
import Image from '../../components/Image';
import CallConsultancy from '../../components/CallConsultancy';
import FAQ from '../../components/FAQ';
import Element from '../../components/Element';
import Chair from '../../assets/chair.png';
import './style.css';
import Service from '../../components/Service';
import ScopeOfWork from '../../components/ScopeOfWork';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div id='home-container'>
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696077777/TarashaWebsiteContent/Images/blogimages/banner/banner-test-3_qysaxp.jpg'} className='home-img first-image'>
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
                        ["Space", "Color", "Texture", "Form", "Light", "Pattern", "Scale", "Balance", "Emphasis", "Rhythm"].map((curr: string) => <Element key={curr} src={Chair} text={curr} />)
                    }
                </div>
                <button className='button button-dark mt-8' onClick={ () => navigate("/services")}>Get Started</button>
            </div>
            <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696076668/TarashaWebsiteContent/Images/blogimages/banner/banner-layer-3_mtlowq.avif'} className='home-img'>
            </Image>
        </div>
        <div id='services-container' className='flex flex-col items-center'>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <p className='text-styled mb-4'>Services</p>
                <div className='flex flex-row gap-3 wrap justify-center'>
                    {
                        [
                            {
                                text: 'Interior Consultation',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075825/TarashaWebsiteContent/Images/blogimages/services/interior-consultation_pa2ajv.jpg'
                            },
                            {
                                text: '3D visualisation',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075831/TarashaWebsiteContent/Images/blogimages/services/3D-visualization_nnwiqg.avif'
                            },
                            {
                                text: 'Renovation & Remodelling',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075830/TarashaWebsiteContent/Images/blogimages/services/renovation-remodeling_zrrqtz.jpg'
                            },
                            {
                                text: 'Space Planning & Design',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075829/TarashaWebsiteContent/Images/blogimages/services/planning-design_wbnd25.jpg'
                            },
                            {
                                text: 'Execution & Project Management',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075827/TarashaWebsiteContent/Images/blogimages/services/execution-management_t0vk1f.webp'
                            },
                            {
                                text: 'Residential Interior Projects',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075826/TarashaWebsiteContent/Images/blogimages/services/residential_sbujxm.jpg'
                            },
                            {
                                text: 'Commercial Interiors Projects',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696076081/TarashaWebsiteContent/Images/blogimages/services/commercial-interior-design_fjw8ox.webp'
                            },
                            {
                                text: 'Vaastu Compliant Layouts',
                                src: 'https://res.cloudinary.com/dfoggertn/image/upload/v1696075826/TarashaWebsiteContent/Images/blogimages/services/vastu_ja9gv8.jpg'
                            }
                        ].map((curr: {text: string, src: string}) => <Service key={curr.text} src={curr.src} text={curr.text} />)
                    }
                </div>
            </div>
        </div>
        <ScopeOfWork />
        <div className='mb-4 mt-4 pt-8'>
            <p className='center ml-8 mr-8 text-styled'>
                Frequently Asked Questions
            </p>
            <FAQ />
      </div>
        <CallConsultancy />
    </div>
  )
}

export default Services;
