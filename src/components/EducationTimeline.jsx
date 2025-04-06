// src/components/EducationTimeline.jsx
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
    {
        title: " FP Grado Superior - Desarrollo de Aplicaciones Multiplataforma",
        school: "IES Antón Losada Diéguez",
        date: "2020 - 2022",
        description: `Java, C#, .NET Framework, Java Swing, Python, XML, WPF, Android Studio, Unity, Firebase, MySQL, ERPs`,
    },
    {
        title: "Bachillerato Tecnológico",
        school: "IES Antón Losada Diéguez",
        date: "2016 - 2018",
        description: "",
    },
];

export default function EducationTimeline() {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">🎓 Formación</h2>
            <div className="relative border-l-2 border-green-500 pl-7 space-y-8">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -left-6 top-1 text-green-500">
                            <FaGraduationCap size={20} />
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.school} — {item.date}</p>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
