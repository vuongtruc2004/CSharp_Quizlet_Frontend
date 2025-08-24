import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 1000);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="hover:bg-gray100-grayException750 transition-all duration-200 cursor-pointer fixed bottom-5 right-5 w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-200-gray-700 bg-gray200-twilight900"
                >
                    <ArrowUpwardIcon sx={{ fontSize: "1.2rem" }} />
                </motion.span>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
