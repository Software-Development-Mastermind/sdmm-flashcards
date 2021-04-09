import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from 'components/Login/Login';
import HomePage from 'components/HomePage/HomePage';
import Navbar from 'components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/home' component={HomePage} />
      </Router>
    </>
  );
}

export default App;
