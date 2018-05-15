import React,{Component} from 'react';
import HomePage from '../components/home';
import AboutPage from '../components/about';
import Header from '../components/common/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
    state = {}
    render() { 
        return (  
            <BrowserRouter>
            <div className="App">
           
              <Header />
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/about' component={AboutPage} />
                  
                </Switch>
            </div>
          </BrowserRouter>
           
          )
    }
}


export default App;