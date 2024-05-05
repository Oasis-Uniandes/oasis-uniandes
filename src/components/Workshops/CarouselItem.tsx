import getImage from "@components/utils/GetImage";
import { useEffect, useState } from "react";

interface CarouselItemProps {
    image: string;
    title: string;
    description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, title, description }) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>('');

    useEffect(() => {
        getImage(`${image}`).then(setImageSrc);
    }, [image]);

    return (
        <div className="carousel-item">
            <img src={imageSrc} alt={title} className='rounded-3xl h-[500px] object-contain' />
        </div>
    );
}

export default CarouselItem;

export type { CarouselItemProps };
