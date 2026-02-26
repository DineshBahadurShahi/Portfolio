import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { cn } from "../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const scrolled = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
                scrolled ? "bg-[#0f172a]/80 backdrop-blur-md py-3 border-b border-slate-800/50 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white group">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-indigo-500 transition-colors">
                        <img
                            src="/profile.png"
                            alt="Dinesh Bahadur Shahi"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Dinesh+Shahi&background=1e293b&color=cbd5e1&size=128';
                            }}
                        />
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Social Icons Desktop */}
                    <div className="flex items-center gap-4 pl-6 border-l border-slate-700/50">
                        <a href="https://github.com/DineshBahadurShahi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
                            <SiGithub className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/dinesh-bahadur-shahi-24749628a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                            <SiLinkedin className="text-xl" />
                        </a>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-2xl text-slate-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
                        className="absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-6 px-6 lg:hidden flex flex-col gap-6 origin-top"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
                            <a href="https://github.com/DineshBahadurShahi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                                <SiGithub className="text-2xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/dinesh-bahadur-shahi-24749628a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                <SiLinkedin className="text-2xl" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
