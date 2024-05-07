import React, { useEffect, useState, useRef } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import CarouselItem, { CarouselItemProps } from './CarouselItem';

interface CarouselProps {
    items: CarouselItemProps[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [marginLeft, setMarginLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [current, setCurrent] = useState(0);

    const spacing = 16;

    const handleScroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const node = carouselRef.current;
            const children = Array.from(node.children) as HTMLElement[];
            if (direction === 'right') {
                if (current >= children.length - 1 ){
                    handleGoTo(0);
                    return;
                }
                handleGoTo(current + 1);
            } else {
                if (current <= 0 ){
                    handleGoTo(0);
                    return;
                }
                handleGoTo(current - 1);
            }
        }
    }

    const handleGoTo = (index: number) => {
        if (carouselRef.current) {
            const node = carouselRef.current;
            const children = Array.from(node.children) as HTMLElement[];
            const allWidths = children.map(child => child.clientWidth + spacing);

            const totalMargin = allWidths.reduce((acc, curr, i) => {
                if (i < index) {
                    return acc + curr;
                }
                return acc;
            }, 0);

            carouselRef.current.style.marginLeft = `-${totalMargin}px`;
            setCurrent(index);
        }
    }

    useEffect(() => {
        if (carouselRef.current) {
            handleGoTo(current);
        }
    }, [current]);

    return (
        <>
            <div className="container flex py-8">
                <button className="prev z-10 hover:text-primary text-secondary active:text-accent transition-colors duration-2 bg-white bg-opacity-40 mask mask-circle hover:bg-opacity-100 backdrop-blur" onClick={() => handleScroll('left')}><IconChevronLeft size={48}/></button>
                <div ref={carouselRef} className="carousel space-x-4 rounded-3xl overflow-visible transition-all duration-1000">
                    {items.map((item, index) => (
                        <CarouselItem key={index} image={item.image} title={item.title} description={item.description} />
                    ))}
                </div>
                <div style={{ width: '500px' }}></div>
                <button className="next z-10 hover:text-primary text-secondary active:text-accent transition-colors duration-2 bg-white bg-opacity-40 mask mask-circle hover:bg-opacity-100 backdrop-blur" onClick={() => handleScroll('right')}><IconChevronRight size={48} /></button>
            </div>
            <div className="indicator-container flex justify-center space-x-2 items-center h-6">
                {items.map((_, index) => (
                    <button key={index} className={`transition-all w-4 h-4 mask mask-circle bg-secondary hover:bg-primary active:bg-accent ${current === index ? 'h-6 w-6 !bg-primary' : 'hover:w-5 hover:h-5'}`} onClick={() => handleGoTo(index)}></button>
                ))}
            </div>
        </>
    );
}

export default Carousel;
