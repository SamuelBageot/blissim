import DefaultLayaout from '../components/DefaultLayout'
import { withStyles, Button, Container, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import HeroBanner from '../components/HeroBanner/HeroBanner';

const useStyles = theme => ({
    container: { marginTop: theme.spacing(5) },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '42px'
        },
    }
});

const Home = props => {
    const { classes } = props
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.container}>
                <Typography className={classes.title} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    SuperShop
                </Typography>
                <HeroBanner />
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Link href="/boutique" passhref>
                                <Button variant="contained" component="a" style={{ margin: '40px 0' }}>
                                    La Boutique
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Home)