import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
    withStyles,
    IconButton
} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useContext} from "react";
import GlobalContext from "../../state/global-context";

const useStyles = theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    content: {
        width: "100%",
    },
    thumbnailContainer: {
        padding: theme.spacing(2),
        textAlign: "center",
    },
    thumbnail: {
        maxHeight: '170px',
        width: "auto",
        margin: "auto",
    },
    name: {
        fontSize: '1rem',
    },
    iconBtn: {
        padding: 0
    }
});

const ProductCard = ({classes, product, wishedItemsIds}) => {
    const { addProductToCart, addProductToWishlist, removeProductToWishlist, pushObject } = useContext(GlobalContext);
    const isFavorite = wishedItemsIds.includes(product.id);

    const handleAddToCart = (e, product) => {
        addProductToCart(product, pushObject('open_interstitial', true))
    }

    const handleAddToWishlist = (e, product) => {
        addProductToWishlist(product);
    }

    const handleRemoveToWishlist = (e, product) => {
        removeProductToWishlist(product);
    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.thumbnailContainer}>
                    <CardMedia
                        component="img"
                        alt={product.title}
                        image={product.image}
                        className={classes.thumbnail}
                        title="Contemplative Reptile"
                    />
                </div>
                <Typography gutterBottom component="h2" className={classes.name}>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.desc}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={e => handleAddToCart(e, product)}>
                    <ShoppingBasketIcon color="secondary"/>
                </IconButton>
                {
                    isFavorite ?
                        <IconButton className={classes.iconBtn} onClick={e => handleRemoveToWishlist(e, product)}>
                            <Favorite color="secondary"/>
                        </IconButton>
                        :
                        <IconButton className={classes.iconBtn} onClick={e => handleAddToWishlist(e, product)}>
                            <FavoriteBorderIcon color="secondary"/>
                        </IconButton>
                }
            </CardActions>
        </Card>
    )
}

export default withStyles(useStyles)(ProductCard)