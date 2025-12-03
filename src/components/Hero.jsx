import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-primary relative overflow-hidden px-4">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://videos.pexels.com/video-files/34756980/14734697_640_360_24fps.mp4" type="video/mp4" />
                </video>
                {/* Overlay for text readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-primary/80"></div>
                {/* Scanline/Grid Texture */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="z-10 text-center flex flex-col items-center relative">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent font-oswald tracking-[0.5em] text-sm md:text-lg mb-4 uppercase"
                >
                    Professional Video Editor
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-oswald font-bold text-white uppercase tracking-tighter leading-none mb-2"
                >
                    VISUAL
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-9xl font-oswald font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase tracking-tighter leading-none mb-8"
                >
                    STORYTELLER
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-400 max-w-2xl text-lg md:text-xl font-light tracking-wide mb-10"
                >
                    Turning raw footage into compelling narratives. Specializing in high-retention content for creators and brands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <a href="#portfolio" className="px-8 py-4 bg-accent text-primary font-bold font-oswald uppercase tracking-wider hover:bg-white transition-colors duration-300">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-gray-700 text-white font-bold font-oswald uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300">
                        Book a Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
