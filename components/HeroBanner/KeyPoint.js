import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";

const KeyPoint = ({ title, content, icon }) => {
    const theme = useTheme();
    const useStyles = makeStyles({
        element: {
            display: 'flex',
            alignItems: 'center',
            '&:not(:last-of-type)': {
                marginBottom: 50
            },
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'initial'
            },
        },
        elementTitle: {
            lineHeight: "28px",
            fontSize: '22px',
            marginBottom: 8
        },
        elementContent: {
            fontSize: '16px',
            [theme.breakpoints.down('sm')]: {
            },
        },
        icon: {
            marginRight: 28
        }
    });
    const classes = useStyles();
    return (
        <Box className={classes.element}>
            <Box className={classes.icon}>{icon}</Box>
            <Box>
                <Typography className={classes.elementTitle} variant="h2">{title}</Typography>
                <Typography className={classes.elementContent}>{content}</Typography>
            </Box>
        </Box>
    )
};

export default KeyPoint;