import React, { Component } from "react";
import { PaystackButton } from "react-paystack";

import "./Checkout.css";

class Checkout extends Component {
  state = {
    publicKey: "pk_test_f6a68fe6a83ace13e427860b903d1089d72684e5",
    amount: 100000,
    email: "",
    name: "",
    phone: "",
  };
  render() {
    const componentProps = {
      email: this.state.email,
      amount: this.state.amount,
      metadata: {
        name: this.state.name,
        phone: this.state.phone,
      },
      publicKey: this.state.publicKey,
      text: "Pay Now",
      onSuccess: () => {
        alert("Thanks for doing business with us! Come back soon!!");
      },
      onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    };
    return (
      <div className="App">
        <div className="container">
          <div className="item">
            <div className="overlay-effect"></div>
            <img
              className="item-image"
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="product"
            />
            <div className="item-details">
              <p className="item-details__title">Coconut Oil</p>
              <p className="item-details__amount">
                NGN{this.state.amount / 100}
              </p>
            </div>
          </div>
          <div className="checkout-form">
            <form>
              <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </form>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
