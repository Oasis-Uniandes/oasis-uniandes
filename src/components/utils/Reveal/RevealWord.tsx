import React from "react";
import RevealGroup from "./RevealGroup";
import Props from "./RevealInterface";

interface WordProps extends Props{
    children: string;
    className?: string;
}

const RevealWord: React.FC<WordProps> = ({ children, className, duration, delay=0.06, direction="right", range=30, easing="easeOut" }) => {

    const words = children.split(" ");

    return (
        <RevealGroup text={true} className={className} duration={duration} delay={delay} direction={direction} range={range} easing={easing}>
            {words.map((word: string, index: number) => (
                <span key={index}>{word}</span>
            ))}
        </RevealGroup>
    );
};

export default RevealWord;
