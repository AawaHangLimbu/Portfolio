import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth 0.5s transition
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;