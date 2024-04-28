import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    delay?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    range?: number;
}

const Reveal = ({ children, delay = 0, direction = 'bottom', range = 50}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        <motion.div
            ref={ref}
            variants={
                {
                    hidden: { opacity: 0, y: direction === 'bottom' ? range : direction === 'top' ? -range : 0, x: direction === 'right' ? range : direction === 'left' ? -range : 0},
                    visible: { opacity: 1, y: 0, x: 0}
                }
            }
            initial='hidden'
            animate={mainControls}
            transition={
                {
                    duration: 0.5,
                    delay: delay
                }
            }
        >
            {children}
        </motion.div>
    );
};

export default Reveal;