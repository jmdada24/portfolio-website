'use client';

import { motion, AnimatePresence } from 'framer-motion';

type PageLoaderProps = {
  isVisible: boolean;
};

export default function PageLoader({ isVisible }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <motion.span
              initial={{ opacity: 0, scale: 0.94, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl"
            >
              JMD
            </motion.span>

            {/* Glow */}
            <div className="pointer-events-none absolute rounded-full bg-primary/20 blur-3xl w-40 h-40" />

            {/* Progress Bar */}
            <div className="mt-8 h-[3px] w-32 overflow-hidden rounded-full bg-primary/20">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 1.4,
                  ease: 'easeInOut',
                }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}