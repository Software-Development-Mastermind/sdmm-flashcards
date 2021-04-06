import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Login from 'components/Login/Login';
import './App.css';

function App() {
  return (<>
    <CssBaseline />
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
    </Router>
  </>);
}

export default App;
