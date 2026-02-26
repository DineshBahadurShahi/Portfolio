import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

const experienceData = [
    {
        type: "work",
        title: "AI/Data Science Intern",
        company: "Cambrian SkillsDA",
        date: "2023 - Present",
        description: "Developed and trained machine learning models, performed data analytics, and built NLP pipelines for various internal projects.",
        icon: <HiBriefcase className="text-xl text-indigo-400" />
    },
    {
        type: "work",
        title: "Salesforce Administrator Intern",
        company: "Unknown",
        date: "2022 - 2023",
        description: "Managed structured CRM data, automated workflows, and generated reports to optimize business processes.",
        icon: <HiBriefcase className="text-xl text-cyan-400" />
    },
    {
        type: "work",
        title: "Computer Teacher",
        company: "Local School",
        date: "2020 - 2022",
        description: "Taught fundamental computer science concepts, programming basics, and digital literacy to students.",
        icon: <HiAcademicCap className="text-xl text-emerald-400" />
    }
];

const Experience = () => {
    return (
        <SectionWrapper id="experience">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Journey</span>
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto relative px-4">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

                <div className="space-y-12">
                    {experienceData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Center dot/icon */}
                                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-indigo-500 transition-colors duration-300">
                                    {item.icon}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                                    <div className="glass p-6 rounded-2xl relative group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-shadow duration-300">
                                        {/* Tiny arrow pointing to timeline */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 glass border-t border-r rotate-45 ${isEven ? "-left-2 border-l-0 border-b-0" : "-right-2 border-l border-b border-t-0 border-r-0"
                                            }`} />

                                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded inline-block mb-3">
                                            {item.date}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
                                        <h4 className="text-md text-slate-400 font-medium mb-4">{item.company}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
