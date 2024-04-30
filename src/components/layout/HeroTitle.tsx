import { useEffect, useState } from 'react';
import { Reveal, RevealWord } from '@utils/Reveal/index';
import { motion, useScroll, useTransform} from 'framer-motion';
import getImage from '@utils/GetImage';
import { Link } from 'react-router-dom';

interface TitleProps {
    image: string;
    title: string;
    buttonText: string;
    buttonLink: string;
    children: React.ReactNode;
}

const HeroTitle: React.FC<TitleProps> = ({ image, title, children, buttonText, buttonLink }) => {

    const [imageSrc, setImageSrc] = useState(null);
    
    const { scrollYProgress } = useScroll({
        offset: ["start", "end 200vh"]
    });

    useEffect(() => {
        getImage(`${image}`).then(setImageSrc);

    }, [image]);

    const isExternal = buttonLink.startsWith('http');

    const backgroundSize = useTransform(scrollYProgress, [0, 1], ['100%', '150%']);
    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ['50%', '-180%']);

    return (
        <motion.div className="hero h-[440px] sm:max-h-[500px] md:h-[80vh] md:max-h-[540px] lg:max-h-svh lg:h-svh rounded-3xl bg-secondary"
        style={
            {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: backgroundSize,
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: backgroundPositionY,
            }
        }
        >
            <div className="hero-overlay bg-gradient-to-t from-secondary to-transparent rounded-3xl"></div>
            <div className="text-center prose !prose-invert flex flex-col justify-end h-full py-8 lg:py-20 items-center">
                <h1 className='text-5xl mb-8'>
                    <RevealWord className='justify-center'>{title}</RevealWord>
                </h1>
                <Reveal easing='easeInOut' direction='top' range={20} delay={0.3}>
                <div className="not-prose px-4">{children}</div>
                </Reveal>
                <Reveal easing='easeOut' range={20} delay={0.7} direction='top'>
                    {isExternal ? (
                        <a href={buttonLink} target='_blank' rel='noreferrer' className='btn btn-accent btn-outline w-48 mt-6'>{buttonText}</a>
                    ) : (
                        <Link to={buttonLink} className='btn btn-accent btn-outline w-48 mt-6'>{buttonText}</Link>
                    )    
                    }
                </Reveal>
            </div>
        </motion.div>
    );
}

export default HeroTitle;