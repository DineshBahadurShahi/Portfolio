import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { cn } from "../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useEffect } from "react";

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
    const [theme, setTheme] = useState(() => {
        // Default to dark per instructions. Check localStorage if available.
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            return savedTheme || "dark";
        }
        return "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-colors duration-300 py-4 px-6 md:px-12",
                scrolled ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md py-3 border-b border-slate-200 dark:border-slate-800/50 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-slate-900 dark:text-white group transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700 group-hover:border-indigo-500 transition-colors">
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
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle & Social Icons */}
                    <div className="flex items-center gap-4 pl-6 border-l border-slate-300 dark:border-slate-700/50 transition-colors duration-300">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === "dark" ? (
                                <HiSun className="text-xl hover:text-amber-400 transition-colors" />
                            ) : (
                                <HiMoon className="text-xl hover:text-indigo-600 transition-colors" />
                            )}
                        </button>

                        <a href="https://github.com/DineshBahadurShahi" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-110">
                            <SiGithub className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/dinesh-bahadur-shahi-24749628a/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-110">
                            <SiLinkedin className="text-xl" />
                        </a>
                    </div>
                </nav>

                {/* Mobile Icons */}
                <div className="lg:hidden flex items-center gap-4 text-slate-600 dark:text-slate-400 transition-colors">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? <HiSun className="text-2xl" /> : <HiMoon className="text-2xl" />}
                    </button>
                    <button
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
                        className="absolute top-full left-0 w-full bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl py-6 px-6 lg:hidden flex flex-col gap-6 origin-top"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                            <a href="https://github.com/DineshBahadurShahi" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                <SiGithub className="text-2xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/dinesh-bahadur-shahi-24749628a/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
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
