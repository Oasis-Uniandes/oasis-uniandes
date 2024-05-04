import React, { useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Carousel: React.FC = () => {
    const [marginLeft, setMarginLeft] = useState(0);

    const imageWidth = 500;
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const referencia = document.querySelector('#referencia') as HTMLElement;
    const carouselWidth = carousel?.scrollWidth || 0;
    const containerWidth = referencia?.clientWidth || 0;

    const spacing = 16;
    const maxMarginLeft = carouselWidth - containerWidth + imageWidth;

    const handleScroll = (direction: string) => {
        console.log(containerWidth, maxMarginLeft, marginLeft)
        if (direction === 'left') {
            setMarginLeft(prev => Math.max(prev - (imageWidth+spacing), 0));
        } else {
            setMarginLeft(prev => Math.min(prev + imageWidth+spacing, maxMarginLeft));
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
            <button className="prev z-10 hover:text-primary text-secondary active:text-white transition-colors duration-2" onClick={() => handleScroll('left')}><IconChevronLeft size={48}/></button>
            <div className="carousel space-x-4 rounded-3xl overflow-visible transition-all duration-1000">
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
            <div style={{width: `${imageWidth}px`}}></div>
            <button className="next hover:text-primary text-secondary active:text-white transition-colors duration-200" onClick={() => handleScroll('right')}><IconChevronRight size={48} /></button>
        </div>
        </>
    );
}

export default Carousel;