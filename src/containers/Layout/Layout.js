import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom';


//Components
import Category from '../../components/Category/Category';
import BootstrapNavbar from '../../components/BootstrapNavbar/BootstrapNavbar';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';
import SignIn from '../../components/SignIn/SignIn';
import DashBoard from '../../components/Dashboard/DashBoard';

const Layout = () => {
    return (
        <Fragment>
            <BootstrapNavbar/>
            <Switch>
                <Route path='/' component={Product} exact />
                <Route path='/product' component={Product} />
                <Route path='/category' component={Category} />
                <Route path='/dashboard' component={DashBoard} />
                <Route path='/signin' component={SignIn} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default Layout;