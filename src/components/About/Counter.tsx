import React, { useRef, useEffect } from 'react';

const Counter: React.FC = () => {
    const aprendicesRef = useRef<HTMLSpanElement>(null);
    const miembrosRef = useRef<HTMLSpanElement>(null);
    const hundredsMiembrosRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (aprendicesRef.current) {
            aprendicesRef.current.style.setProperty('--value', '40');
        }
        if (miembrosRef.current) {
            miembrosRef.current.style.setProperty('--value', '33');
        }
        if (hundredsMiembrosRef.current) {
            hundredsMiembrosRef.current.style.setProperty('--value', '2');
        }
    }, []);

    return (
        <div className="container">
            <div className="flex gap-4 w-full justify-center py-24">
                <div className="stats shadow-xl">
                    <div className="stat">
                        <div className="stat-title">Nuestros Aprendices</div>
                        <span className="stat-value countdown">
                            +<span style={{["--value" as any]: 0}} ref={aprendicesRef}></span>
                        </span>
                        <div className="stat-desc">Talleres de desarrollo</div>
                    </div>
                </div>
                <div className="stats shadow-xl">
                    <div className="stat">
                        <div className="stat-title">Nuestros Miembros</div>
                        <span className="stat-value countdown">
                            +<span className='-mr-6' id={'noZero'} style={{["--value" as any]: 0}} ref={hundredsMiembrosRef}></span><span style={{["--value" as any]: 0}} ref={miembrosRef}></span>
                        </span>
                        <div className="stat-desc">Miembros de la comunidad</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;