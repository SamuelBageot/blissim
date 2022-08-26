import ProductCard from './ProductCard'
import {Grid, withStyles} from "@material-ui/core";
import ProductsList from "../../pages/boutique";
import { useContext } from 'react';
import GlobalContext from '../../state/global-context';

const useStyles = theme => ({

});

const ProductList = ({classes, products}) => {
    const { wishlist } = useContext(GlobalContext);
    const wishedItemsIds = wishlist.map(item => item.id);
    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                    <ProductCard product={product} wishedItemsIds={wishedItemsIds} />
                </Grid>
            ))}
        </Grid>
    )
}

export default withStyles(useStyles)(ProductList)
