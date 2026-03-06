import SectionWrapper from "./SectionWrapper";
import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineShieldCheck, HiOutlineKey, HiOutlineClock, HiOutlineDownload, HiOutlineClipboardCopy, HiX } from "react-icons/hi";

const Research = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("01.GIJET.11.2.662");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <SectionWrapper id="research" className="py-24">
            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Research</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 max-w-2xl mx-auto"
                >
                    Advancing the state of the art in cybersecurity and cryptographic protocols to secure digital communications against sophisticated threats.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto w-full group relative"
                onMouseMove={handleMouseMove}
            >
                {/* Animated Glow Behind Card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

                <div className="relative h-full bg-slate-900 border border-slate-700/50 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
                    {/* Spotlight Effect */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(168, 85, 247, 0.15),
                  transparent 80%
                )
              `,
                        }}
                    />

                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
                                Published Research Paper
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                                Replay Attack Prevention using OTP, Timestamp, and Cryptographic Session Key
                            </h3>

                            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                                <p>
                                    <strong className="text-white">Research Problem:</strong> Modern communication networks are vulnerable to Replay Attacks, where an attacker intercepts and fraudulently delays or resends valid data transmissions. Standard encryption alone often fails to contextually authenticate the time and sequence of packets.
                                </p>
                                <p>
                                    <strong className="text-white">Proposed Solution:</strong> A robust, multi-layered defense mechanism integrating One-Time Passwords (OTP) for dynamic authentication, synchronized Timestamps to enforce temporal validity, and dynamically generated Cryptographic Session Keys for secure payload delivery.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Cryptography", "Network Security", "Python", "Authentication Protocols"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://thegrenze.com/index.php?display=page&view=journalabstract&absid=4509&id=8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-purple-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95 duration-300"
                                >
                                    Read Abstract & Paper <HiOutlineExternalLink className="text-xl" />
                                </a>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 font-semibold rounded-xl hover:bg-slate-700 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-105 active:scale-95 duration-300"
                                >
                                    Download Paper <HiOutlineDownload className="text-xl" />
                                </button>
                            </div>
                        </div>

                        {/* Visual Abstraction Column */}
                        <div className="flex-1 md:max-w-[300px] flex flex-col justify-center gap-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="glass p-4 rounded-xl flex items-center gap-4 border-purple-500/20">
                                    <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                                        <HiOutlineKey className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-200">Session Keys</h4>
                                        <p className="text-xs text-slate-400">Dynamic generation</p>
                                    </div>
                                </div>

                                <div className="glass p-4 rounded-xl flex items-center gap-4 border-cyan-500/20">
                                    <div className="bg-cyan-500/20 p-3 rounded-lg text-cyan-400">
                                        <HiOutlineClock className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-200">Timestamps</h4>
                                        <p className="text-xs text-slate-400">Temporal validation</p>
                                    </div>
                                </div>

                                <div className="glass p-4 rounded-xl flex items-center gap-4 border-emerald-500/20">
                                    <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                                        <HiOutlineShieldCheck className="text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-200">OTP Security</h4>
                                        <p className="text-xs text-slate-400">Multi-factor auth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Download Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-800">
                                <h3 className="text-xl font-bold text-slate-100">Paper Details</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-slate-400 hover:text-white transition-colors p-1"
                                >
                                    <HiX className="text-2xl" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-6">
                                <div className="space-y-4 text-sm text-slate-300">
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Title</span>
                                        <span className="font-medium text-slate-200">Survey: A Study on Authentication Mechanism on Replay Attack</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Journal</span>
                                        <span className="font-medium text-slate-200">GRENZE International Journal of Engineering and Technology (GIJET)</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Volume</span>
                                            <span className="font-medium text-slate-200">11</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Issue</span>
                                            <span className="font-medium text-slate-200">2</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Pages</span>
                                            <span className="font-medium text-slate-200">1370–1375</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Grenze ID Box */}
                                <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <span className="text-slate-500 text-xs font-medium mb-1 block">Grenze ID</span>
                                            <code className="text-purple-400 font-mono text-base bg-purple-500/10 px-2 py-1 rounded">01.GIJET.11.2.662</code>
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 text-sm"
                                        >
                                            <HiOutlineClipboardCopy className="text-lg" />
                                            {isCopied ? "Copied!" : "Copy"}
                                        </button>
                                    </div>
                                </div>

                                {/* Instructions & Action */}
                                <div className="space-y-4 pt-2 border-t border-slate-800">
                                    <p className="text-sm text-slate-400">
                                        To download the paper, open the Grenze search page and enter the above Grenze ID.
                                    </p>
                                    <a
                                        href="https://www.thegrenze.com/doigrenze/index.php"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-900/20 active:scale-95 duration-200"
                                    >
                                        Open Search Page <HiOutlineExternalLink className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};

export default Research;
