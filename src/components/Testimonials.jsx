import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "John Doe",
        role: "YouTuber (1M+ Subs)",
        text: "Soubhagya is a wizard. My retention rates went up by 40% after working with him. Highly recommended!",
        image: "https://placehold.co/100x100/333/FFF?text=JD"
    },
    {
        name: "Jane Smith",
        role: "Course Creator",
        text: "Professional, fast, and creative. He understood my vision perfectly and delivered beyond expectations.",
        image: "https://placehold.co/100x100/333/FFF?text=JS"
    },
    {
        name: "Mike Johnson",
        role: "Agency Owner",
        text: "The best editor we've hired. His attention to detail and storytelling skills are unmatched.",
        image: "https://placehold.co/100x100/333/FFF?text=MJ"
    },
    {
        name: "Sarah Williams",
        role: "Content Strategist",
        text: "Incredible workflow and communication. The final edits were polished and ready to post.",
        image: "https://placehold.co/100x100/333/FFF?text=SW"
    }
];

// Duplicate testimonials for infinite loop
const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10 mb-16 text-center">
                <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Testimonials</h2>
                <h3 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase">What Clients Say</h3>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                    {marqueeTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[400px] flex-shrink-0 bg-primary/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-accent/50 transition-colors duration-300"
                        >
                            <Quote className="text-accent mb-6" size={32} />

                            <p className="text-gray-300 mb-8 leading-relaxed text-lg whitespace-normal">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                                />
                                <div>
                                    <h5 className="font-bold font-oswald text-white text-lg">{testimonial.name}</h5>
                                    <p className="text-xs text-accent uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
