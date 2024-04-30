import React, { useRef, useEffect } from 'react';
import { Reveal, RevealGroup } from '@utils/Reveal/index';
import { useInView } from 'framer-motion';

const Counter: React.FC = () => {
    const aprendicesRef = useRef<HTMLSpanElement>(null);
    const miembrosRef = useRef<HTMLSpanElement>(null);
    const hundredsMiembrosRef = useRef<HTMLSpanElement>(null);

    const isInView = useInView(aprendicesRef, {once: true});

    useEffect(() => {
        if (isInView) {
            if (aprendicesRef.current) {
                aprendicesRef.current.style.setProperty('--value', '40');
            }
            if (miembrosRef.current) {
                miembrosRef.current.style.setProperty('--value', '33');
            }
            if (hundredsMiembrosRef.current) {
                hundredsMiembrosRef.current.style.setProperty('--value', '2');
            }
        }
    }, [isInView]);

    return (
        <div className="container">
            
            <div className="flex gap-4 w-full justify-center pt-8 pb-16 flex-wrap">
                <Reveal className="divider text-3xl w-full" delay={0.2} easing="easeOut">
                <span>Miembros</span>
                </Reveal>
                <RevealGroup className='flex gap-4 flex-wrap justify-center'>
                <div className="stats shadow-xl hover:scale-110 hover:shadow-2xl">
                    <div className="stat">
                        <div className="stat-title">Nuestros Aprendices</div>
                        <span className="stat-value countdown">
                            +<span style={{["--value" as any]: 0}} ref={aprendicesRef}></span>
                        </span>
                        <div className="stat-desc">Aprendices de desarrollo</div>
                    </div>
                </div>
                <div className="stats shadow-xl hover:scale-110 hover:shadow-2xl">
                    <div className="stat">
                        <div className="stat-title">Nuestros Miembros</div>
                        <span className="stat-value countdown">
                            +<span className='-mr-6' id={'noZero'} style={{["--value" as any]: 0}} ref={hundredsMiembrosRef}></span><span style={{["--value" as any]: 0}} ref={miembrosRef}></span>
                        </span>
                        <div className="stat-desc">Miembros de la comunidad</div>
                    </div>
                </div>
                </RevealGroup>
            </div>
        </div>
    );
};

export default Counter;