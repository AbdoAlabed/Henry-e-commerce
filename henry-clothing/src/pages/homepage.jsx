import React from "react";

import "./homepage.scss";
import Directory from "../components/directory/directory";

const HomePage = (props) => {
  return (
    <div className="homepage">
      {console.log(props)}
      <Directory />
    </div>
  );
};
export default HomePage;
