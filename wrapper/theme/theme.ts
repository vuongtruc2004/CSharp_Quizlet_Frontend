'use client';
import { createTheme } from '@mui/material/styles';
import { Quicksand } from 'next/font/google';

export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-quicksand'
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#4255ff"
        },
        secondary: {
            main: "#202040"
        },
        third: {
            main: "#f6f7fb"
        },
        mode: 'dark',
    },
    typography: {
        fontFamily: quicksand.style.fontFamily
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                    minWidth: 'max-content',
                    height: '40px'
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                },
            },
        },
    },
});

export default theme;
