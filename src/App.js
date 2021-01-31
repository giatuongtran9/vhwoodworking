
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'

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
      <HashRouter>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/product/:productName/:name" component={ProductPage} exact/>
        <Route path="/addform" component={Form} exact/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/comment" component={Comments}/>
        <Route render={ () => <h1>404 Error</h1>}/>
      </HashRouter>
    </div>
  );
}

export default App;
