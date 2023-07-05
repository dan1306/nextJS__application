import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>This is the about layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
