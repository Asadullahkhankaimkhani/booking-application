/** @format */
// imports
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Home from "./booking/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./user/Dashboard";
import SellerDashboard from "./user/SellerDashboard";
import New from "./hotels/New";
import StripeCallback from "./stripe/StripeCallback";

// Components
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";

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
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/dashboard/seller"
            component={SellerDashboard}
          />
          <PrivateRoute exact path="/hotels/new" component={New} />
          <PrivateRoute
            exact
            path="/stripe/callback"
            component={StripeCallback}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
