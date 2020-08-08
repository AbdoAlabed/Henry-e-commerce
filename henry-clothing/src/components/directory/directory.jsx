import React from "react";

import { connect } from "react-redux";
import Menu from "../menu/menu-item";
import "./directory.scss";

const Directory = ({ sections }) => {
  console.log(sections)
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
        <Menu
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ directory: { sections } }) => {
  return {
    sections: sections,
  };
};

export default connect(mapStateToProps)(Directory);
