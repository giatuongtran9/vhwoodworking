
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProductPage from './components/Products/ProductPage/ProductPage'


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/product/:type/:productName" component={ProductPage}/>
        <Route path="/product/:type" component={ProductPage}/>
      </Switch>
    </div>
  );
}

export default App;
