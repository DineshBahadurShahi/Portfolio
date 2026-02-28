import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TypingAnimation } from "./ui/TypingAnimation";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Professional Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#020617]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Text Content (Left on Desktop, Bottom on Mobile) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-semibold tracking-wide"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Available for opportunities
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-sm leading-tight">
                            Dinesh Bahadur Shahi
                        </span>
                    </h1>

                    <div className="mb-10 h-10 flex justify-center lg:justify-start text-xl md:text-3xl text-slate-300 font-medium">
                        <TypingAnimation />
                    </div>

                    <p className="font-sans text-justify text-lg text-slate-300 max-w-2xl mb-12 leading-8 tracking-normal">
                        I enjoy building reliable and scalable web applications, focusing on clean design, performance, and practical software solutions.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-lg">
                                View Projects <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
                        </a>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/DineshBahadurShahi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-xl border border-slate-700 bg-slate-800/80 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-slate-700 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                            >
                                <SiGithub className="text-2xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dinesh-bahadur-shahi-24749628a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-xl border border-slate-700 bg-slate-800/80 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 hover:bg-slate-700 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                            >
                                <SiLinkedin className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Profile Image (Right on Desktop, Top on Mobile) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] shrink-0 mx-auto lg:mx-0 group"
                >
                    {/* Glowing Professional Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.05]">
                        <img
                            src="/profile.png"
                            alt="Dinesh Bahadur Shahi"
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Dinesh+Shahi&background=1e293b&color=cbd5e1&size=512';
                            }}
                        />
                    </div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-indigo-500 rounded-full opacity-60" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
