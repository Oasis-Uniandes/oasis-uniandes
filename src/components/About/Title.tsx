import teamImg from '@assets/img/team.jpg';

const Title: React.FC = () => {
    return (
        <div className="hero h-dvh rounded-3xl" style={{backgroundImage: `url(${teamImg})`}}>
            <div className="hero-overlay bg-gradient-to-t from-secondary to-transparent rounded-3xl"></div>
            <div className="text-center prose !prose-invert flex flex-col justify-end h-full py-20 items-center">
                <h1 className='text-5xl mb-8'>¿Quienes Somos?</h1>
                <p className="not-prose px-4">Somos un grupo de <b>estudiantes</b> de la Universidad de los Andes apasionados por las tecnologías de <b>Realidad Extendida.</b></p>
                <button className='btn btn-accent btn-outline w-48 mt-6'>Únete a Nosotros</button>
            </div>
        </div>
    );
}

export default Title;