import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';

import showreelThumb from '../assets/showreel_thumb.png';
import shortsThumb from '../assets/shorts_thumb.png';
import brandStoryThumb from '../assets/brand_story_thumb.png';
import documentaryThumb from '../assets/documentary_thumb.png';

const projects = [
    {
        id: 1,
        title: "Showreel 2024",
        category: "Highlight",
        image: showreelThumb,
        link: "https://www.youtube.com/@SoubhagyaGhoshal",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2"
    },
    {
        id: 2,
        title: "Viral Shorts",
        category: "Social Media",
        image: shortsThumb,
        link: "https://www.youtube.com/@SoubhagyaGhoshal/shorts",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
    },
    {
        id: 3,
        title: "Brand Story",
        category: "Commercial",
        image: brandStoryThumb,
        link: "https://www.youtube.com/@SoubhagyaGhoshal",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
    },
    {
        id: 4,
        title: "Documentary",
        category: "Long Form",
        image: documentaryThumb,
        link: "https://www.youtube.com/@SoubhagyaGhoshal",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1"
    },
];

const Portfolio = () => {
    return (
        <section id="work" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Selected Work</h2>
                        <h3 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase leading-none">
                            Featured <br /> Projects
                        </h3>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors font-oswald uppercase tracking-wide">
                        View All Work <ArrowUpRight size={20} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative overflow-hidden rounded-3xl border border-gray-800 bg-secondary ${project.colSpan} ${project.rowSpan}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                            />

                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-end">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <ArrowUpRight className="text-white" size={24} />
                                    </div>
                                </div>

                                <div>
                                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-3 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                    <h4 className="text-2xl md:text-3xl font-oswald font-bold text-white uppercase leading-none group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h4>
                                </div>
                            </div>

                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-oswald uppercase tracking-wide">
                        View All Work <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
