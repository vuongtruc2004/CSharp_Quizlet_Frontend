import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        third: Palette['primary'];
    }

    interface PaletteOptions {
        third?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        third: true;
    }
}
