import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add, decrement} from '../redux/cart' 


//material-ui is
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    root: {
        // height: '98%',
      maxWidth: 345,
    },
    media: {
      height: 330,
    //   backgroundPosition: 'center',
      backgroundSize: 'fit',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    addIcon:{
      color: theme.palette.primary.light
    }
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));

function ProductData({data}) {
const {title, price, description, category, image} = data;
const dispatch = useDispatch()
let today = new Date().toLocaleDateString()

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <>
            <Card className={classes.root} elevation={15}>
                <CardHeader
                    title={title}
                    subheader={today}
                />
                <CardMedia
                component='img'
                    src= {image}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                     ${price}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>

                    <IconButton aria-label="add to shopping cart">
                        <AddShoppingCartIcon className={classes.addIcon} onClick={() => dispatch(add())}/>
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon color='primary' onClick={() => dispatch(decrement())}/>
                    </IconButton>

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Category: {category}</Typography>
                        <Typography paragraph>
                          {description}
                        </Typography>
                       
                    </CardContent>
                </Collapse>
            </Card>
 
        </>
    )
}

export default ProductData
