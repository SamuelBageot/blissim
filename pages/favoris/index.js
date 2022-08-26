import React, { useContext } from "react";
import ProductsList from "../../components/boutique/ProductsList";
import DefaultLayout from "../../components/DefaultLayout";
import GlobalContext from "../../state/global-context";
import { withStyles, Container, Grid, Typography, Button, Box } from '@material-ui/core'
import Link from "next/link";

const useStyles = theme => ({
    root: { marginBottom: theme.spacing(3) },
    h1: {
        margin: theme.spacing(5, 0)
    }
});

const WishlistPage = ({ classes }) => {
    const { wishlist } = useContext(GlobalContext);
    return (
        <DefaultLayout>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container justifyContent={'center'}>
                    <Grid item>
                        <Typography variant="h3" component="h1" className={classes.h1}>Favoris</Typography>
                    </Grid>
                </Grid>
                {wishlist.length < 1 ?
                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <Typography paragraph>Vous n'avez aucun article dans vos favoris</Typography>
                        <Link href='/boutique'>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ width: '250px' }}
                            >
                                Commencer
                            </Button>
                        </Link>
                    </Box>
                    :
                    <ProductsList products={wishlist} />
                }
            </Container>
        </DefaultLayout>
    )
};

export default withStyles(useStyles)(WishlistPage)