import React from 'react';
import { Video, Youtube, TrendingUp, MonitorPlay } from 'lucide-react';

const services = [
    {
        icon: <Video size={40} />,
        title: "Video Editing",
        description: "Professional editing for commercials, music videos, documentaries, and more with cinematic quality. Including color grading, audio mixing, and visual effects."
    },
    {
        icon: <MonitorPlay size={40} />,
        title: "Motion Graphics",
        description: "Dynamic motion graphics and animations to enhance your video content and brand identity. Logo animations, title sequences, and infographics."
    },
    {
        icon: <TrendingUp size={40} />,
        title: "Post-Production",
        description: "Complete post-production services including sound design, visual effects, and final delivery in multiple formats."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">What I Do</h2>
                    <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white">MY SERVICES</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-primary border border-gray-800 p-8 rounded-2xl hover:border-accent transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-oswald mb-4 text-white group-hover:text-accent transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
