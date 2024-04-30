import teamImg from '@assets/img/team.jpg';
import { Reveal, RevealWord } from '@utils/Reveal/index';
import { motion, useScroll, useTransform} from 'framer-motion';

const Title: React.FC = () => { 

    const { scrollYProgress } = useScroll({
        offset: ["start", "end 200vh"]
    });

    const backgroundSize = useTransform(scrollYProgress, [0, 1], ['100%', '150%']);

    return (
        <motion.div className="hero h-[500px] sm:h-svh rounded-3xl bg-secondary"
        style={
            {
                backgroundImage: `url(${teamImg})`,
                backgroundSize: backgroundSize,
                backgroundRepeat: 'no-repeat',
            }
        }
        >
            <div className="hero-overlay bg-gradient-to-t from-secondary to-transparent rounded-3xl"></div>
            <div className="text-center prose !prose-invert flex flex-col justify-end h-full py-20 items-center">
                <h1 className='text-5xl mb-8'>
                    <RevealWord className='justify-center'>¿Quienes Somos?</RevealWord>
                </h1>
                <Reveal easing='easeInOut' direction='top' range={20} delay={0.3}>
                <p className="not-prose px-4">Somos un grupo de <b>estudiantes</b> de la Universidad de los Andes apasionados por las tecnologías de <b>Realidad Extendida.</b></p>
                </Reveal>
                <Reveal easing='easeOut' range={20} delay={0.7} direction='top'>
                <button className='btn btn-accent btn-outline w-48 mt-6'>Únete a Nosotros</button>
                </Reveal>
            </div>
        </motion.div>
    );
}

export default Title;