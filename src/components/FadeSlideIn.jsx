import { motion } from "framer-motion";

const FadeSlideIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default FadeSlideIn;
