import React from 'react'
import { useSiteData } from '../../contexts/DataContext';
import { Packageinterface } from '../../utils/type';
import Package from '../../components/Package';
import Image from '../../components/Image';
import CallConsultancy from '../../components/CallConsultancy';
import Modal from '../../components/Modal';
import ChoosePackagePlan from '../../components/ChoosePackagePlan';

const Packages: React.FC = () => {
  const {data} = useSiteData();
  const packages = data?.packages || [];
  return (
    <div id='home-container'>
        <Image src={'https://res.cloudinary.com/dpv6poha8/image/upload/v1693236016/HomeImage2_hdokpj.png'} className='home-img'>
                <div className='text-image-background flex justify-between items-center absolute bottom p-8 right left sizing-border'>
                    <div className='flex flex-col home-main-body-text'>
                        <p className='text-styled'>Our Packages</p>
                    </div>
                </div>
        </Image>
        <div className='flex flex-col gap-5 mt-8 mb-8 p-8'>
            <p className='text-styled'>Select A Package</p>
            <div className='flex flex-row wrap justify-between'>
            {
                packages?.map((currPackage: Packageinterface) => {
                    return (
                        <Package 
                            _id={currPackage?._id} 
                            type={currPackage?.type} 
                            features={currPackage?.features}
                        />
                    )
                })
            }
            </div>
        </div>
        <CallConsultancy />
        <Modal isOpen={true} onClose={() => {} }>
            <ChoosePackagePlan />
        </Modal>
    </div>
  )
}

export default Packages;
