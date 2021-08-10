import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 15,
    },
    root: {
        display: 'flex',
        border: '1px solid #32a852',
        borderRadius: '5%',
        backgroundColor: '#000000',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    card: {
        backgroundColor: '#ffff',
        transition: "transform 0.5s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        cursor: 'pointer',
    },
    applyButton: {
        textDecoration: 'underline',
        textDecorationColor: theme.palette.primary.main,
    },
    typography: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            transform: "scale3d(1.05, 1.05, 1)",
            cursor: 'pointer'
        }
    },
    image: {
        // opacity:'0.7'
        filter: 'brightness(0.7)'
    },
    hiring: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.02em'
    },
    join: {
        color: theme.palette.primary.main,
        marginBottom: '16px',
        fontWeight: 700,
        lineHeight: '20px',
        fontSize: '14px',
    },
    joinP: {
        fontSize: '16px',
        lineHeight: '24px'
    },
    ol:{
        listStyle: 'none',
        marginTop: 80,
    }

}));

function HomeComponent() {
    const classes = useStyles();

    return (
        <Container class={classes.container}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" className={classes.hiring}>
                            STORES &amp; SERVICES
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center">
                            We’re back at it! Whether you're looking for made-to-order jeans or sanitized curbside pickup, we’ve got you covered. Because there’s nothing like finding the perfect whoa-my-butt-looks-good jeans, that glittery bling or a new electronic.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src='images/Retail.jpg' alt='Retail' height='440px' width='100%'
                            className={classes.image}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} style={{justifyContent: 'center'}}>
                        <ol className={classes.ol}>
                            <li><Typography variant="h4" className={classes.join}>Join the Team</Typography></li>
                            <li><Typography variant="h3" gutterBottom className={classes.hiring}>WE’RE HIRING</Typography></li>
                            <li><Typography variant="body1" component='p' gutterBottom className={classes.joinP}>Become a store employee and get all the perks. From a fun, friendly work environment, to flexible scheduling, and—the best part—an employee discount.</Typography></li>
                            <span><Button className={classes.applyButton}>Apply Now</Button></span>
                        </ol>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src='images/hiring.jpg' alt='Hiring' height='100%' width='100%' style={{objectFit: 'cover'}} />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default HomeComponent;
