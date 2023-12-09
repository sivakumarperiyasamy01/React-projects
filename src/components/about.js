import User from "./user";
import UserClass from "./userclass";
import React from "react";
import Usercontext from "../utills/usercontext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Aboutpage">
        <Usercontext.Consumer>
          {(data) => <h1>{data.loggedinuser}</h1>}
        </Usercontext.Consumer>
        <h1>About us</h1>
        <h3>Mission</h3>
        <h3>Vision</h3>

        <UserClass />
      </div>
    );
  }
}

export default About;
