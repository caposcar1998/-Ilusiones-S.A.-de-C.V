import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/home' exact  component={Home} />
          </Switch>
        </BrowserRouter>
    </header>
  </div>
  );
}

export default App;
