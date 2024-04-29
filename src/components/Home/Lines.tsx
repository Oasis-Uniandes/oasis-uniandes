import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { RevealWord } from '@utils/Reveal';

import talleresImg from '@assets/img/talleres.jpg';
import metaversoImg from '@assets/img/metaverso.webp';

const Lines: React.FC = () => {
    const constraintsRef = useRef(null)

    const isInView = useInView(constraintsRef, {once: true});

    const mainControls = useAnimation();

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
            duration: 1
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    useEffect(() => {
        const handleResize = () => {
            if (isInView) {
                mainControls.start('visible');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isInView, mainControls]);

    return (
        <section className="bg-secondary w-full rounded-3xl">
            <div className='container flex flex-col items-center gap-12 py-24'>
                <div className="prose !prose-invert">
                    <h1>
                        <RevealWord>Lineas de Acción</RevealWord>
                    </h1>
                </div>
                <motion.div className='flex flex-col md:flex-row gap-4 flex-wrap min-h-[400px] w-full justify-center px-2' ref={constraintsRef}
                    variants={container}
                    initial="hidden"
                    animate={mainControls}>
                    <motion.div whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle w-12 h-12 bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer"
                    ></motion.div>
                    <motion.div variants={item}  whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle w-16 h-16 bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer"></motion.div>
                    <motion.figure variants={item} whileHover={{ scale: 1.05 }} drag dragSnapToOrigin whileDrag={{ scale: 1.1 }} dragConstraints={constraintsRef} className="relative mask mask-circle self-start cursor-pointer w-[300px] h-[300px]">
                        <img src={talleresImg} alt="Linea de Acción" className='w-[300px] h-[300px] object-cover'/>
                        <figcaption className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold bg-gradient-to-t from-secondary to-transparent px-16 py-10 text-center to-50%">
                        <Link to="/" className='hover:text-primary active:text-accent bg-secondary rounded-full p-2 hover:bg-white transition-all'>
                            Talleres de Desarrollo
                        </Link>
                        </figcaption>
                    </motion.figure>
                    <motion.div variants={item} whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle w-14 h-14 self-end bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer"></motion.div>
                    <motion.div variants={item} whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle w-20 h-20 self-end bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer"></motion.div>
                    <motion.figure variants={item} whileHover={{ scale: 1.05 }} drag dragSnapToOrigin whileDrag={{ scale: 1.1 }} dragConstraints={constraintsRef} className="relative mask mask-circle self-end cursor-pointer w-[300px] h-[300px]">
                        <img src={metaversoImg} alt="Linea de Acción" className='w-[300px] h-[300px] object-cover'/>
                        <figcaption className="absolute inset-0 flex items-end justify-center text-white text-xl font-bold bg-gradient-to-t from-secondary to-transparent px-16 py-10 text-center to-50%">
                        <Link to="/" className='hover:text-primary active:text-accent bg-secondary rounded-full p-2 hover:bg-white transition-all'>
                            Introducción al Metaverso
                        </Link>
                        </figcaption>
                    </motion.figure>
                    <motion.div variants={item} whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle  w-20 h-20 bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer self-start md:self-end lg:self-end xl:self-start"></motion.div>
                    <motion.div variants={item} whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle  w-8 h-8 bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer self-start md:self-end lg:self-end xl:self-start"></motion.div>
                    <motion.div variants={item} whileHover={{ scale: 1.05 }} drag whileDrag={{ scale: 1.2 }} dragConstraints={constraintsRef} className="z-10 mask mask-circle  w-14 h-14 bg-gradient-to-tr from-primary to-accent to-80% cursor-pointer self-start md:self-end lg:self-end xl:self-start"></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Lines;