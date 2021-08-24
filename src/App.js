import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import SignIn from './containers/SignIn';
import Dashboard from './containers/Dashboard';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

function App(props) {
  const { isLoggedIn } = useSelector(state => state.auth)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            {isLoggedIn ? <Dashboard history={customHistory} /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/signin" exact >
            {isLoggedIn ? <Redirect to="/" /> : <SignIn history={customHistory} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
