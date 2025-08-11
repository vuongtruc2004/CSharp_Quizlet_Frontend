'use client'
import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--color-gray-800-gray-200)',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'var(--color-gray-800-gray-200)',
        color: 'var(--color-gray200-twilight900)',
        fontWeight: 'bold'
    },
}));