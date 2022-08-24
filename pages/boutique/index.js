import DefaultLayaout from '../../components/DefaultLayout'
import { withStyles, Container, Grid, Typography } from '@material-ui/core'
import ProductsList from '../../components/boutique/ProductsList'
import { getAllProducts } from '../../config/api';
import FilterList from '../../components/boutique/FilterList';

const useStyles = theme => ({
    root: { marginBottom: theme.spacing(3) },
    h1: {
        margin: theme.spacing(5, 0)
    }
});

const Boutique = ({ products, classes }) => {
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.root}>

                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography variant="h3" component="h1" className={classes.h1}>SuperShop</Typography>
                    </Grid>
                </Grid>

                <Grid container>

                    <FilterList />
                    <Grid item xs={12} md={9} className={classes.productsListContainer}>
                        <ProductsList products={products} />
                    </Grid>

                </Grid>

            </Container>
        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Boutique)

export async function getStaticProps() {
    const response = await getAllProducts();
    const products = await response.json();

    return {
        props: {
            products
        }
    }
}
