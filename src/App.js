import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/filter";
import Cart from "./components/Cart";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">The Music Source</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>All rights reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
