import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: '#283149',
        },
        secondary: {
            main: '#404b69',
        },
        accent: '#00818a',
        light: '#dbedf3',
    },
    spacing: 8,
})

// Colors
// #283149
// #404b69
// #00818a
// #dbedf3

export default theme;