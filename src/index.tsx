import React from "react";
import ReactDOM from "react-dom";
import App from "containers/App";
import config from "config";

ReactDOM.render(<App appConfig={config} />, document.getElementById("root"));
