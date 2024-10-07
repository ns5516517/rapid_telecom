'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Animation = ({ children }) => {
    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, scale: 0.9 }}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Animation;