import React from 'react';
import { ImageProps } from './type';
import './style.css';

const Image: React.FC<ImageProps> = (props) => {
    const {
        src,
        children,
        className
    } = props;

    return (
        <div className={`relative ${className} home-img img`}>
            <img src={src} className='absolute background-img' />
            {children}
        </div>
    );
}

export default Image;
