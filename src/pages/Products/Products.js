import React, { Fragment } from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";

function Products() {
  return (
    <Fragment>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </Fragment>
  );
}

export default Products;
