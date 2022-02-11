import { createTheme } from '@mui/material';


export const START_WARS_IMAGE = 'https://yt3.ggpht.com/ytc/AKedOLSe-xFPeYa1w2FH8cnY_cludN8Hg0LbIz8iqhhJww=s900-c-k-c0x00ffffff-no-rj';

export const COLORS = {
    primary: '#e6d21e',
    secondary: '#fff',
    info: '#40415f',
};


const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
        },
        secondary: {
            main: COLORS.secondary,
        },
        info: {
            main: COLORS.info,
        }
    },
});


export default theme;