import { withStyles, AppBar, Toolbar, Typography, IconButton, Container, Box } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Favorite from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Link from 'next/link'
import Interstitial from '../Interstitial'
import { useContext, useState } from "react";
import GlobalContext from "../../state/global-context";

const useStyles = theme => ({
    toolbar: {
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
    },
    iconBtn: {
        [theme.breakpoints.down('xs')]: {
            padding: 5
        }
    },
    cartIcon: {
        color: theme.palette.light
    },
    wishlistIcon: {
        color: theme.palette.light,
    }
});

const Header = ({ classes }) => {
    const { pushObject, open_interstitial } = useContext(GlobalContext);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        pushObject('open_interstitial', true);
    };

    return (
        <>
            <header className={classes.root}>
                <AppBar position="static" elevation={0}>
                    <Container maxWidth="lg">
                        <Toolbar className={classes.toolbar}>
                            <Link href="/" passHref>
                                <a>
                                    <Typography variant="h4" className={classes.title}>
                                        SuperShop
                                    </Typography>
                                </a>
                            </Link>
                            <Box>
                                <Link href='/boutique'>
                                    <IconButton className={classes.iconBtn}>
                                        <StorefrontIcon className={classes.wishlistIcon} />
                                    </IconButton>
                                </Link>
                                <Link href='/favoris'>
                                    <IconButton className={classes.iconBtn}>
                                        <Favorite className={classes.wishlistIcon} />
                                    </IconButton>
                                </Link>
                                <IconButton onClick={toggleDrawer(!open_interstitial)} className={classes.iconBtn}>
                                    <ShoppingBasketIcon className={classes.cartIcon} />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </header>
            <Interstitial />
        </>
    )
}

export default withStyles(useStyles)(Header)