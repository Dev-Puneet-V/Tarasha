import React from 'react'
import { useSiteData } from '../../contexts/DataContext';
import { Packageinterface } from '../../utils/type';
import Package from '../../components/Package';
import Image from '../../components/Image';
import CallConsultancy from '../../components/CallConsultancy';
import Modal from '../../components/Modal';
import ChoosePackagePlan from '../../components/ChoosePackagePlan';
import './style.css';

const Packages: React.FC = () => {
  const {data} = useSiteData();
  const [isPlanVisible, setPlanVisibilty] = React.useState(false);
  const packages = data?.packages || [];
  return (
    <div id='home-container' className='packages-container'>
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696077777/TarashaWebsiteContent/Images/blogimages/banner/banner-test-3_qysaxp.jpg'} className='home-img first-image'>
                <div className='text-image-background flex justify-between items-center absolute bottom p-8 right left sizing-border'>
                    <div className='flex flex-col home-main-body-text'>
                        <p className='text-styled'>Our Packages</p>
                    </div>
                </div>
        </Image>
        <div className='flex flex-col gap-5 m-2 mt-8 mb-8 p-8'>
            <p className='text-styled'>Select A Package</p>
            <div className='flex flex-row wrap justify-between'>
            {
                packages?.map((currPackage: Packageinterface) => {
                    return (
                        <Package 
                            _id={currPackage?._id} 
                            type={currPackage?.type} 
                            features={currPackage?.features}
                            handlePlanVisibilty={() => setPlanVisibilty(true)}
                        />
                    )
                })
            }
            </div>
        </div>
        <CallConsultancy />
        <Modal isOpen={isPlanVisible} onClose={() => setPlanVisibilty(false) }>
            <ChoosePackagePlan />
        </Modal>
    </div>
  )
}

export default Packages;
