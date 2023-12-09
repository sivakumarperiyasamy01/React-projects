import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useresmenu = (id) => {
  // fectch data
  const [rescardinfo, setrescardinfo] = useState(null);

  useEffect(() => {
    fecthmenu();
  }, []);

  const fecthmenu = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setrescardinfo(json.data);
  };
  return rescardinfo;
};

export default useresmenu;
