import React from "react";

import Directory from "../../components/directory/directory";
import {HomePageStyle} from './homepage.styles'

const HomePage = (props) => {
  return (
    <HomePageStyle>
      <Directory />
    </HomePageStyle>
  );
};
export default HomePage;
