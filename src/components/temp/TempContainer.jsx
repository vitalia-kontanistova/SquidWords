import React from "react";
import { connect } from "react-redux";
import Temp from "./Temp";

const TempContainer = (props) => {
  return <Temp {...props} />;
};

let mapStateToPRops = (state) => ({});

export default connect(mapStateToPRops, {})(TempContainer);
