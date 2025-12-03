import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, direction = 'left', speed = 20 }) => {
    return (
        <div className="relative flex overflow-hidden py-4 bg-accent text-primary font-oswald font-bold text-2xl md:text-4xl uppercase tracking-widest select-none">
            <motion.div
                className="flex whitespace-nowrap flex-nowrap"
                animate={{ x: direction === 'left' ? '-50%' : '0%' }}
                initial={{ x: direction === 'left' ? '0%' : '-50%' }}
                transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="mx-8">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
