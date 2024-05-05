import { Title, Carousel } from '@components/Workshops/index';
import carouselWorkshop from '@data/carouselWorkshop.json';
import { CarouselItemProps } from '@components/Workshops/CarouselItem';

function Workshops() {
    const itemsCarousel: CarouselItemProps[] = carouselWorkshop;
    return (
    <>
    <Title />
    <Carousel items={itemsCarousel} />
    <div className='h-[200vh]'></div> 
    </>
    );
}

export default Workshops;
