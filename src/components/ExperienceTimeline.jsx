// src/components/ExperienceTimeline.jsx
import { motion } from "framer-motion";
import { FaReact, FaBriefcase, FaNodeJs, FaTools, FaDatabase, FaCheckCircle } from "react-icons/fa";
import { SiTailwindcss, SiDocker, SiGithubactions, SiJest } from "react-icons/si";

const experience = [
    {
        title: "Desarrollador Frontend con experiencia Full Stack",
        company: "Plexus Tech",
        date: "Julio 2022 - Actualidad",
        description: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <FaReact className="text-blue-500 mt-1" />
                    <p>SPAs con React.js (hooks, Router, Context API).</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <SiTailwindcss className="text-cyan-500 mt-1" />
                    <p>Diseño responsive con Tailwind y MUI.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <FaTools className="text-yellow-500 mt-1" />
                    <p>Formularios validados, subida de archivos, JWT y control de acceso.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <FaDatabase className="text-purple-500 mt-1" />
                    <p>APIs con Node.js, Express y Sequelize.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <SiDocker className="text-blue-400 mt-1" />
                    <p>Entornos Dockerizados para dev/test con Redis y MariaDB.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <SiGithubactions className="text-gray-500 mt-1" />
                    <p>CI/CD con GitHub Actions y despliegues en cloud privado.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <SiJest className="text-pink-500 mt-1" />
                    <p>Testing unitario y de integración (Jest, RTL, Supertest).</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <p>Colaboración técnica: arquitectura, PRs, ESLint y buenas prácticas.</p>
                </motion.div>
            </div>
        ),
    },
    {
        title: "Desarrollador Full Stack en prácticas",
        company: "Plexus Tech",
        date: "Abril 2022- Junio 2022",
        description: "Portfolio creativo con React y animaciones. Contacto vía EmailJS.",
    },
];

export default function ExperienceTimeline() {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">💼 Experiencia</h2>
            <div className="relative border-l-2 border-blue-500 pl-7 space-y-8">
                {experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -left-6 top-1 text-blue-500">
                            <FaBriefcase size={20} />
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.company} — {item.date}</p>
                        <div className="text-gray-700 dark:text-gray-300">{item.description}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
