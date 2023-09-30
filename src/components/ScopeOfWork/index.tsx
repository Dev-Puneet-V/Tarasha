import React from 'react'
import ChairImage from '../../assets/circular-chair.png';
import JoinerImage from '../../assets/joiner.png';
import useScreenSize from '../..//hooks/useMediaQuery';
import './style.css';

const ScopeOfWork: React.FC = () => {
 const screenSize = useScreenSize();
  return (
    <>
       {screenSize === 'lg' && <div className='flex flex-col gap-5 items-center' id='scope-of-work'>
            <p className='text-styled'>Scope Of Work</p>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner l-r-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner l-r-b-t-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
            <div className='w-75 row-12-joiner flex items-center gap-5'>
                <img src={JoinerImage} className='joiner t-b-r-l-joiner '/>
            </div>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner r-l-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner r-l-b-t-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
            <div className='w-75 row-23-joiner flex items-center gap-5'>
                <img src={JoinerImage} className='joiner t-b-l-r-joiner '/>
            </div>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner l-r-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner l-r-b-t-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
        </div>}
        {screenSize === 'md' && <div className='flex flex-col gap-5 items-center' id='scope-of-work'>
            <p className='text-styled'>Scope Of Work</p>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner l-r-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
            <div className='w-75 row-12-joiner flex items-center gap-5'>
                <img src={JoinerImage} className='joiner t-b-r-l-joiner '/>
            </div>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner r-l-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
            <div className='w-75 row-23-joiner flex items-center gap-5'>
                <img src={JoinerImage} className='joiner t-b-l-r-joiner '/>
            </div>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner l-r-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
            
            <div className='w-75 row-12-joiner flex items-center gap-5'>
                <img src={JoinerImage} className='joiner t-b-r-l-joiner '/>
            </div>
            <div className='flex wrap justify-center gap-5 scope-container relative'>
                <div className='flex flex-wrap'>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                    <img src={JoinerImage} className='joiner r-l-t-b-joiner'/>
                    <div className='scope flex flex-col gap-1 justify-center  ml-8'>
                        <img className='element-img' src={ChairImage}/>
                        <p className='text-bold'>Consultation</p>
                        <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                    </div>
                </div>
            </div>
            <div className='w-75 row-23-joiner flex items-center gap-5'>
                <img src={JoinerImage} className='joiner t-b-l-r-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center ml-8 pl-8'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
        </div>}
        {screenSize === 'sm' && <div className='flex flex-col gap-5 items-center' id='scope-of-work'>
            <p className='text-styled'>Scope Of Work</p>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center '>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            <div className='w-full row-12-joiner flex items-center gap-5 justify-end'>
                <img src={JoinerImage} className='joiner t-b-r-l-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            <div className='w-full row-23-joiner flex items-center gap-5 justify-start'>
                <img src={JoinerImage} className='joiner t-b-l-r-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            <div className='w-full row-12-joiner flex items-center gap-5 justify-end'>
                <img src={JoinerImage} className='joiner t-b-r-l-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            <div className='w-full row-23-joiner flex items-center gap-5 justify-start'>
                <img src={JoinerImage} className='joiner t-b-l-r-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            <div className='w-full row-12-joiner flex items-center gap-5 justify-end'>
                <img src={JoinerImage} className='joiner t-b-r-l-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            <div className='w-full row-23-joiner flex items-center gap-5 justify-start'>
                <img src={JoinerImage} className='joiner t-b-l-r-joiner '/>
            </div>
            <div className='flex flex-wrap w-full justify-start'>
                <div className='scope flex flex-col gap-1 justify-center'>
                    <img className='element-img' src={ChairImage}/>
                    <p className='text-bold'>Consultation</p>
                    <p>Consultation and proper documentation to assess client’s needs and what we can offer.</p>
                </div>
            </div>
            
        </div>}
    </>
  )
}

export default ScopeOfWork;