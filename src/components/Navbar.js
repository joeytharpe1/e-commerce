import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
//icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import IconButton from '@material-ui/core/IconButton';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';

import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    title: {
        // flex: 1,
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
        marginRight: 'auto'
    },
    button: {
        padding: 0,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            textDecoration: 'underline'
        }
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    paper: {
        marginLeft: 0,
        marginRight: 0,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 30
    },
    toolbar: {
        display: 'flex',
        flex: 1,
        marginRight: 20,
        // textAlign: 'left',
        // align: 'left',
        justifyContent: 'flex-end'
    },

}));


function Navbar() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar >
                    <Typography variant="h6" align="left">
                        <Button component={Link} to='/' className={classes.button}
                            color="inherit"
                        >
                            Home
                        </Button>
                    </Typography>

                    <Toolbar className={classes.toolbar} />

                    <Paper component="form" className={classes.paper} align="center">
                        <InputBase
                            className={classes.input}
                            placeholder="Search.."
                            inputProps={{ 'aria-label': 'search..' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                    <Toolbar className={classes.toolbar} />

                    <ButtonGroup variant="text" size='small' color='primary' disableElevation>
                        <Button component={Link} to='/order' className={classes.button}
                            color="inherit"
                        >
                            Orders
                        </Button>

                        <Button component={Link} to='/payment' className={classes.button}
                            color="inherit"
                            endIcon={<PaymentRoundedIcon />}
                        >
                        </Button>

                        <Button component={Link} to='/cart' className={classes.button}
                            endIcon={<ShoppingCartRoundedIcon />}
                            color="inherit"
                        >
                        </Button>
                    </ButtonGroup>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
