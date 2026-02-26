import { SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-800/50 bg-slate-950/80  relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <a href="#home" className="text-xl font-bold tracking-tighter text-white mb-2">
                        Dinesh Bahadur Shahi
                    </a>
                    <p className="text-slate-500 text-sm">
                        Computer Engineer focused on building modern and reliable software.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6"
                >
                    <a href="#" className="text-slate-400 hover:text-white transition-colors hover:scale-110 active:scale-95 text-xl">
                        <SiGithub />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors hover:scale-110 active:scale-95 text-xl">
                        <SiLinkedin />
                    </a>
                </motion.div>

                <div className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Dinesh Bahadur Shahi. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
