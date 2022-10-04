import { Fragment } from "react";
import NavigationBar from "../Navigation/navigation-bar.js";

const Faq = function () {
  return (
    <Fragment>
      <NavigationBar page="FAQ"></NavigationBar>
      <h1 className="text-3xl font-bold underline">FAQ Page</h1>
    </Fragment>
  );
};
export default Faq;
