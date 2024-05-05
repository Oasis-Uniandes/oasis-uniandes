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
            const width = children[current].clientWidth + spacing;
            if (direction === 'right') {
                if (current >= children.length - 1 ){
                    setMarginLeft(0);
                    setCurrent(0);
                    return;
                }
                setMarginLeft(prev => prev + width);
                setCurrent(prev => prev + 1);
            }
            console.log(current, children[current].offsetWidth, marginLeft);
        }
    }

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.marginLeft = `-${marginLeft}px`;
        }
    }, [marginLeft]);

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
        </>
    );
}

export default Carousel;
