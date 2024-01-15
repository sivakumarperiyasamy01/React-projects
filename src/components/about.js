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

        <UserClass />
      </div>
    );
  }
}

export default About;
