import React from 'react';
import logo from '@assets/img/logos/OASIS-LOGO_imagotipo-gradient-white.svg';
import { IconBrandInstagram, IconBrandTiktok, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Reveal, RevealGroup } from '@components/utils/index';

const Footer: React.FC = () => {
    return (
        <footer className="footer footer-center p-10 bg-secondary text-white rounded-t-3xl">
        <RevealGroup>
            <Link to="/">
            <img src={logo} alt="Oasis Logo" className="w-32 h-32" />
            </Link>
            <p>
            Impulsamos tu aprendizaje en tecnologías de <b>Realidad Extendida</b>
            </p> 
            <p className='text-primary'>Hecho con ❤️ por el <Link to="/nosotros" className='font-bold hover:text-accent active:text-white'>equipo Oasis</Link></p>
        </RevealGroup>
        <nav>
            <RevealGroup direction='right' className="grid grid-flow-col gap-4">
            <a href="mailto:oasis@uniandes.edu.co" className='hover:text-primary active:text-accent'>
                    <IconMail size={32} />
            </a>
            <a href="https://www.instagram.com/oasis.uniandes/" target="_blank" rel="noreferrer" className='hover:text-primary active:text-accent'>
                <IconBrandInstagram size={32} />
            </a>
            <a href="https://www.tiktok.com/@oasis.uniandes" target="_blank" rel="noreferrer" className='hover:text-primary active:text-accent'>
                <IconBrandTiktok size={32} />
            </a>
            <a href="https://www.linkedin.com/company/oasis-uniandes/" target="_blank" rel="noreferrer" className='hover:text-primary active:text-accent'>
                <IconBrandLinkedin size={32} />
            </a>
            </RevealGroup>

        </nav>
        <Reveal>
        <p className='text-secondary-content'>
            Universidad de los Andes | Vigilada Mineducación<br/>
            Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de 1964.<br/>
            Reconocimiento personería jurídica: Resolución 28 del 23 de febrero de 1949 Minjusticia.
        </p>
        </Reveal>
        </footer>
    );
};

export default Footer;