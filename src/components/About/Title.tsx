import teamImg from '@assets/img/team.jpg';

const Title = () => {
    return (
        <div className="hero sm:min-h-[600px] rounded-3xl" style={{backgroundImage: `url(${teamImg})`}}>
            <div className="hero-overlay bg-gradient-to-t from-secondary to-transparent rounded-3xl"></div>
            <div className="text-center prose !prose-invert flex flex-col justify-end h-full py-20 items-center">
                <h1 className='text-5xl'>¿Quienes Somos?</h1>
                <p className="not-prose px-4">Somos un grupo de estudiantes de la Universidad de los Andes apasionados por las tecnologías de Realidad Extendida.</p>
                <button className='btn btn-accent btn-outline w-48 mt-6'>Únete a Nosotros</button>
            </div>
        </div>
    );
}

export default Title;