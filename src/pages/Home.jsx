import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationTimeline from '../components/EducationTimeline';
import avatar from '../assets/avatarweb.png';

function Home() {

  return (
    <motion.section
      className="px-6 py-10 max-w-4xl mx-auto text-gray-800 dark:text-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Sobre mí</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={avatar}
          alt="Avatar"
          className="w-40 h-40 rounded-full shadow-md object-cover"
        />
        <div>
          <p className="text-lg leading-relaxed">
            ¡Hola! Soy <strong>Sergio López</strong>, desarrollador front-end con pasión por crear experiencias web atractivas, dinámicas y accesibles.
            Me encanta trabajar con React, animaciones sutiles y siempre estoy explorando nuevas tecnologías.
          </p>
          <p className="mt-4">
            Actualmente, estoy enfocado en mejorar mis habilidades en UI/UX y hacer que cada proyecto tenga personalidad propia.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Habilidades</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-4xl text-blue-500">
          <div className="flex items-center justify-center">
            <FaHtml5 title="HTML5" />
          </div>
          <div className="flex items-center justify-center">
            <FaCss3Alt title="CSS3" />
          </div>
          <div className="flex items-center justify-center">
            <FaJsSquare title="JavaScript" />
          </div>
          <div className="flex items-center justify-center">
            <FaReact title="React" />
          </div>
          <div className="flex items-center justify-center">
            <FaNodeJs title="Node.js" />
          </div>
          <div className="flex items-center justify-center">
            <FaGithub title="GitHub" />
          </div>
        </div>
      </div>
      <ExperienceTimeline />
      <EducationTimeline />

      <blockquote className="mt-10 italic text-center text-gray-500 dark:text-gray-400">
        "El diseño no es solo cómo se ve, sino cómo funciona." – Steve Jobs
      </blockquote>
    </motion.section>
  );
}

export default Home;