import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
   <>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
        </Switch>
      </BrowserRouter>
   </>
  );
}

export default App;
