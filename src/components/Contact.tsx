import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/10 relative transition-colors duration-300">

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">Connect</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300"
                >
                    Have an exciting project or want to discuss the future of AI and web technologies? I'm always open to talking about new opportunities.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto relative">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden group shadow-sm dark:shadow-md border border-slate-200 dark:border-slate-800 transition-colors duration-300">

                        <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 font-heading transition-colors duration-300">Contact Information</h3>

                        <div className="space-y-6">
                            <a href="mailto:imdineshbdr@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors group/link p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover/link:bg-indigo-500 group-hover/link:text-white transition-all duration-300">
                                    <HiOutlineMail className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Email Address</p>
                                    <p className="text-lg font-medium">imdineshbdr@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 p-4 rounded-xl border border-transparent transition-colors duration-300">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <HiOutlineLocationMarker className="text-2xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Location</p>
                                    <p className="text-lg font-medium">Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-10 mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4 font-heading transition-colors duration-300">Social Profiles</h3>

                        <div className="flex gap-4">
                            <a href="https://github.com/DineshBahadurShahi" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-lg group/social hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                                <SiGithub className="text-xl group-hover/social:scale-105 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/dinesh-bahadur-shahi-24749628a/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-lg group/social hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                <SiLinkedin className="text-xl group-hover/social:scale-105 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form className="bg-white dark:bg-[#0f172a]/60 backdrop-blur-md p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between group shadow-sm dark:shadow-md border border-slate-200 dark:border-slate-800 transition-colors duration-300">

                        <div className="relative z-10 space-y-6">
                            <div className="relative group/input">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-300 dark:border-slate-700 focus:border-indigo-500 px-4 pt-6 pb-2 outline-none transition-colors text-slate-800 dark:text-slate-200 peer placeholder-transparent rounded-t-lg"
                                    placeholder="Your Name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400"
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="relative group/input">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-300 dark:border-slate-700 focus:border-cyan-500 px-4 pt-6 pb-2 outline-none transition-colors text-slate-800 dark:text-slate-200 peer placeholder-transparent rounded-t-lg"
                                    placeholder="Your Email"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                                >
                                    Your Email
                                </label>
                            </div>

                            <div className="relative group/input flex-1">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-300 dark:border-slate-700 focus:border-purple-500 px-4 pt-6 pb-2 outline-none transition-colors text-slate-800 dark:text-slate-200 peer placeholder-transparent rounded-t-lg resize-none min-h-[120px]"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-2 text-xs font-semibold text-purple-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400"
                                >
                                    Message
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 mt-6 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center gap-3 group/btn relative z-10"
                        >
                            Send Message
                            <HiPaperAirplane className="rotate-90 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
