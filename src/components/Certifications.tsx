import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from "react-icons/hi";

const certifications = [
    {
        title: "Registered Engineer – Nepal Engineering Council (NEC)",
        organization: "Nepal Engineering Council",
        description: "Registered as General Registered Engineer in Computer Engineering under Nepal Engineering Council.\nRegistration Number: 94431",
        icon: <HiOutlineBadgeCheck className="text-5xl text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-colors duration-300" />,
        link: "#",
        featured: true
    },
    {
        title: "AI/Data Science Internship",
        organization: "Cambrian SkillsDA",
        description: "Intensive program focused on artificial intelligence algorithms, machine learning models, and data science workflows.",
        icon: <HiOutlineBadgeCheck className="text-4xl text-indigo-500 dark:text-indigo-400 transition-colors duration-300" />,
        link: "https://drive.google.com/file/d/1PqbQ34fCsU8i0tF7sj8chkUAy269yrkC/view"
    },
    {
        title: "Salesforce Administrator Virtual Internship",
        organization: "SmartInternz",
        description: "Hands-on experience with Salesforce CRM administration, user management, security, and data handling.",
        icon: <HiOutlineBadgeCheck className="text-4xl text-cyan-600 dark:text-cyan-400 transition-colors duration-300" />,
        link: "https://smartinternz.com/internships/salesforce_certificates/2a3871513ed8a0395f7d0772da68d605"
    },
    {
        title: "Foundations of Cybersecurity",
        organization: "Coursera",
        description: "Comprehensive overview of cybersecurity principles, threat landscapes, and enterprise security frameworks.",
        icon: <HiOutlineBadgeCheck className="text-4xl text-purple-600 dark:text-purple-400 transition-colors duration-300" />,
        link: "https://www.coursera.org/account/accomplishments/verify/BR233ANANHZB"
    }
];

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" title="Certifications" subtitle="Professional Qualifications & Training">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative h-full flex"
                    >
                        <div className={`relative w-full h-full bg-white dark:bg-[#0f172a]/60 backdrop-blur-md p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md dark:shadow-md ${cert.featured ? 'border-emerald-200 hover:border-emerald-300 dark:border-emerald-500/50 dark:hover:border-emerald-400 dark:bg-slate-800/80 shadow-emerald-100 dark:shadow-emerald-900/20' : 'border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-500/50'}`}>

                            <div>
                                <div className={`mb-6 inline-flex p-4 rounded-xl shadow-sm transition-all duration-300 ${cert.featured ? 'bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-700/50' : 'bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700'}`}>
                                    {cert.icon}
                                </div>

                                <h3 className={`text-xl font-bold tracking-tight mb-2 transition-all duration-300 ${cert.featured ? 'text-emerald-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-emerald-300 dark:to-teal-300' : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-indigo-400 dark:group-hover:to-cyan-400'}`}>
                                    {cert.title}
                                </h3>

                                <p className={`font-medium mb-4 text-base tracking-wide uppercase transition-colors duration-300 ${cert.featured ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
                                    {cert.organization}
                                </p>

                                <p className="text-slate-600 dark:text-slate-400 text-base leading-7 tracking-normal whitespace-pre-line transition-colors duration-300">
                                    {cert.description}
                                </p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${cert.featured ? 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-300' : 'text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
                            >
                                <span>Verified Credential</span>
                                <HiOutlineExternalLink className="text-lg" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
