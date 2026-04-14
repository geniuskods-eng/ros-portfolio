import { motion } from 'framer-motion'

const UseCaseCard = ({ title, label, accent }) => {
  return (
    <motion.div
      whileHover={{ translateY: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 hover:border-white/20"
    >
      <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-red-200 shadow-[0_12px_40px_rgba(139,0,0,0.18)]">
        {label}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">
        Designed to scale elegant rental operations with automation, inventory clarity, and modern workflows.
      </p>
      <span className="pointer-events-none absolute right-5 top-5 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
    </motion.div>
  )
}

export default UseCaseCard
