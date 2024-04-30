import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '@assets/img/logos/OASIS-LOGO_isologo-gradient-white-07.svg';

const NavBar: React.FC = () => {
    return (
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            <div className="flex justify-center container navbar glass rounded-3xl fixed top-0 left-[50%] transform translate-x-[-50%] lg:mt-2 z-20">
                <div className="flex-none lg:hidden absolute left-0">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="lg:flex-1 px-2 mx-2">
                    <Link to="/" className="text-2xl font-bold text-white">
                        <img src={logo} alt="Oasis Logo" className="w-32" />
                    </Link>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal">
                    <li className='mr-2'><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/talleres">Talleres</NavLink></li>
                    </ul>
                </div>
            </div>
        </div> 
        <div className="drawer-side z-20">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200 glass">
                <li className='mb-2'><NavLink to="/">Inicio</NavLink></li>
                <li className='mb-2'><NavLink to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink to="/talleres">Talleres</NavLink></li>
            </ul>
        </div>
        </div>
    );
};

export default NavBar;