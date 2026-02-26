import SectionWrapper from "./SectionWrapper";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineShieldCheck, HiOutlineKey, HiOutlineClock } from "react-icons/hi";

const Research = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

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

                            <a
                                href="https://thegrenze.com/index.php?display=page&view=journalabstract&absid=4509&id=8"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-purple-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95 duration-300"
                            >
                                Read Abstract & Paper <HiOutlineExternalLink className="text-xl" />
                            </a>
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
        </SectionWrapper>
    );
};

export default Research;
