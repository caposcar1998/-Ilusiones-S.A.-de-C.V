import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Almacenes from './components/almacenes/Almacenes';
import Home from './components/Home';
import Login from './components/Login';
import Menu from "../src/components/generic/Menu"
import Compras from './components/compras/Compras';
import Inventario from './components/inventario/Inventario';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <Menu/>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/home' exact  component={Home} />
            <Route path='/almacenes' exact  component={Almacenes} />
            <Route path='/compras' exact  component={Compras} />
            <Route path='/inventario' exact  component={Inventario} />
          </Switch>
        </BrowserRouter>
    </header>
  </div>
  );
}

export default App;
