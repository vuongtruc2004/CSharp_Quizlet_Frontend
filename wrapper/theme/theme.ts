'use client';
import { createTheme } from '@mui/material/styles';
import { Quicksand } from 'next/font/google';
import { colors } from './palatte';

export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-quicksand'
});

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main
        }
    },
    typography: {
        fontFamily: quicksand.style.fontFamily
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '12px',
                    minWidth: 'max-content',
                    height: '38px'
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.skeleton.main,
                },
            },
        },
    },
});

export default theme;
