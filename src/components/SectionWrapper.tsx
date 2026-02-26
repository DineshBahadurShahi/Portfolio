import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
    fullHeight?: boolean;
    title?: string;
    subtitle?: string;
}

const SectionWrapper = ({ children, id, className, fullHeight = false, title, subtitle }: SectionWrapperProps) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "w-full flex flex-col justify-center relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-28",
                fullHeight ? "min-h-screen" : "min-h-fit",
                className
            )}
        >
            {(title || subtitle) && (
                <div className="text-center mb-16 relative z-10 w-full">
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4 font-heading"
                        >
                            {title.split(' ').map((word, i, arr) => (
                                i === arr.length - 1 ? (
                                    <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-sm ml-2">
                                        {word}
                                    </span>
                                ) : (
                                    <span key={i} className="text-white ml-2">{word}</span>
                                )
                            ))}
                        </motion.h2>
                    )}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-lg"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            )}

            {children}
        </motion.section>
    );
};

export default SectionWrapper;
