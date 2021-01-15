import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">
                <img
                  className="logo"
                  src="/images/DreamGuitarsLogo.png"
                  alt="Dream Guitars Logo"
                ></img>
              </Link>
              <div>
                <Link to="/admin">
                  <p className="admin-link">Admin</p>
                </Link>
                <p className="order-phone">Order now 888-XXX-XXXX</p>
                <img
                  className="cart-icon"
                  src="/images/shopping_cart.png"
                  alt="cart"
                />
              </div>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route exact path="/" component={HomeScreen} />
            </main>
            <footer>All rights reserved</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
