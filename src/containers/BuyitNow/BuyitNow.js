import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import cookie from "react-cookies";

class BuyitNow extends Component {
  // state = { cookies: null };

  // onclickHandler = (e) => {
  //   e.preventDefault();
  //   cookie.save("onboarded", true, { path: "/" });

  //   axios
  //     .get("/shop/buy")
  //     .then((result) => {
  //       console.log(result);
  //       this.state = { cookies: cookie.loadAll() };
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    // console.log(cookie.loadAll());

    return (
      <div>
        <h5>buy</h5>
        {/* <Button onClick={this.onclickHandler}>hdsfhsdjkfs</Button> */}
      </div>
    );
  }
}

export default BuyitNow;
