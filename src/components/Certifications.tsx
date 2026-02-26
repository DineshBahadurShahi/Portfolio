import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { HiOutlineBadgeCheck, HiOutlineExternalLink } from "react-icons/hi";

const certifications = [
    {
        title: "Registered Engineer – Nepal Engineering Council (NEC)",
        organization: "Nepal Engineering Council",
        description: "Registered as General Registered Engineer in Computer Engineering under Nepal Engineering Council.\nRegistration Number: 94431",
        icon: <HiOutlineBadgeCheck className="text-5xl text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />,
        link: "#",
        featured: true
    },
    {
        title: "AI/Data Science Internship",
        organization: "Cambrian SkillsDA",
        description: "Intensive program focused on artificial intelligence algorithms, machine learning models, and data science workflows.",
        icon: <HiOutlineBadgeCheck className="text-4xl text-indigo-400" />,
        link: "https://drive.google.com/file/d/1PqbQ34fCsU8i0tF7sj8chkUAy269yrkC/view"
    },
    {
        title: "Salesforce Administrator Virtual Internship",
        organization: "SmartInternz",
        description: "Hands-on experience with Salesforce CRM administration, user management, security, and data handling.",
        icon: <HiOutlineBadgeCheck className="text-4xl text-cyan-400" />,
        link: "https://smartinternz.com/internships/salesforce_certificates/2a3871513ed8a0395f7d0772da68d605"
    },
    {
        title: "Foundations of Cybersecurity",
        organization: "Coursera",
        description: "Comprehensive overview of cybersecurity principles, threat landscapes, and enterprise security frameworks.",
        icon: <HiOutlineBadgeCheck className="text-4xl text-purple-400" />,
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
                        <div className={`relative w-full h-full glass p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between overflow-hidden shadow-md ${cert.featured ? 'border-emerald-500/50 hover:border-emerald-400 bg-slate-800/80 shadow-emerald-900/20' : 'border-slate-700/50 hover:border-indigo-500/50'}`}>

                            <div>
                                <div className={`mb-6 inline-flex p-4 rounded-xl shadow-sm transition-shadow ${cert.featured ? 'bg-emerald-900/40 border border-emerald-700/50' : 'bg-slate-800/50 border border-slate-700'}`}>
                                    {cert.icon}
                                </div>

                                <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${cert.featured ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400'}`}>
                                    {cert.title}
                                </h3>

                                <p className={`font-medium mb-4 text-sm tracking-wide uppercase ${cert.featured ? 'text-emerald-400' : 'text-indigo-400'}`}>
                                    {cert.organization}
                                </p>

                                <p className="text-slate-400 leading-relaxed text-sm whitespace-pre-line">
                                    {cert.description}
                                </p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${cert.featured ? 'text-emerald-500 hover:text-emerald-300' : 'text-slate-500 hover:text-indigo-400'}`}
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
