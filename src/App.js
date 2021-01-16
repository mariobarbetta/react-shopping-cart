import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";
import MobileCart from "./components/MobileCart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileCart: false,
    };
  }

  // openModal = () => {
  //   this.setState({ product });
  // };

  closeModal = () => {
    this.setState({ showMobileCart: false });
  };

  showMobileCartModal = () => {
    this.setState({ showMobileCart: true });
  };

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
                <MobileCart
                  showMobileCartModal={this.showMobileCartModal}
                  showMobileCart={this.state.showMobileCart}
                  closeModal={this.closeModal}
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
