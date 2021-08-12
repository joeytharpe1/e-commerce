import React from 'react';
import { Switch, Route } from 'react-router-dom';

//material-ui 
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//path files to import
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import CartComponent from './CartComponent';
import OrderComponent from './OrderComponent';
import PaymentComponent from './PaymentComponent';
import FooterComponent from './FooterComponent';

//material-ui theme layout
const theme = createTheme({
    palette: {
        primary: {
            main: '#4F0000'
        },
        secondary: {
            main: '#ADB3BC'
        },
        warning: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'Garamond'
    }
})

function MainComponent() {
    return (
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <HeaderComponent />
                <Switch>
                    <Route exact path='/' component={HomeComponent} />
                    <Route exact path='/cart' component={CartComponent} />
                    <Route exact path='/order' component={OrderComponent} />
                    <Route exact path='/payment' component={PaymentComponent} />
                </Switch>
                <FooterComponent />
            </ThemeProvider>
        </CssBaseline>
    )
}

export default MainComponent;
