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
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696688104/test-1_yxjd2q.jpg'} className='home-img first-image'>
                <div className='text-image-background flex justify-between items-center absolute bottom p-8 right left sizing-border'>
                    <div className='flex flex-col home-main-body-text'>
                        <p className='text-styled'>Our Services</p>
                    </div>
                </div>
        </Image>
        <div id='elements-container' className='mb-2 pb-2'>
            <div className='flex flex-col pt-2 elements items-center mb-4 w-h100'>
                <p className='text-styled mb-4'>Elements</p>
                <div className='flex flex-row gap-3 wrap justify-center w-90'>
                        <Element key="Space" src={'https://img.freepik.com/premium-vector/black-white-round-frame-with-space-text-photo-leaves-frame-design-flyer-banner-postcard-vector-illustration_623474-228.jpg?w=2000'} text="Space" />
                        <Element key="Color" src={'https://w7.pngwing.com/pngs/360/577/png-transparent-assorted-color-of-circles-illustration-circle-euclidean-computer-file-colorful-round-color-splash-color-pencil-fashion.png'} text="Color" />
                        <Element key="Texture" src={'https://previews.123rf.com/images/str33tcat/str33tcat1707/str33tcat170700043/82265251-grunge-circles-seamless-pattern-hand-drawn-round-shapes-background-black-white-brush-stroke-texture.jpg'} text="Texture" />
                        <Element key="Form" src={'https://img.freepik.com/premium-vector/doodle-circle-scalloped-frame-hand-drawn-scalloped-edge-ellipse-shape-simple-round-label-form-flower-silhouette-lace-frame-vector-illustration-isolated-white-background_192280-1475.jpg'} text="Form" />
                        <Element key="Light" src={'https://images.unsplash.com/photo-1601574117431-e5430fccfae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGxpZ2h0fGVufDB8fDB8fHww&w=1000&q=80'} text="Light" />
                        <Element key="Pattern" src={'https://cdn.pixabay.com/photo/2017/10/06/11/54/circle-2822849_1280.jpg'} text="Pattern" />
                        <Element key="Scale" src={'https://previews.123rf.com/images/svitlananiko/svitlananiko1805/svitlananiko180500008/100980659-protractor-360-degrees-measuring-circle-scale-measuring-round-scale.jpg'} text="Scale" />
                        <Element key="Balance" src={'https://cdn-icons-png.flaticon.com/512/232/232585.png'} text="Balance" />
                        <Element key="Emphasis" src={'https://i.pinimg.com/474x/b3/12/23/b31223e97ca79420c0c831e6c8380ae8.jpg'} text="Emphasis" />
                        <Element key="Rhythm" src={'https://static.vecteezy.com/system/resources/previews/007/037/632/non_2x/pulse-graph-heart-beat-cardiogram-rhythm-graphic-ecg-echocardiogram-icon-in-circle-round-black-color-illustration-image-solid-outline-style-vector.jpg'} text="Rhythm" />
                </div>
                <button className='button button-dark mt-8' onClick={ () => navigate("/services")}>Get Started</button>
            </div>
            <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696688708/test-2_wcj56w.jpg'} className='home-img'>
            </Image>
        </div>
        <div id='services-container' className='flex flex-col items-center w-90'>
            <div className='flex flex-col gap-1 items-center justify-center w-90'>
                <p className='text-styled'>Services</p>
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
