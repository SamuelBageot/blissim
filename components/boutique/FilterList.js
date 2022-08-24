import { Grid, List, ListItem, ListItemText, makeStyles, Typography, useTheme } from "@material-ui/core";

const FilterList = () => {
    const theme = useTheme();

    const useStyles = makeStyles({
        filterList: {

        },
        filterTitle: {
            fontSize: '30px',
            backgroundColor: theme.palette.primary,
            color: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center'
            }
        },
        filterListItem: {
            paddingLeft: 0,
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center'
            }
        }
    });

    const classes = useStyles();

    return (
        <Grid item xs={12} md={3} className={classes.filterList}>
            <Typography variant="h6" className={classes.filterTitle}>Catégories</Typography>
            <div className={classes.filterListContainer}>
                <List>
                    <ListItem className={classes.filterListItem}>
                        <ListItemText
                            primary="Maquillage"
                        />
                    </ListItem>
                    <ListItem className={classes.filterListItem}>
                        <ListItemText
                            primary="Soins visage"
                        />
                    </ListItem>
                    <ListItem className={classes.filterListItem}>
                        <ListItemText
                            primary="Parfums"
                        />
                    </ListItem>
                </List>
            </div>
        </Grid>
    )
}

export default FilterList;