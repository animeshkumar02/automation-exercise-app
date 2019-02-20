import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="items" id="items">
          <div className="items-list">
              <div className="label" id="lbl_val_1">Value 1</div>
              <div className="amount" id="txt_val_1">$122,365.24</div>
              <div className="label" id="lbl_val_2">Value 2</div>
              <div className="amount" id="txt_val_2">$599.00</div>
              <div className="label" id="lbl_val_3">Value 3</div>
              <div className="amount" id="txt_val_3">$850,139.99</div>
              <div className="label" id="lbl_val_4">Value 4</div>
              <div className="amount" id="txt_val_4">$23,329.50</div>
              <div className="label" id="lbl_val_5">Value 5</div>
              <div className="amount" id="txt_val_5">$566.27</div>
              <div className="label" id="lbl_ttl_val">Total Balance</div>
              <div className="amount" id="txt_ttl_val">$1,000,000.00</div>
          </div>
      </div>
    );
  }
}

export default App;
