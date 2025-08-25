'use client'
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

export const CustomProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 16,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'var(--color-gray-400-gray-600)',
        ...theme.applyStyles('dark', {
            backgroundColor: 'var(--color-gray-400-gray-600)',
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 8,
        backgroundColor: '#18ae79',
        ...theme.applyStyles('dark', {
            backgroundColor: '#18ae79',
        }),
    },
}));