import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const form = useRef()
  const [success, setSuccess] = useState(false)

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}>
        Contacto
      </motion.h2>

      <motion.div
        className="flex justify-center gap-6 mt-10 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="mailto:lopez.loureiro.sergio.ald@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          <EmailIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/sergio-lópez-loureiro-256274123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          <LinkedInIcon />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Contact
