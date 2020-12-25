
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProductPage from './components/Products/ProductPage/ProductPage'
import Form from './components/Form/Form'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/product/:productName/:name" component={ProductPage}/>
        <Route path="/product/:productName" component={ProductPage}/>
        <Route path="/addform" component={Form}/>
      </Switch>
    </div>
  );
}

export default App;
