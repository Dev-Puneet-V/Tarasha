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
  const [selectedPackage, setSelectedPackage] = React.useState<number>(1);
  const packages = data?.packages || [];
  const packageSelectionHandler = (index: number) => {
    setSelectedPackage(index);
  }
  return (
    <div id='home-container' className='packages-container'>
        <Image src={'https://res.cloudinary.com/dfoggertn/image/upload/v1696688104/test-1_yxjd2q.jpg'} className='home-img first-image'>
                <div className='text-image-background flex justify-between items-center absolute bottom pl-8 pr-8 right left sizing-border'>
                    <div className='flex flex-col home-main-body-text'>
                        <p className='text-styled'>Our Packages</p>
                    </div>
                </div>
        </Image>
        <div className='flex flex-col m-2 pl-4 pr-4'>
            <p className='text-styled'>Select A Package</p>
            <div className='flex flex-row wrap justify-between'>
            {
                packages?.map((currPackage: Packageinterface, index: number) => {
                    return (
                        <Package 
                            key={index}
                            _id={index}
                            type={currPackage?.type}
                            features={currPackage?.features}
                            handlePlanVisibilty={(index: number) => {
                                setPlanVisibilty(true);
                                packageSelectionHandler(index + 1);
                            } } ranges={[]}                />
                    )
                })
            }
            </div>
        </div>
        <CallConsultancy />
        <Modal isOpen={isPlanVisible} onClose={() => setPlanVisibilty(false) }>
            <ChoosePackagePlan selectedPackage={selectedPackage}/>
        </Modal>
    </div>
  )
}

export default Packages;
