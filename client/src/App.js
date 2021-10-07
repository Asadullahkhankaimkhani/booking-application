/** @format */
// imports
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./booking/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";

// Components
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
