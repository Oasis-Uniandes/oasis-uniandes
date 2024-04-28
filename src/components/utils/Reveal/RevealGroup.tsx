import React, { useRef, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion';

import Props from './RevealInterface';
import RevealDiv from './RevealDiv';

interface GroupProps extends Props {
    text?: boolean;
}

const RevealGroup: React.FC<GroupProps> = ({ children, duration, delay, direction, range, easing, className, initDelay, text=false }) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView, duration, delay, easing]);

    return (
        <div ref={ref} className={text? className + ' flex gap-1' : className}>
            {React.Children.map(children, (child, i) => (
                RevealDiv({ children: child, duration, delay, direction, range, easing, i, controls, group: true, initDelay})
            ))}
        </div>
    );
};

export default RevealGroup;
