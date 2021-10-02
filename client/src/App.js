/** @format */
// imports
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "./booking/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";

// Components
import TopNav from "./components/TopNav";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
