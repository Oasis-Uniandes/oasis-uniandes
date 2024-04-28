interface Props {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    range?: number;
    easing?: "linear" | "anticipate" | "backIn" | "backInOut" | "backOut" | "circIn" | "circInOut" | "circOut" | "easeIn" | "easeInOut" | "easeOut";
    className?: string;
    initDelay?: number;
}

export default Props;