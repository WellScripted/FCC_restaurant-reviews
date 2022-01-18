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

      {/* Create Routes for the pages -- 1:18:00 in FCC Video */}
      <div className="container mt-3">
        <Switch>

        </Switch>
      </div>

    </div>
  );
}

export default App;
