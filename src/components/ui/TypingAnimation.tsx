import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
    "Computer Engineer",
    "Full Stack Developer",
    "NEC Registered Engineer",
    "AI/Data Science Enthusiast"
];

export const TypingAnimation = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRoleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentText === role) {
            typingSpeed = 2000;
            setTimeout(() => setIsDeleting(true), typingSpeed);
            return;
        }

        if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCurrentText(
                role.substring(0, currentText.length + (isDeleting ? -1 : 1))
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    return (
        <div className="h-8 md:h-12 flex items-center">
            <motion.span
                className="text-xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
            >
                {currentText}
            </motion.span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 w-[2px] h-6 md:h-8 bg-indigo-500 inline-block align-middle"
            />
        </div>
    );
};
