import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    duration?: number;
    delayIncrement?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    range?: number;
    className?: string;
}

const RevealGroup: React.FC<Props> = ({ children, duration = 0.5, delayIncrement = 0.25, direction = 'bottom', range = 50, className }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start(i => ({
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    duration: duration,
                    delay: i * delayIncrement
                },
            }));
        }
    }, [controls, inView, duration, delayIncrement]);

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, i) => (
                <motion.div
                    custom={i}
                    variants={
                        {
                            hidden: { opacity: 0, y: direction === 'bottom' ? range : direction === 'top' ? -range : 0, x: direction === 'right' ? range : direction === 'left' ? -range : 0},
                            visible: { opacity: 1, y: 0, x: 0}
                        }
                    }
                    initial='hidden'
                    animate={controls}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
};

export default RevealGroup;
