import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
    SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
    SiNodedotjs, SiExpress, SiDjango, SiFastapi,
    SiPostgresql, SiMysql, SiSqlite, SiSupabase,
    SiPython, SiScikitlearn, SiPytorch,
    SiGit, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Frontend Development",
        color: "from-cyan-500 to-blue-500",
        skills: [
            { name: "React", icon: SiReact, level: "Advanced" },
            { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
            { name: "JavaScript", icon: SiJavascript, level: "Advanced" },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
            { name: "HTML5/CSS3", icon: SiHtml5, level: "Advanced" },
        ]
    },
    {
        title: "Backend Development",
        color: "from-green-500 to-emerald-700",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, level: "Intermediate" },
            { name: "Express.js", icon: SiExpress, level: "Intermediate" },
            { name: "Django", icon: SiDjango, level: "Intermediate" },
            { name: "FastAPI", icon: SiFastapi, level: "Intermediate" },
        ]
    },
    {
        title: "Database Management",
        color: "from-blue-600 to-indigo-800",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate" },
            { name: "MySQL", icon: SiMysql, level: "Intermediate" },
            { name: "SQLite", icon: SiSqlite, level: "Intermediate" },
            { name: "Supabase", icon: SiSupabase, level: "Intermediate" },
        ]
    },
    {
        title: "AI & Data Science",
        color: "from-purple-500 to-pink-600",
        skills: [
            { name: "Python", icon: SiPython, level: "Advanced" },
            { name: "Machine Learning", icon: SiScikitlearn, level: "Intermediate" },
            { name: "NLP", icon: SiPytorch, level: "Intermediate" },
        ]
    },
    {
        title: "Tools & DevOps",
        color: "from-slate-500 to-slate-700",
        skills: [
            { name: "Git", icon: SiGit, level: "Advanced" },
            { name: "GitHub", icon: SiGithub, level: "Advanced" },
            { name: "VS Code", icon: VscVscode, level: "Advanced" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Arsenal</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 max-w-2xl mx-auto"
                >
                    A comprehensive toolkit honed across diverse disciplines, enabling me to build full-scale, intelligent systems from the ground up.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={catIdx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-2xl p-8 relative overflow-hidden"
                    >
                        {/* Category Background Glow */}
                        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${category.color} opacity-10 blur-3xl pointer-events-none`} />

                        <h3 className="text-2xl font-semibold mb-8 border-b border-slate-700/50 pb-4 inline-block">
                            {category.title}
                        </h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                        >
                            {category.skills.map((skill, skillIdx) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skillIdx}
                                        variants={itemVariants}
                                        className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 border border-transparent hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                                    >
                                        <Icon className="text-4xl text-slate-400 group-hover:text-indigo-400 transition-colors drop-shadow-md" />
                                        <span className="text-sm font-medium text-slate-300 group-hover:text-white text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
