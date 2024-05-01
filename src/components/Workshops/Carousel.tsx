import React, { useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Carousel: React.FC = () => {
    const [scrollX, setScrollX] = useState(0);

    const imageWidth = 500;

    const handleScroll = (direction: string) => {
        const carousel = document.querySelector('.carousel');
        const carouselWidth = carousel?.scrollWidth || 0;
        const containerWidth = carousel?.clientWidth || 0;
        const maxScrollX = carouselWidth - containerWidth;

        if (direction === 'left') {
            setScrollX(prev => Math.max(prev - imageWidth, 0));
        } else {
            setScrollX(prev => Math.min(prev + imageWidth, maxScrollX));
        }
    }

    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        carousel?.scrollTo({ left: scrollX, behavior: 'smooth' });
    }, [scrollX]);

        return (
        <div className="container flex py-8">
            <button className="prev" onClick={() => handleScroll('left')}><IconChevronLeft/></button>
            <div className="carousel space-x-4 rounded-3xl">
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
    );
}

export default Carousel;