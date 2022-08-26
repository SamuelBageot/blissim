import { Box, makeStyles, Typography, useTheme } from "@material-ui/core";
import Image from 'next/image';
import image from '/public/static/images/homepage-box-image.jpg';
import data from './data';
import KeyPoint from "./KeyPoint";

const HeroBanner = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        card: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: 10,
            display: 'flex',
            minHeight: '480px',
            lineHeight: '26px',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'center'
            },
        },
        imageContainer: {
            fontSize: 0,
            width: '50%',
            height: '100%',
            objectPosition: 'center',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: '400px',
                overflow: 'hidden'
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                height: 'initial',
                objectFit: 'initial',
                overflow: 'initial'
            },

        },
        img: {
            height: '100%',
            borderRadius: '10px 0 0 10px',
            [theme.breakpoints.down('sm')]: {
                borderRadius: '0',
            },
        },
        content: {
            padding: 32,
            width: '50%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: 10,
                marginTop: 10
            }
        }
    });
    const classes = useStyles();
    return (
        <Box className={classes.card}>
            <Box className={classes.imageContainer}>
                <Image
                    className={classes.img}
                    src={image}
                    placeholder="blur"
                    quality={50}
                    layout="responsive"
                />
            </Box>
            <Box className={classes.content}>
                {data.map(el => <KeyPoint key={el.id} {...el} />)}
            </Box>
        </Box>
    )
};

export default HeroBanner;