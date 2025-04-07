import { motion } from 'framer-motion'

const projects = [
  {
    title: 'App de Tareas',
    description: 'Una app simple para gestionar tareas con React.',
    code: 'https://github.com/tuusuario/todo-app',
    demo: 'https://todo-app-demo.netlify.app',
    image: 'https://via.placeholder.com/600x400?text=Proyecto+1',
  },
  {
    title: 'Clon de Spotify',
    description: 'Interfaz inspirada en Spotify usando React + Tailwind.',
    code: 'https://github.com/sergio100700/sergiotify',
    demo: 'https://sergio100700.github.io/sergiotify/',
    image: 'https://via.placeholder.com/600x400?text=Proyecto+2',
  },
  {
    title: 'Dashboard Admin',
    description: 'Panel de administración con estadísticas dinámicas.',
    code: 'https://github.com/tuusuario/admin-dashboard',
    demo: 'https://admin-dashboard-demo.vercel.app',
    image: 'https://via.placeholder.com/600x400?text=Proyecto+3',
  },
]

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 pt-28">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
              </div>
              <div className="mt-auto flex justify-between gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm"
                >
                  Ver demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600 text-sm"
                >
                  Ver código
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects;