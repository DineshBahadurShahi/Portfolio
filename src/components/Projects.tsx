import SectionWrapper from "./SectionWrapper";
import { motion, type Variants } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const projects = [
    {
        title: "Nepali-English Date Converter",
        description: "A robust utility application for converting dates between Nepali (Bikram Sambat) and English (Gregorian) formats with precision and ease.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop",
        tags: ["React", "TypeScript", "Tailwind CSS", "Date Integration"],
        links: {
            live: "https://vercel.com/dineshbahadurshahis-projects/nepali-english-date-converter",
            github: "https://github.com/DineshBahadurShahi/nepali-english-date-converter",
        },
    },
    {
        title: "Currency Converter",
        description: "Real-time currency exchange platform featuring live API integration, historical data tracking, and a seamless minimalist user interface.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop",
        tags: ["React", "API Integration", "State Management", "UI/UX"],
        links: {
            live: "https://currency-converter-topaz-kappa.vercel.app/",
            github: "https://github.com/DineshBahadurShahi/Currency-Converter-using-React",
        },
    },
    {
        title: "SAMACHAR News Portal",
        description: "A summarized news aggregation platform that fetches, categorizes, and presents top headlines dynamically with a focus on readability.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop",
        tags: ["React", "NewsAPI", "Auth", "Tailwind"],
        links: {
            github: "https://github.com/DineshBahadurShahi/SAMACHAR-A-Summarized-News-Portal",
        },
    },
    {
        title: "BudgetBuddy",
        description: "A comprehensive personal finance management tool for tracking expenses, setting savings goals, and visual data analytics.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop",
        tags: ["Full Stack", "Charts", "Database", "Tailwind"],
        links: {
            github: "https://github.com/DineshBahadurShahi/Budget-Buddy",
        },
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
};

const Projects = () => {
    return (
        <SectionWrapper id="projects" title="Featured Projects" subtitle="A selection of my recent engineering work">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-10"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative rounded-2xl overflow-hidden glass transition-all duration-400 hover:scale-[1.02] border border-slate-700/50 hover:border-indigo-500/30 shadow-lg hover:shadow-xl"
                    >
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center items-center gap-4 backdrop-blur-sm">
                            <div className="flex gap-4">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-all border border-slate-600 shadow-md hover:scale-105"
                                    >
                                        <SiGithub className="text-xl" />
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 transition-all border border-indigo-500 shadow-md hover:scale-105"
                                    >
                                        <HiOutlineExternalLink className="text-xl" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden bg-slate-800">
                            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-0 group-hover:bg-transparent transition-colors duration-400" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-8 relative z-20 flex flex-col h-[calc(100%-16rem)] min-h-[250px] justify-between">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 line-clamp-3 leading-relaxed text-sm mb-6 transition-all duration-300">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Projects;
