import HeroTitle from '@layout/HeroTitle'

const Title: React.FC = () => { 
    return (
        <HeroTitle title='¿Quienes Somos?' buttonText='Únete a Nosotros' image='team.jpg' buttonLink='/'>
                    <p>Somos un grupo de <b>estudiantes</b> de la Universidad de los Andes apasionados por las tecnologías de <b>Realidad Extendida.</b></p>
        </HeroTitle>
    );
}

export default Title;