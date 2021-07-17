import React, { Fragment } from "react";
import { InfoSection } from "../components";
import { homeObjOne, homeObjThree } from "../Data";

function SignUp() {
  return (
    <Fragment>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </Fragment>
  );
}

export default SignUp;
