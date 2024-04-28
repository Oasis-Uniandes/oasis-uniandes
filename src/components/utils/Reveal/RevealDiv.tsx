import { motion, AnimationControls } from 'framer-motion';
import Props from './RevealInterface';

// agregar i a Props

interface PropsDiv extends Props{
    i?: number;
    group?: boolean;
    controls: AnimationControls;
    ref?: any;
}

const RevealDiv: React.FC<PropsDiv> = ({ children, duration = 0.5, delay = 0.25, direction = 'bottom', range = 50, easing='linear', i=0 , controls, group, className, ref, initDelay=0}) => {
    return (
        
        <motion.div
        ref={group ? null : ref}
        className={className}
        custom={i}
        variants={
            {
                hidden: { opacity: 0, y: direction === 'bottom' ? range : direction === 'top' ? -range : 0, x: direction === 'right' ? range : direction === 'left' ? -range : 0},
                visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                        duration: duration,
                        delay: group ? i * delay + initDelay: delay,
                        ease: easing,
                    },
                }
            }
        }
        initial='hidden'
        animate={controls}
        >
            {children}
        </motion.div>
    )
}

export default RevealDiv