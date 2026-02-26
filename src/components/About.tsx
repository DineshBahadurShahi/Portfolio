import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineLightBulb, HiOutlineBeaker } from "react-icons/hi";

const highlights = [
    {
        icon: <HiOutlineAcademicCap className="text-3xl text-indigo-400" />,
        title: "Computer Engineering",
        desc: "Graduate with CGPA 8.18, strong foundation in computing.",
    },
    {
        icon: <HiOutlineCode className="text-3xl text-cyan-400" />,
        title: "Full Stack Developer",
        desc: "Specializing in React, TypeScript, Node.js, and modern web.",
    },
    {
        icon: <HiOutlineLightBulb className="text-3xl text-purple-400" />,
        title: "AI/Data Science",
        desc: "Internship experience with NLP, ML models, and predictive analytics.",
    },
    {
        icon: <HiOutlineBeaker className="text-3xl text-pink-400" />,
        title: "Researcher",
        desc: "Published research in cybersecurity and session key cryptography.",
    },
];

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-slate-900/50">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* Profile / Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/3 relative"
                >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden glass relative group flex items-center justify-center p-2 bg-slate-800/20 shadow-lg">
                        {/* Image Container */}
                        <div className="w-full h-full rounded-xl overflow-hidden relative border border-slate-700/50 group-hover:border-indigo-500/30 transition-colors duration-400">
                            <img
                                src="/profile.png"
                                alt="Dinesh Bahadur Shahi"
                                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Dinesh+Shahi&background=1e293b&color=cbd5e1&size=512';
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <div className="w-full md:w-2/3">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Future</span>.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 leading-relaxed mb-10"
                    >
                        I am a Computer Engineering graduate with a strong interest in understanding how systems work and how to improve them. My experience includes full-stack web development and cybersecurity research, where I have built secure and scalable applications. I focus on writing clean, reliable code and applying practical knowledge to develop efficient software solutions.
                    </motion.p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group"
                            >
                                <div className="mb-4 bg-slate-800/50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-slate-200">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
