import React from 'react';
import { Link } from 'react-router-dom';

const Lines: React.FC = () => {
    return (
        <section className="bg-secondary w-full rounded-3xl">
            <div className='container flex flex-col items-center gap-12 py-24'>
                <div className="prose !prose-invert">
                    <h1>Lineas de Acción</h1>
                </div>
                <div>
                    <Link to="/" className='mask mask-circle'>
                        <figure className="relative">
                            <img src="https://via.placeholder.com/300" alt="Linea de Acción"/>
                            <figcaption className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                                Talleres de Desarrollo
                            </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Lines;