import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Styling

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

// Components

import Navigation from './components/Layouts/Navigation'
import Cart from './components/Layouts/Cart'
import Hero from './components/Layouts/Hero'
import Container from './components/Layouts/Container'
import Products from './components/Products/Products'

// Provider & store

import { Provider} from 'react-redux'
import store from './store'
import { fetchAllProducts } from './actions/Products'


const App = () => {

  useEffect(() => {
    store.dispatch(fetchAllProducts())
  }, [])
  
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Hero />
        <Products />
        <Cart />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;