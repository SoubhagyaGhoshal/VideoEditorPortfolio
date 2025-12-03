import React from 'react';
import { Mail, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-primary pt-20 pb-10 border-t border-gray-900 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-primary to-primary opacity-50 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
                        <h3 className="text-6xl md:text-8xl font-oswald font-bold text-white uppercase leading-none mb-8">
                            LET'S WORK <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">TOGETHER</span>
                        </h3>
                        <p className="text-gray-400 mb-12 max-w-md text-lg">
                            Ready to scale your content? I'm currently accepting new clients for the upcoming month.
                        </p>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="bg-accent/10 p-4 rounded-full backdrop-blur-sm border border-accent/20">
                                <Mail className="text-accent" size={32} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email Me</p>
                                <a href="mailto:soubhagyag73@gmail.com" className="text-2xl md:text-3xl font-oswald font-bold text-white hover:text-accent transition-colors">
                                    soubhagyag73@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram size={24} />, href: "https://www.instagram.com/soubhagya_ghoshal/" },
                                { icon: <Twitter size={24} />, href: "https://x.com/Sou_bha_gya" },
                                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/soubhagyaghoshal/" },
                                { icon: <Youtube size={24} />, href: "https://www.youtube.com/@SoubhagyaGhoshal" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="bg-secondary p-4 rounded-full text-gray-400 hover:text-primary hover:bg-accent transition-all duration-300 border border-gray-800 hover:border-accent"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-secondary/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-800">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-accent transition-colors text-lg placeholder-gray-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-accent transition-colors text-lg placeholder-gray-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Service</label>
                                <select className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-accent transition-colors text-lg appearance-none cursor-pointer">
                                    <option className="bg-secondary text-gray-300">YouTube Editing</option>
                                    <option className="bg-secondary text-gray-300">Short Form Content</option>
                                    <option className="bg-secondary text-gray-300">Course Production</option>
                                    <option className="bg-secondary text-gray-300">Other</option>
                                </select>
                            </div>

                            <div className="group">
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 group-focus-within:text-accent transition-colors">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-accent transition-colors text-lg placeholder-gray-700 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-primary font-bold py-5 rounded-xl hover:bg-white transition-colors uppercase tracking-widest flex items-center justify-center gap-2 group"
                            >
                                Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Soubhagya Ghoshal. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
