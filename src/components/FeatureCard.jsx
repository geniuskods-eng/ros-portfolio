import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl transition-all duration-500"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-2xl text-red-300 shadow-[0_20px_60px_rgba(139,0,0,0.15)] transition duration-500 group-hover:bg-red-950/80">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
      <span className="pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full border border-white/10 bg-red-500/5 blur-2xl" />
    </motion.div>
  )
}

export default FeatureCard
