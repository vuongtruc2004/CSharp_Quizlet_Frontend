"use client";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FlashCardElement from "./flash.card.element";

const FlashCards = ({ cards }: { cards: CardResponse[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setDirection(1);
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(currentIndex - 1);
        }
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.2 },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            transition: { duration: 0.2 },
        }),
    };

    return (
        <div>
            <div className="w-full h-full flex items-center justify-center relative">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={cards[currentIndex].id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full h-full flex items-center justify-center"
                    >
                        <FlashCardElement card={cards[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className='flex items-center justify-center gap-x-5 mt-5'>
                <Button sx={{
                    width: '80px',
                    height: '48px',
                    borderRadius: '36px',
                    borderWidth: '2px',
                }} variant='outlined' color='third' disabled={currentIndex === 0} onClick={handlePrev}>
                    <WestOutlinedIcon />
                </Button>

                <p className='text-gray-800-gray-400 font-semibold select-none'>{currentIndex + 1} / {cards.length}</p>

                <Button sx={{
                    width: '80px',
                    height: '48px',
                    borderRadius: '36px',
                    borderWidth: '2px',
                }} variant='outlined' color='third' disabled={currentIndex === cards.length - 1} onClick={handleNext}>
                    <EastOutlinedIcon />
                </Button>
            </div>
        </div>
    );
};

export default FlashCards;