import { useEffect, useState } from "react";

const useOnlinestatus = () => {
  const [onlinestatus, setonlinestatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => {
      setonlinestatus(false);
    });
    addEventListener("online", () => {
      setonlinestatus(true);
    });
  }, []);

  return onlinestatus;
};
export default useOnlinestatus;
