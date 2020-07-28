import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <p>Landing Page</p>
      <Link to="/test">Test</Link>
      <br />
      <Link to="/321">nowhere</Link>
    </div>
  );
};
