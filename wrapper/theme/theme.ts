'use client';
import { createTheme } from '@mui/material/styles';
import { Quicksand } from 'next/font/google';
import { MUI_CUSTOM_COLORS } from './palatte';

export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-quicksand'
});

const theme = createTheme({
    palette: {
        primary: {
            main: MUI_CUSTOM_COLORS.primary.main
        },
        secondary: {
            main: MUI_CUSTOM_COLORS.secondary.main
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
                    backgroundColor: MUI_CUSTOM_COLORS.skeleton.main,
                },
            },
        },
    },
});

export default theme;
