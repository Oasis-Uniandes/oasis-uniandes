import React, { useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import t1 from '@assets/img/talleres/t1.webp';
import t2 from '@assets/img/talleres/t2.webp';
import t3 from '@assets/img/talleres/t3.webp';
import t4 from '@assets/img/talleres/t4.webp';
import t5 from '@assets/img/talleres/t5.webp';
import t6 from '@assets/img/talleres/t6.webp';
import t7 from '@assets/img/talleres/t7.webp';


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
        if (direction === 'left') {
            setMarginLeft(prev => Math.max(prev - (imageWidth+spacing), 0));
        } else {
            setMarginLeft(prev => {
                if (prev + imageWidth+spacing > maxMarginLeft) {
                    return 0;
                } else {
                    return Math.min(prev + imageWidth+spacing, maxMarginLeft);
                }
            });
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
            <button className="prev z-10 hover:text-primary text-secondary active:text-accent transition-colors duration-2 bg-white bg-opacity-40 mask mask-circle hover:bg-opacity-100 backdrop-blur" onClick={() => handleScroll('left')}><IconChevronLeft size={48}/></button>
            <div className="carousel space-x-4 rounded-3xl overflow-visible transition-all duration-1000">
                <div className="carousel-item">
                    <img src={t1} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
                <div className="carousel-item">
                    <img src={t2} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
                <div className="carousel-item">
                    <img src={t3} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
                <div className="carousel-item">
                    <img src={t4} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
                <div className="carousel-item">
                    <img src={t5} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
                <div className="carousel-item">
                    <img src={t6} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
                <div className="carousel-item">
                    <img src={t7} alt="Taller Oasis Introducción a Unity" className='rounded-3xl h-[500px] object-contain'/>
                </div>
            </div>
            <div style={{width: `${imageWidth}px`}}></div>
            <button className="next z-10 hover:text-primary text-secondary active:text-accent transition-colors duration-2 bg-white bg-opacity-40 mask mask-circle hover:bg-opacity-100 backdrop-blur" onClick={() => handleScroll('right')}><IconChevronRight size={48} /></button>
        </div>
        </>
    );
}

export default Carousel;