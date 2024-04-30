import HeroTitle from '@layout/HeroTitle'

const Title: React.FC = () => { 
    return (
        <HeroTitle title='Talleres de Desarrollo' buttonText='Quiero ser Aprendiz!' buttonLink='/' image='talleres_hero.jpg'>
                    <p>Realizamos talleres de desarrollo de aplicaciones de <b>Realidad Extendida</b> con nuestros <b>Aprendices</b>.</p>
        </HeroTitle>
    );
}

export default Title;