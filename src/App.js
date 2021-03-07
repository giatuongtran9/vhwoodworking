
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ProductPage from './components/Products/ProductPage/ProductPage'
import Form from './components/Form/Form'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Comments from './components/Comment/Comment'


function App() {

  const isLogged = () => {
    let token = localStorage.getItem('currentUser') || null
    if (token) {
      token = JSON.parse(token)
      const exp = jwt_decode(token.token).exp
      if (Date.now() >= exp * 1000) {
        //token expired
        localStorage.removeItem('currentUser')
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/product/:productName/:name" component={ProductPage} exact/>
        <Route exact path="/addform" component={Form} exact/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/comment" component={Comments}/>
        <Route render={ () => <h1>404 Error</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
