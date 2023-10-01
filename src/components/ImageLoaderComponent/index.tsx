import React, { useEffect, useState } from 'react';
import './style.css';

interface ImageLoaderComponentProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  children?: any;
}

const ImageLoaderComponent: React.FC<ImageLoaderComponentProps> = ({ src, children, ...rest }) => {
  const [loadedsrc, setLoadedsrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const workerBlob = new Blob([`
      self.addEventListener('message', (event) => {
        const { src } = event.data;
        console.log(src)
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            self.postMessage({ src, blob });
          })
          .catch((error) => {
            console.error('Error loading image:', error);
          });
      });
    `], { type: 'application/javascript' });

    const workerBlobURL = URL.createObjectURL(workerBlob);

    const imageLoaderWorker = new Worker(workerBlobURL);

    const loadImageWithWorker = (src: string) => {
      imageLoaderWorker.postMessage({ src });
    };

    imageLoaderWorker.addEventListener('message', (event) => {
      const { src, blob } = event.data;

      const objectURL = URL.createObjectURL(blob);

      setLoadedsrc(objectURL);
    });

    loadImageWithWorker(src);

    return () => {
      imageLoaderWorker.terminate();
      URL.revokeObjectURL(workerBlobURL);
    };
  }, [src]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  if (loadedsrc) {
    return (
      <img
        src={loadedsrc}
        alt="Loaded"
        {...rest}
      />
    );
  }
    return (
        <div
            {...rest}
            className={`skeleton ${rest.className || ''}`}
        >{
            children
        }</div>
    );
};

export default ImageLoaderComponent;
