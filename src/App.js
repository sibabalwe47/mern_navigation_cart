import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

// Styling 
import './assets/css/open-iconic-bootstrap.min.css'
import './assets/css/animate.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/aos.css'
import './assets/css/ionicons.min.css'
import './assets/css/bootstrap-datepicker.css'
import './assets/css/jquery.timepicker.css'
// import './assets/css/flaticon.css'
// import './assets/css/flaticon.css'
import './assets/css/icomoon.css'
import './assets/css/style.css'
import './App.scss'



// Bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Components

import Navigation from './components/Layouts/Navigation'
import Subscribe from './components/Forms/Subscribe'
import Footer from './components/Layouts/Footer'


// Pages 

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Cart from './Pages/CartPage'
import Checkout from './Pages/Checkout'
import Products from './Pages/Product'


const App = () => {


  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/product/:id" component={Products} />
      </Switch>
      {window.location.pathname !== '/cart' ? (<Subscribe />) : null}
      <Footer />
    </Router >
  )
}

export default App;