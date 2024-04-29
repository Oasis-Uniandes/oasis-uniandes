import React from 'react';
import { RevealWord } from '@utils/Reveal/index';

const About: React.FC = () => {
    // Estilos en línea
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        width: '50%',
    };

    const textStyle = {
        margin: 0,
        padding: '10px',
        fontSize: '16px',
        marginLeft: '100px',
    };

    const titleStyle = {
        margin: 0,
        padding: '10px',
        fontSize: '32px',
        fontWeight: 'bold',
        marginLeft: '100px',
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>
                <RevealWord className='justify-center gap-[5px]'>
                    Sobre Nosotros
                </RevealWord>
            </div>
            <p style={textStyle}>
                Descubre Oasis! una vibrante iniciativa estudiantil dedicada a explorar y expandir los horizontes de la realidad extendida. En Oasis, no solo aprendemos; creamos. Nuestro programa ofrece dos emocionantes líneas de acción: primero, ofrecemos talleres semanales interactivos donde los participantes, desde novatos hasta aspirantes a desarrolladores, pueden aprender a construir aplicaciones de realidad extendida desde cero. La aventura continúa con sesiones regulares donde probamos los juegos y aplicaciones más innovadores del ámbito, sumergiendo a nuestros miembros en el vértice de la tecnología actual. Además, impulsamos grupos de desarrollo especializados que no solo ponen en práctica estos conocimientos, sino que también buscan innovar y liderar en el campo de la realidad extendida. Únete a Oasis, donde la tecnología se encuentra con la creatividad, y juntos, transformamos el aprendizaje en creación.
            </p>
        </div>
    );
};

export default About;
