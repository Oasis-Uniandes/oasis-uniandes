import React from 'react';

import logoVivi from '@assets/img/logos/LogoViVi_Fondos claros.png';
import logoColivri from '@assets/img/logos/colivri-logo_imagotipo-white-bg.svg';
import logoImagine from '@assets/img/logos/LOGO-imagine.svg';
import logoDisc from '@assets/img/logos/DISC.png';

const Partners: React.FC = () => {
    return (
        <section className='container flex flex-col items-center gap-8 py-16'>
            <article className='prose'>
                <h1>Agradecimientos</h1>
            </article>
            <ul className='grid grid-cols-1 items-center gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:grid-cols-4 justify-items-center'>
                <li>
                    <a href="https://vivero.virtual.uniandes.edu.co" target="_blank" rel="noreferrer">
                        <img
                        src={logoVivi}
                        className="transition-transform duration-300 transform hover:scale-110 h-32 relative -z-10"
                        alt="Logo Vivi"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://colivri.uniandes.edu.co" target="_blank" rel="noreferrer">
                        <img
                        src={logoColivri}
                        className="transition-transform duration-300 transform hover:scale-110 w-72 relative -z-10"
                        alt="Logo Colivri"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://imagine.uniandes.edu.co" target="_blank" rel="noreferrer">
                        <img
                        src={logoImagine}
                        className="transition-transform duration-300 transform hover:scale-110 h-24 relative -z-10"
                        alt="Logo Imagine"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://sistemas.uniandes.edu.co" target="_blank" rel="noreferrer">
                        <img
                        src={logoDisc}
                        className="transition-transform duration-300 transform hover:scale-110 w-72 relative -z-10"
                        alt="Logo Disc"
                        />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Partners;