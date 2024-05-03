import React, { useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Carousel: React.FC = () => {
    const [marginLeft, setMarginLeft] = useState(0);

    const imageWidth = 500;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const referencia = document.querySelector('#referencia') as HTMLElement;
    const containerWidth = referencia?.clientWidth || 0;
    const maxMarginLeft = carouselWidth - containerWidth;

    const handleScroll = (direction: string) => {
        console.log(containerWidth, maxMarginLeft, marginLeft)
        if (direction === 'left') {
            setMarginLeft(prev => Math.max(prev - imageWidth, 0));
        } else {
            setMarginLeft(prev => Math.min(prev + imageWidth, maxMarginLeft));
        }
    }

    useEffect(() => {
        if (carousel) {
            carousel.style.marginLeft = `-${marginLeft}px`;
        }
    }, [marginLeft, carousel]);

        return (
        <>
        <div className="container" id='referencia'></div>
        <div className="container flex py-8">
            <button className="prev z-10" onClick={() => handleScroll('left')}><IconChevronLeft/></button>
            <div className="carousel space-x-4 rounded-3xl overflow-visible">
                <div className="carousel-item">
                    <img src={`https://via.placeholder.com/${imageWidth}`} alt="Placeholder" className='rounded-3xl'/>
                </div>
                <div className="carousel-item">
                    <img src={`https://via.placeholder.com/${imageWidth}`} alt="Placeholder" className='rounded-3xl'/>
                </div>
                <div className="carousel-item">
                    <img src={`https://via.placeholder.com/${imageWidth}`} alt="Placeholder" className='rounded-3xl'/>
                </div>
                <div className="carousel-item">
                    <img src={`https://via.placeholder.com/${imageWidth}`} alt="Placeholder" className='rounded-3xl'/>
                </div>
                <div className="carousel-item">
                    <img src={`https://via.placeholder.com/${imageWidth}`} alt="Placeholder" className='rounded-3xl'/>
                </div>
                <div className="carousel-item">
                    <img src={`https://via.placeholder.com/${imageWidth}`} alt="Placeholder" className='rounded-3xl'/>
                </div>

            </div>
            <button className="next" onClick={() => handleScroll('right')}><IconChevronRight/></button>
        </div>
        </>
    );
}

export default Carousel;