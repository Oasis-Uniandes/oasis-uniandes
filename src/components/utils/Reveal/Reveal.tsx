import React, { useRef, useEffect } from 'react'
import { useInView, useAnimation} from 'framer-motion';
import Props from './RevealInterface';
import RevealDiv from './RevealDiv';



const Reveal:React.FC<Props> = ({ children, duration, delay, direction, range, easing, className}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        RevealDiv({ children: children, duration, delay, direction, range, easing, controls: mainControls, group: false, className, ref})
    );
};

export default Reveal;