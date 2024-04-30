import React from 'react';

const Carousel: React.FC = () => {
    return (
        <div className="container carousel carousel-center p-4 space-x-4 bg-secondary rounded-3xl">
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
            </div>
        </div>
    );
}

export default Carousel;