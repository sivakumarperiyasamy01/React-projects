// import usestate hook from react
import { useState } from "react";

const User = (props) => {
  // create state varaibles
  const [count1] = useState(0);
  const [count2] = useState(0);
  const { name, age } = props;

  return (
    <div className="classcard">
      <h2>
        count1={count1},count2={count2}
      </h2>
      <h2>Name:{name}</h2>
      <h3>age:{age}</h3>
      <h3>email:siva@gmail.com</h3>
    </div>
  );
};

export default User;
