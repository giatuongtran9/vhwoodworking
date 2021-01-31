
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProductPage from './components/Products/ProductPage/ProductPage'
import Form from './components/Form/Form'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Comments from './components/Comment/Comment'


function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/product/:productName/:name" component={ProductPage} exact/>
        <Route path="/addform" component={Form} exact/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/comment" component={Comments}/>
        <Route render={ () => <h1>404 Error</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
