import React, { Fragment } from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjThree } from "./Data";

function Services() {
  return (
    <Fragment>
      <Pricing />
      <InfoSection {...homeObjThree} />
    </Fragment>
  );
}

export default Services;
