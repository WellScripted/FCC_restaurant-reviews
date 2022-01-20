import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";



function App() {
  const [user, setUser] = React.useState(null);

  //Login function
  async function login(user = null) {
    setUser(user);
  }

  //Logout function
  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/restaurants">Restaurant Reviews</a>

        <div className="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to={"/restaurants"} class="nav-link">Restaurants</Link>
          </li>
          <li className="nav-item" >
            {user ? (
              <a onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      {/* Routes Created */}
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        </Switch>
      </div>

    </div>
  );
}

export default App;
