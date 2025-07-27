"use client";

import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Video Editing Showreel",
      description: "Dynamic showcase of video editing skills featuring cinematic transitions, color grading, and motion graphics.",
      category: "showreel",
      tools: ["Premiere Pro", "After Effects"],
      duration: "1min",
      year: "2024",
      link: "https://www.instagram.com/reel/DHeQEf-zsm_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      color: "blue"
    },
    {
      id: 2,
      title: "YouTube Video Project",
      description: "Professional video editing project showcasing advanced techniques, smooth transitions, and high-quality production.",
      category: "social",
      tools: ["Premiere Pro", "After Effects"],
      duration: "3-5min",
      year: "2024",
      link: "https://youtu.be/cGfqpdORxZE?si=5LxA47skayhL3TvH",
      color: "purple"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-white">VideoEditor</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 rounded-full border border-blue-500/30 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-400 font-medium">Professional Video Editing Services</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent leading-none">
            Creative
            <br />
            <span className="text-blue-400">Video Editor</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your raw footage into compelling visual stories with professional editing, 
            <br />
            motion graphics, and post-production excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://www.instagram.com/reel/DHeQEf-zsm_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center gap-3 cursor-pointer inline-flex"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Watch Showreel
            </a>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 border-2 border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-3">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-3">50+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-3">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">My Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional video editing services tailored to your creative vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Video Editing</h3>
              <p className="text-gray-300 mb-6">Professional editing for commercials, music videos, documentaries, and more with cinematic quality.</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Color grading & correction</li>
                <li>• Audio mixing & mastering</li>
                <li>• Visual effects & transitions</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Motion Graphics</h3>
              <p className="text-gray-300 mb-6">Dynamic motion graphics and animations to enhance your video content and brand identity.</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Logo animations</li>
                <li>• Title sequences</li>
                <li>• Infographic animations</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Post-Production</h3>
              <p className="text-gray-300 mb-6">Complete post-production services including sound design, visual effects, and final delivery.</p>
              <ul className="text-gray-400 space-y-2">
                <li>• Sound design & mixing</li>
                <li>• VFX & compositing</li>
                <li>• Multiple format delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Featured Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              A showcase of my recent projects across different genres and styles
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveFilter("all")}
                className={`px-8 py-3 rounded-lg border transition-all font-medium cursor-pointer ${
                  activeFilter === "all" 
                    ? "bg-blue-600/20 text-blue-400 border-blue-500/30" 
                    : "bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50"
                }`}
              >
                All Projects ({projects.length})
              </button>
              <button 
                onClick={() => setActiveFilter("social")}
                className={`px-8 py-3 rounded-lg border transition-all font-medium cursor-pointer ${
                  activeFilter === "social" 
                    ? "bg-blue-600/20 text-blue-400 border-blue-500/30" 
                    : "bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50"
                }`}
              >
                Social Media ({projects.filter(p => p.category === "social").length})
              </button>
              <button 
                onClick={() => setActiveFilter("showreel")}
                className={`px-8 py-3 rounded-lg border transition-all font-medium cursor-pointer ${
                  activeFilter === "showreel" 
                    ? "bg-blue-600/20 text-blue-400 border-blue-500/30" 
                    : "bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50"
                }`}
              >
                Showreels ({projects.filter(p => p.category === "showreel").length})
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className={`aspect-video bg-gradient-to-br from-${project.color}-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden`}>
                  <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.link !== "#" ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-8 py-4 bg-${project.color}-600 rounded-lg text-white font-semibold hover:bg-${project.color}-700 transition-all text-lg cursor-pointer`}
                      >
                        Watch Project
                      </a>
                    ) : (
                      <button 
                        onClick={() => {
                          alert(`${project.title} - ${project.description}`);
                        }}
                        className={`px-8 py-4 bg-${project.color}-600 rounded-lg text-white font-semibold hover:bg-${project.color}-700 transition-all text-lg cursor-pointer`}
                      >
                        Watch Project
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex gap-3 mb-6">
                    {project.tools.map((tool, index) => (
                      <span key={index} className={`px-4 py-2 bg-${project.color}-600/20 rounded-lg text-sm text-${project.color}-400 font-medium`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Duration: {project.duration}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => {
                // You can add a modal or redirect to full portfolio
                alert('Full portfolio would open here!');
              }}
              className="px-12 py-5 border-2 border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">About Me</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Passionate video editor with 5+ years of experience creating compelling visual narratives for brands, filmmakers, and content creators worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cinematic Editing</h3>
              <p className="text-gray-300 text-lg">Creating immersive storytelling experiences through advanced editing techniques and visual effects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Turnaround</h3>
              <p className="text-gray-300 text-lg">Delivering high-quality edits with quick turnaround times to meet your project deadlines.</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collaborative</h3>
              <p className="text-gray-300 text-lg">Working closely with clients to bring their vision to life with open communication and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Let&apos;s Create Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch to discuss your next project and how we can work together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 mb-4 text-lg">soubhagyag73@gmail.com</p>
              <p className="text-gray-400">I&apos;ll get back to you within 24 hours</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
              <p className="text-gray-300 mb-4 text-lg">+91 6295932396</p>
              <p className="text-gray-400">Available Mon-Fri, 9AM-6PM IST</p>
            </div>
          </div>
          
          <button 
            onClick={() => {
              // You can add email functionality here
              window.location.href = 'mailto:soubhagyag73@gmail.com?subject=New Project Inquiry';
            }}
            className="px-16 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 cursor-pointer"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://x.com/Sou_bha_gya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/soubhagyaghoshal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Video Editor Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
