import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiAcademicCap, HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";

const educationDetails = [
    {
        degree: "Bachelor of Engineering (B.E)",
        major: "Computer Science and Engineering",
        institution: "Cambridge Institute of Technology, Bengaluru",
        grade: "CGPA: 8.18/10",
        date: "2021 – 2025",
        icon: <HiAcademicCap className="text-2xl" />,
    },
    {
        degree: "Higher Secondary Education (Class 12)",
        major: "Science",
        institution: "Reliance International Academy",
        grade: "GPA: 3.22/4.0 | National Examination Board (NEB)",
        date: "2018 – 2020",
        icon: <HiAcademicCap className="text-2xl" />,
    },
    {
        degree: "Secondary Education Examination (SEE) (Class 10)",
        major: "General Education",
        institution: "Jana Secondary School (Jana Ma Vi)",
        grade: "GPA: 3.55/4.0 | National Examination Board (NEB)",
        date: "2018",
        icon: <HiAcademicCap className="text-2xl" />,
    },
];

const AcademicJourney = () => {
    return (
        <SectionWrapper id="journey" title="Academic Journey" subtitle="My Educational Background">
            <div className="max-w-4xl mx-auto relative pt-10">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent transform md:-translate-x-1/2" />

                {educationDetails.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 transform -translate-x-1/2 shadow-lg z-10 hidden md:flex">
                            {edu.icon}
                        </div>

                        {/* Mobile Node */}
                        <div className="absolute left-8 w-10 h-10 rounded-full bg-slate-900 border-2 border-indigo-500 flex md:hidden items-center justify-center text-indigo-400 transform -translate-x-1/2 shadow-lg z-10">
                            <span className="text-xs">{(index + 1).toString().padStart(2, '0')}</span>
                        </div>

                        {/* Content Card */}
                        <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                            <div className="glass p-8 rounded-2xl relative group overflow-hidden border-slate-700/50 hover:border-indigo-500/50 transition-colors shadow-md hover:shadow-lg">

                                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                <h4 className="text-lg text-indigo-400 font-medium mb-4">{edu.major}</h4>

                                <div className={`flex flex-col gap-2 text-slate-300 ${index % 2 === 0 ? "items-start" : "md:items-end items-start"}`}>
                                    <div className="flex items-center gap-2">
                                        <HiOutlineLocationMarker className="text-indigo-400 shrink-0" />
                                        <span>{edu.institution}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <HiAcademicCap className="text-indigo-400 shrink-0" />
                                        <span className="font-semibold text-white/90">{edu.grade}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 w-fit text-sm">
                                        <HiOutlineCalendar className="text-indigo-400" />
                                        <span>{edu.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default AcademicJourney;
